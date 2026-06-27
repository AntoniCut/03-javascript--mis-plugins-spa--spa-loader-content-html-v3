/*
    *  -----------------------------------------------------------------------------  *
    *  -----  /generate-markdown-shiki.js  -----------------------------------------  *
    *  -----------------------------------------------------------------------------  *
    *                                                                                 *
    *  Lee las rutas del SPA, deriva los archivos fuente por convención de            *
    *  nombres, y genera los bloques HTML resaltados con Shiki en                     *
    *  src/markdown-shiki/.                                                           *
    *                                                                                 *
    *  Uso: pnpm code-highlight                                                       *
    *                                                                                 *
    *  Convención de nombres:                                                         *
    *    MarkdownShikiHtml path  →  fuente                                            *
    *    .../01-markdown-shiki-ts.html   →  src/scripts/ts/.../01-markdown-shiki.ts   *
    *    .../01-markdown-shiki-js.html   →  src/scripts/js/.../01-markdown-shiki.js   *
    *    .../01-markdown-shiki-html.html →  src/pages-components/.../01-markdown-shiki.html *
    *    .../01-markdown-shiki-css.html  →  app/css/pages/.../01-markdown-shiki.css   *
    *    .../01-markdown-shiki-scss.html →  src/scss/pages/.../01-markdown-shiki.scss *
    *                                                                                 *
    *  NOTA: las entradas -css leen el CSS compilado por Gulp (app/css/pages/),       *
    *  por lo que la tarea `styles` debe ejecutarse antes que esta generación.        *
    *  Las entradas -scss leen directamente el SCSS fuente de src/scss/pages/.        *
    *                                                                                 *
    *  -----------------------------------------------------------------------------  *
*/


import { codeToHtml } from 'shiki';
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';


//  -----  Importar tipos personalizados para JSDoc  -----
/** @typedef {import('./types/index.js').Route} Route */
/** @typedef {import('./types/index.js').MarkdownShikiEntry} MarkdownShikiEntry */
/** @typedef {Record<string, Route>} RouteModule - Módulo de ruta importado dinámicamente. */


/**
 * @typedef {Object} ShikiGenResult - Resultado de generar (u omitir) un archivo HTML con Shiki.
 * @property {'generated' | 'skipped'} status - Estado final de la operación.
 * @property {string} message - Mensaje de log asociado al resultado.
 */


/** - `Directorio del archivo actual` */
const __dirname  = dirname(fileURLToPath(import.meta.url));

/** - `Path del archivo actual` */
const __filename = fileURLToPath(import.meta.url);

/** - `Marcador de ruta para los archivos de markdown-shiki` */
const MARKER     = 'markdown-shiki/';

/** - `Tema de Shiki` */
const SHIKI_THEME = 'dark-plus';

/**
 *  - `Flag global`: cuando es `true`, se elimina el bloque de comentario tipo
 *  "banner" inicial del archivo fuente antes de generarlo con Shiki.
 *  El banner es el comentario de bloque (JS/TS/CSS/SCSS) o el comentario HTML
 *  que aparece al inicio de los archivos como cabecera decorativa.
 */
const STRIP_HEADER_BANNER = true;

/**
 *  - `Patrón que identifica un comentario tipo "banner"`.
 *  Se considera banner cualquier comentario (de bloque, HTML o línea) que
 *  contenga la secuencia decorativa `-----`.
 */
const BANNER_PATTERN = /-----/;



/**
 * -----------------------------------------
 * -----  `deriveSource(htmlUrlPath)`  -----
 * -----------------------------------------
 * - A partir del path URL de un archivo .html en markdown-shiki, deduce
 *   el path del archivo fuente (.ts, .js, .html, .css o .scss) usando la convención
 *   de nombres multi-sufijo.
 * @param {string} htmlUrlPath  - p.ej. `/base/app/markdown-shiki/02-tipos-de-datos/01-booleans-ts.html`
 * @returns {{ srcPath: string, lang: string, relHtml: string } | null} - Objeto con la información del archivo fuente o `null` si no se puede derivar.
 */

const deriveSource = (htmlUrlPath) => {

    /** - `Índice del marcador en la URL` */
    const idx = htmlUrlPath.indexOf(MARKER);
    
    //  -----  Si no se encuentra el marcador, no se puede derivar el fuente  -----
    if (idx === -1) 
        return null;

    /** - `Ruta relativa del archivo HTML dentro de markdown-shiki` */
    const relHtml = htmlUrlPath.slice(idx + MARKER.length);
   

    //*  -----  Derivar el path del archivo si termina en -html.html  -----
    if (relHtml.endsWith('-html.html')) {

        /** - `Ruta relativa del archivo fuente HTML` */
        const relSrc = relHtml.replace(/-html\.html$/, '.html').replace(/^pages\//, '');

        //  -----  Subpath pages/ → src/pages-components/ (fuentes de page-components)  -----
        //  -----  El contenido real de cada vista vive ahora en pages-components/,  -----
        //  -----  mientras que src/pages/ solo conserva el wrapper con el placeholder  -----
        //  -----  data-component-page y la sección Markdown.                                -----
        return {
            srcPath: join(__dirname, 'src/pages-components', relSrc),
            lang: 'html',
            relHtml
        };
    }


    //*  -----  Derivar el path del archivo si termina en -css.html  -----
    if (relHtml.endsWith('-css.html')) {
        
        /** - `Ruta relativa del archivo fuente CSS` */
        const relSrc = relHtml.replace(/-css\.html$/, '.css').replace(/^pages\//, '');
        
        //  -----  Subpath pages/ → app/css/pages/ (fuentes de CSS)  -----
        return {
            srcPath: join(__dirname, 'app/css/pages', relSrc),
            lang: 'css',
            relHtml
        };
    }


    //*  -----  Derivar el path del archivo si termina en -scss.html  -----
    if (relHtml.endsWith('-scss.html')) {
        
        /** - `Ruta relativa del archivo fuente SCSS` */
        const relSrc = relHtml.replace(/-scss\.html$/, '.scss').replace(/^pages\//, '');
        
        //  -----  Subpath pages/ → src/scss/pages/ (fuentes de SCSS)  -----
        return {
            srcPath: join(__dirname, 'src/scss/pages', relSrc),
            lang: 'scss',
            relHtml
        };
    }
  


    //*  -----  Derivar el path del archivo si termina en -js.html  -----
    if (relHtml.endsWith('-js.html')) {
        
        /** - `Ruta relativa del archivo fuente JavaScript` */
        const relSrc = relHtml.replace(/-js\.html$/, '.js');
        
        //  -----  Subpath plugins/ → src/plugins/ (fuentes de plugins)  -----
        if (relSrc.startsWith('plugins/')) {
            
            /** - `Ruta relativa del archivo fuente del plugin` */
            const pluginRelSrc = relSrc.replace(/^plugins\//, '');
            
            //  -----  Subpath plugins/ → src/plugins/ (fuentes de plugins)  -----
            return {
                srcPath: join(__dirname, 'src/plugins', pluginRelSrc),
                lang: 'javascript',
                relHtml
            };
        }

        //  -----  Subpath scripts/ → src/scripts/js/ (fuentes de scripts)  -----
        return {
            srcPath: join(__dirname, 'src/scripts/js', relSrc),
            lang: 'javascript',
            relHtml
        };
    }


    //*  -----  Derivar el path del archivo si termina en -ts.html  -----
    if (relHtml.endsWith('-ts.html')) {
        
        /** - `Ruta relativa del archivo fuente TypeScript` */
        const relSrc = relHtml.replace(/-ts\.html$/, '.ts');
        
        //  -----  Subpath scripts/ → src/scripts/ts/ (fuentes de scripts)  -----
        return {
            srcPath: join(__dirname, 'src/scripts/ts', relSrc),
            lang: 'typescript',
            relHtml
        };
    }


    //*  -----  No se puede derivar el fuente  -----
    return null;

}



/**
 * ---------------------------------------
 * -----  `stripHeaderBanner(code)`  -----
 * ---------------------------------------
 * 
 * - Elimina todos los bloques de comentario tipo "banner" consecutivos que aparecen
 *   al inicio del código fuente, hasta llegar al código real.
 *
 * - Soporta:
 *   - Bloques de comentario de bloque (JS/TS/CSS/SCSS).
 *   - Comentarios HTML (angle-bracket).
 *   - Líneas `// ...` consecutivas (JS/TS).
 *
 * - Un comentario se considera "banner" si contiene la secuencia decorativa
 * `-----`. El algoritmo localiza el PRIMER banner del archivo (en cualquier
 * posición, para soportar cabeceras tipo `// @ts-nocheck` + `"use strict";`
 * que preceden al banner) y desde allí elimina todos los banners consecutivos
 * (permitiendo whitespace/newlines entre ellos) hasta llegar al código real o
 * a un comentario que no sea banner.
 *
 * - Esto es necesario porque el CSS compilado por Gulp desde los `@import`/`@use`
 * de Sass puede apilar varios banners al inicio del archivo.
 *
 * @param {string} code  - Código fuente completo.
 * @returns {string}    - Código fuente sin los banners iniciales.
 */

const stripHeaderBanner = (code) => {

    //  -----  Eliminar prólogo específico de los archivos .cjs.js  -----
    //  -----  `// @ts-nocheck` + `"use strict";` antes del banner  -----
    code = code.replace(/^(?:\/\/\s*@ts-nocheck\s*\n|"\s*use strict\s*"\s*;\s*\n)+/, '');

    //  -----  Patrón para cualquier tipo de comentario  -----
    const ANY_COMMENT_RE = /\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->|\/\/[^\n]*\n/g;

    //  -----  Localizar el primer banner del archivo (en cualquier posición)  -----
    let firstIdx = -1;
    let firstEnd = -1;

    //  -----  Iterar sobre todos los comentarios del código  -----
    for (const m of code.matchAll(ANY_COMMENT_RE)) {

        if (BANNER_PATTERN.test(m[0])) {
            firstIdx = m.index;
            firstEnd = m.index + m[0].length;
            break;
        }
    }

    //  -----  Si no se encuentra ningún banner, devolver el código original  -----
    if (firstIdx === -1) 
        return code;

    //  -----  Desde el primer banner, consumir banners consecutivos (whitespace entre ellos)  -----
    let endIdx = firstEnd;
    const COMMENT_AFTER_BANNER_RE = /^\s*(?:\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->|\/\/[^\n]*\n)/;

    //  -----  Iterar mientras haya comentarios consecutivos después del primer banner  -----
    while (true) {

        
        /** - contiene el código restante después del último banner procesado */
        const rest = code.slice(endIdx);
        
        /** - contiene el siguiente comentario después del último banner procesado */
        const match = rest.match(COMMENT_AFTER_BANNER_RE);

        //  -----  Si no hay más comentarios, salir del bucle  -----
        if (!match) 
            break;
        
        //  -----  Si el siguiente comentario no es un banner, salir del bucle  -----
        if (!BANNER_PATTERN.test(match[0])) 
            break;

        //  -----  Avanzar el índice final al final del siguiente banner  -----
        endIdx += match[0].length;
    }

    
    /** - Contiene el código antes del primer banner */
    const before = code.slice(0, firstIdx);
    
    /** - Contiene el código después del último banner */
    const after = code.slice(endIdx).replace(/^\s*\n/, '');

    //  -----  Devolver el código sin los banners iniciales, manteniendo el prólogo antes del primer banner  -----
    return (before + after).replace(/^\s*\n/, '');

}



/**
 * ---------------------------------------
 * -----  `generateMarkdownShiki()`  -----
 * ---------------------------------------
 * - Lee las rutas del SPA, deriva los archivos fuente y genera los bloques
 *   HTML resaltados con Shiki en src/markdown-shiki/.
 * - Las entradas -css leen el CSS compilado por Gulp en app/css/pages/, por lo
 *   que la tarea `styles` debe haberse ejecutado antes.
 * @async
 * @returns {Promise<{ generated: number, skipped: number }>}
 */

export const generateMarkdownShiki = async () => {

    
    /** - Contiene la ruta del directorio de rutas */
    const routesDir  = join(__dirname, 'src/routes');
    
    
    /** - Contiene los archivos de ruta */
    const routeFiles = readdirSync(routesDir).filter(
        f => f.startsWith('route-') && f.endsWith('.js') && f !== 'route-manifest.js'
    );

    
    /** @type {Set<string>} - Contiene los paths HTML únicos */
    const htmlPaths = new Set();

    //  -----  Iterar sobre los archivos de ruta y extraer los paths HTML de MarkdownShikiHtml  -----
    for (const file of routeFiles) {

        
        /** @type {RouteModule} */
        const mod = await import(`./src/routes/${file}`);

        /** @type {Route | undefined} */
        const route = Object.values(mod).find(
            v => v && typeof v === 'object' && Array.isArray(v.MarkdownShikiHtml)
        );

        if (route?.MarkdownShikiHtml) {
            for (const p of route.MarkdownShikiHtml) {
                if (p.url) htmlPaths.add(p.url);
            }
        }
    }


    //  -----  Generar HTML para cada entrada (en paralelo con Promise.all)  -----
    
    /** @type {ShikiGenResult[]} */
    const results = await Promise.all(

        [...htmlPaths].map(async (htmlPath) => {

            /** - Contiene la información derivada del path HTML */
            const derived = deriveSource(htmlPath);

            //  -----  Si no se puede derivar el fuente, omitir la entrada  -----
            if (!derived) {
                return { 
                    status: 'skipped', 
                    message: `⚠️  No se puede derivar el fuente para: ${htmlPath}` };
            }

            //  -----  Desestructurar la información derivada  -----
            const { srcPath, lang, relHtml } = derived;

            if (!existsSync(srcPath)) {
                const rel = srcPath.replace(__dirname + '/', '');
                return {
                    status: 'skipped',
                    message: `⚠️  Fuente no encontrado: src/markdown-shiki/${relHtml}\n     Esperado en: ${rel}\n     Comprueba que el nombre del archivo fuente coincide con el del .html`
                };
            }

            /** - Contiene el código fuente sin procesar */
            const rawCode = readFileSync(srcPath, 'utf-8');
            
            /** - Contiene el código fuente procesado */
            const code = STRIP_HEADER_BANNER ? stripHeaderBanner(rawCode) : rawCode;
            
            /** - Contiene el HTML generado a partir del código fuente */
            const html = await codeToHtml(code, { lang, theme: SHIKI_THEME });

            /** - Contiene el path de salida del archivo HTML generado en src/markdown-shiki/ */
            const outPath = join(__dirname, 'src/markdown-shiki', relHtml);
            
            
            //  -----  Crear directorio de salida si no existe  -----
            mkdirSync(dirname(outPath), { recursive: true });
            
            //  -----  Escribir el archivo HTML generado  -----
            writeFileSync(outPath, html, 'utf-8');

            //  -----  Devolver el resultado de la generación  -----
            return { 
                status: 'generated', 
                message: `✅  src/markdown-shiki/${relHtml}` 
            };

        })

    );


    //  -----  Imprimir resultados en orden para mantener logs legibles  -----
    for (const r of results) 
        console.log(r.message);

    /** - Contiene el número de archivos HTML generados */
    const generated = results.filter(r => r.status === 'generated').length;
    
    /** - Contiene el número de archivos HTML omitidos */
    const skipped   = results.filter(r => r.status === 'skipped').length;

    console.log(`\n🎉  Completado — generados: ${generated} | omitidos: ${skipped}`);

    //  -----  Devolver el resumen de la operación  -----
    return { 
        generated, 
        skipped 
    };
    
}



//*  -----  Ejecutar solo cuando se invoca directamente: pnpm code-highlight  -----
if (process.argv[1] === __filename)
    await generateMarkdownShiki();

