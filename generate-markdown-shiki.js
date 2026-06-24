/*
    *  -----------------------------------------------------------------------------  *
    *  -----  /generate-markdown-shiki.js  -----------------------------------------  *
    *  -----------------------------------------------------------------------------  *
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
 *    .../01-markdown-shiki-html.html →  src/pages/.../01-markdown-shiki.html      *
 *    .../01-markdown-shiki-css.html  →  app/css/pages/.../01-markdown-shiki.css   *
 *    .../01-markdown-shiki-scss.html →  src/scss/pages/.../01-markdown-shiki.scss *
 *                                                                                 *
 *  NOTA: las entradas -css leen el CSS compilado por Gulp (app/css/pages/),       *
 *  por lo que la tarea `styles` debe ejecutarse antes que esta generación.        *
 *  Las entradas -scss leen directamente el SCSS fuente de src/scss/pages/.         *
    *  -----------------------------------------------------------------------------  *
*/

import { codeToHtml } from 'shiki';
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';


const __dirname  = dirname(fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);

const MARKER     = 'markdown-shiki/';
const SHIKI_THEME = 'dark-plus';


/**
 * A partir del path URL de un archivo .html en markdown-shiki, deduce
 * el path del archivo fuente (.ts, .js, .html, .css o .scss) usando la convención
 * de nombres multi-sufijo.
 *
 * @param {string} htmlUrlPath  - p.ej. `/base/app/markdown-shiki/02-tipos-de-datos/01-booleans-ts.html`
 * @returns {{ srcPath: string, lang: string, relHtml: string } | null}
 */
function deriveSource(htmlUrlPath) {

    const idx = htmlUrlPath.indexOf(MARKER);
    if (idx === -1) return null;

    const relHtml = htmlUrlPath.slice(idx + MARKER.length);

    if (relHtml.endsWith('-ts.html')) {
        const relSrc = relHtml.replace(/-ts\.html$/, '.ts');
        return {
            srcPath: join(__dirname, 'src/scripts/ts', relSrc),
            lang: 'typescript',
            relHtml
        };
    }

    if (relHtml.endsWith('-js.html')) {
        const relSrc = relHtml.replace(/-js\.html$/, '.js');
        return {
            srcPath: join(__dirname, 'src/scripts/js', relSrc),
            lang: 'javascript',
            relHtml
        };
    }

    if (relHtml.endsWith('-html.html')) {
        const relSrc = relHtml.replace(/-html\.html$/, '.html').replace(/^pages\//, '');
        return {
            srcPath: join(__dirname, 'src/pages', relSrc),
            lang: 'html',
            relHtml
        };
    }

    if (relHtml.endsWith('-scss.html')) {
        const relSrc = relHtml.replace(/-scss\.html$/, '.scss').replace(/^pages\//, '');
        return {
            srcPath: join(__dirname, 'src/scss/pages', relSrc),
            lang: 'scss',
            relHtml
        };
    }

    if (relHtml.endsWith('-css.html')) {
        const relSrc = relHtml.replace(/-css\.html$/, '.css').replace(/^pages\//, '');
        return {
            srcPath: join(__dirname, 'app/css/pages', relSrc),
            lang: 'css',
            relHtml
        };
    }

    return null;
}


/**
 * Lee las rutas del SPA, deriva los archivos fuente y genera los bloques
 * HTML resaltados con Shiki en src/markdown-shiki/.
 *
 * Las entradas -css leen el CSS compilado por Gulp en app/css/pages/, por lo
 * que la tarea `styles` debe haberse ejecutado antes.
 *
 * @returns {Promise<{ generated: number, skipped: number }>}
 */
export async function generateMarkdownShiki() {

    //  -----  Leer todos los archivos de ruta  -----
    const routesDir  = join(__dirname, 'src/routes');
    const routeFiles = readdirSync(routesDir).filter(
        f => f.startsWith('route-') && f.endsWith('.js') && f !== 'route-manifest.js'
    );

    //  -----  Recolectar todos los MarkdownShikiHtml únicos  -----
    const htmlPaths = new Set();

    for (const file of routeFiles) {

        const mod   = await import(`./src/routes/${file}`);
        const route = Object.values(mod).find(
            v => v && typeof v === 'object' && Array.isArray(v.MarkdownShikiHtml)
        );

        if (route?.MarkdownShikiHtml) {
            for (const p of route.MarkdownShikiHtml) {
                const urlStr = typeof p === 'string' ? p : p.url;
                if (urlStr) htmlPaths.add(urlStr);
            }
        }
    }


    //  -----  Generar HTML para cada entrada (en paralelo con Promise.all)  -----
    const results = await Promise.all(

        [...htmlPaths].map(async (htmlPath) => {

            const derived = deriveSource(htmlPath);

            if (!derived) {
                return { status: 'skipped', message: `⚠️  No se puede derivar el fuente para: ${htmlPath}` };
            }

            const { srcPath, lang, relHtml } = derived;

            if (!existsSync(srcPath)) {
                const rel = srcPath.replace(__dirname + '/', '');
                return {
                    status: 'skipped',
                    message: `⚠️  Fuente no encontrado: src/markdown-shiki/${relHtml}\n     Esperado en: ${rel}\n     Comprueba que el nombre del archivo fuente coincide con el del .html`
                };
            }

            const code = readFileSync(srcPath, 'utf-8');
            const html = await codeToHtml(code, { lang, theme: SHIKI_THEME });

            const outPath = join(__dirname, 'src/markdown-shiki', relHtml);
            mkdirSync(dirname(outPath), { recursive: true });
            writeFileSync(outPath, html, 'utf-8');

            return { status: 'generated', message: `✅  src/markdown-shiki/${relHtml}` };
        })
    );

    //  -----  Imprimir resultados en orden para mantener logs legibles  -----
    for (const r of results) console.log(r.message);

    const generated = results.filter(r => r.status === 'generated').length;
    const skipped   = results.filter(r => r.status === 'skipped').length;

    console.log(`\n🎉  Completado — generados: ${generated} | omitidos: ${skipped}`);

    return { generated, skipped };
}


//  -----  Ejecutar solo cuando se invoca directamente: pnpm code-highlight  -----
if (process.argv[1] === __filename) {
    await generateMarkdownShiki();
}
