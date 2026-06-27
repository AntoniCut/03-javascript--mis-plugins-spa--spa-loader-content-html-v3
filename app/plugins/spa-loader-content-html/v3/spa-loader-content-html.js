/*
    *  -----------------------------------------------------------------------------------------------------------------  *
    *  -----  /spa-loader-content-html.js  --  /src/plugins/spa-loader-content-html-v3/v2/spa-loader-content-html.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------  *
*/


/** @typedef {import('../../../../types/index.js').ConfigOptionsSPA} ConfigOptionsSPA */
/** @typedef {import('../../../../types/index.js').RouteManifest} RouteManifest */
/** @typedef {import('../../../../types/index.js').Route} Route */
/** @typedef {import('../../../../types/index.js').RouteStyle} RouteStyle */



/**
 * ------------------------------------------------------------ 
 * ----------  `spaLoaderContentHtml(options = {})`  ----------
 * ------------------------------------------------------------
 *
 * - `Plugin para cargar contenido HTML dinámicamente en una SPA`
 *
 * @version 3.0.0
 * @author Antonio Francisco Cutillas García
 * @param {Partial<ConfigOptionsSPA>} [options={}] - Opciones de configuración.
 */

export const spaLoaderContentHtml = (options = {}) => {


    /** @type {Window & { __spaFirstRouteLoaded?: boolean }} - `Referencia al objeto window del navegador` */
    const browserWindow = window;


    /** - `Indica si la navegación es por popstate (atrás/adelante)` */
    let isPopNavigation = false;



    /*
        *  -------------------------------------------------------------------------  *
        *  -----  Configuración por defecto (solo lo estrictamente necesario)  -----  *
        *  -------------------------------------------------------------------------  *
    */

    /**
     * ---------------------------
     * -----  `settings {}`  -----
     * ---------------------------
     * - `Configuración por defecto del plugin`
    * @type {ConfigOptionsSPA}
     */

    const settings = {
        routeManifest: [],
        routeModulesBase: '',
        base: '',
        ...options
    };


    /** @type {Map<string, Route>} - `Cache de módulos de ruta ya importados dinámicamente` */
    const routeCache = new Map();



    /*
        *  ---------------------------------------  *
        *  -----  INICIALIZACIÓN DEL PLUGIN  -----  *
        *  ---------------------------------------  *
    */


    /**
    * ----------------------
    * -----  `init()`  -----
    * ----------------------
    * - `Función de inicialización del plugin (con lazy loading de rutas)`
    * @returns {void} - No devuelve nada, pero inicializa el plugin y configura el estado inicial.
    */

    const init = () => {

        console.log('\n');
        console.log("%c ✅ Plugin SPA cargado correctamente - spa-loader-content-html.js", "background:#2ecc71; color:white; padding:4px;");
        
        /*
        console.log("%c Fondo rojo", "background:#e74c3c; color:white; padding:4px;");
        console.log("%c Fondo verde", "background:#2ecc71; color:white; padding:4px;");
        console.log("%c Fondo azul", "background:#3498db; color:white; padding:4px;");
        console.log("%c Fondo amarillo", "background:#f1c40f; color:black; padding:4px;");
        console.log("%c Gris", "background:#7f8c8d; color:white; padding:4px;");
        console.log("%c Negro", "background:#000; color:#0f0; padding:4px;");
        */

        //  -----  Configurar listener para navegación (antes de la carga inicial para capturar clics durante la carga)  -----
        setupEventListeners();

        //  -----  Buscar la entrada del manifest que corresponde a la URL actual  -----
        const entry = findManifestEntryByPath(window.location.pathname);

        //  -----  Si se encuentra una entrada en el manifest, cargar la ruta correspondiente  -----
        if (entry) {

            //  -----  Importar dinámicamente el módulo de ruta y cargar su contenido  -----
            loadRouteModule(entry.file).then((route) => {

                if (route)
                    loadContent(route);
                else
                    loadNotFoundRoute('init');

                /** Pathname inicial normalizado */
                const initialPathname = buildPathname(route?.path || entry.path || '');

                //  -----  Reemplazar el estado del historial con la ruta inicial para evitar duplicados en el historial  -----
                history.replaceState(
                    {
                        id: route?.id || entry.id,
                        path: initialPathname,
                        routeFile: entry.file,
                        favicon: route?.favicon || null
                    },
                    '',
                    initialPathname
                );

            }).catch(() => {
                loadNotFoundRoute('init');
            });

        } else {

            //  -----  Si no hay entrada en el manifest, intentar cargar la ruta 404  -----
            loadNotFoundRoute('init');

            //  -----  Reemplazar el estado del historial con la ruta inicial para evitar duplicados en el historial  -----
            history.replaceState(
                {
                    id: null,
                    path: window.location.pathname
                },
                '',
                window.location.pathname
            );
        }

    };



    /*
        *  ---------------------------------------------------------  *
        *  -----  Normalización de rutas, pathnames y slashes  -----  *
        *  ---------------------------------------------------------  *
    */


    /**
     * -----------------------------------
     * -----  `normalize(raw = '')`  -----
     * -----------------------------------
      - Normaliza una ruta (quita base y slashes de inicio/fin)
     * @param {string} raw - `Ruta sin normalizar`
     * @returns {string} - `Ruta normalizada`
     */

    const normalize = (raw = '') => {


        /** Ruta base configurada para la SPA. */
        const base = settings.base || '';

        /** Ruta recibida convertida a string para aplicar normalizacion. */
        let path = String(raw || '');

        if (base && path.startsWith(base))
            path = path.slice(base.length);

        //  -----  quitar leading/trailing slash  -----
        path = path.replace(/^\/|\/$/g, '');

        return path;

    }



    /**
     * ---------------------------------------------
     * -----  `buildPathname(routePath = '')`  -----
     * ---------------------------------------------
     * - Construye pathname absoluto para pushState, normalizado con base
     * @param {string} routePath - Ruta de la ruta (path) para construir el pathname
     * @returns {string} - Pathname absoluto normalizado para usar en pushState y comparación de rutas
     */

    const buildPathname = (routePath = '') => {

        /** Ruta base configurada para la SPA. */
        const base = (settings.base || '').replace(/\/$/, '');

        /** Ruta de entrada normalizada con slash inicial para construir pathname. */
        const trimmed = routePath ? `/${String(routePath).replace(/^\/|\/$/g, '')}` : '';

        //  -----  Construir pathname absoluto usando URL para normalizar correctamente,           -----
        //  -----  con fallback básico si falla (por ejemplo, en rutas con caracteres especiales)  -----
        try {
            return new URL(base + trimmed, location.origin).pathname;

        } 
        
        catch (e) {
            return (base + trimmed).replace(/\/\/+/g, '/');
        }

    };



    /*
        *  --------------------------------------------------------  *
        *  -----  Lazy Loading de módulos de ruta (manifest)  -----  *
        *  --------------------------------------------------------  *
    */


    /**
     * ---------------------------------------------------------
     * -----  `findManifestEntryByPath(rawPathname = '')`  -----
     * ---------------------------------------------------------
     * - Busca una entrada en el manifest por pathname normalizado.
     * @param {string} rawPathname - Pathname sin normalizar (por ejemplo, window.location.pathname)
     * @returns {{ 
            * id: string, 
            * path: string, 
            * file: string 
        * }|undefined} - Entrada del manifest o undefined
     */

    const findManifestEntryByPath = (rawPathname = '') => {

        /** Ruta normalizada para comparar con las entradas del manifest. */
        const normalized = normalize(rawPathname);

        return settings.routeManifest?.find(entry => normalize(entry.path) === normalized);

    };



    /**
     * -------------------------------------------
     * -----  `findManifestEntryById(id)`  -----
     * -------------------------------------------
     * - Busca una entrada en el manifest por id.
     * @param {string} id - Identificador de la ruta (ej: 'inferirTipos')
    * @returns {RouteManifest | undefined} - Entrada del manifest o undefined
     */

    const findManifestEntryById = (id) => {

        return settings.routeManifest?.find(entry => entry.id === id);

    };



    /**
     * ----------------------------------------
     * -----  `loadRouteModule(file)`  -----
     * ----------------------------------------
     * @async
     * - Importa dinámicamente un módulo de ruta y lo cachea para futuras navegaciones.
     * @param {string} file - Nombre del archivo de ruta sin extensión (ej: 'route-01-01-inferir-tipos')
    * @returns {Promise<Route|undefined>} - Objeto de ruta importado o undefined si falla
     */

    const loadRouteModule = async (file) => {

        //  -----  Si ya está en cache, devolver directamente sin hacer import  -----
        if (routeCache.has(file))
            return routeCache.get(file);

        try {

            /** - `URL completa del módulo de ruta para import()` */
            const moduleUrl = `${settings.routeModulesBase}/${file}.js`;

            /** @type {Record<string, unknown>} - `Módulo ESM importado` */
            const mod = await import(moduleUrl);

             /** @type {Route|undefined} - `Primer export del módulo` */
            const route = /** @type {Route|undefined} */ (Object.values(mod)[0]);

            //  -----  Cachear para futuras navegaciones  -----
            if (route)
                routeCache.set(file, route);

            console.log(`📦 Ruta cargada dinámicamente: ${file}`);

            return route;

        } catch (e) {
            console.error(`❌ Error importando módulo de ruta: ${file}`, e);
            return undefined;
        }

    };



    /**
     * -----------------------------------
     * -----  `findNotFoundRoute()`  -----
     * -----------------------------------
     * - Obtiene la entrada 404 del manifest.
     * @returns {{ 
            * id: string, 
            * path: string, 
            * file: string 
        * }|undefined} - Entrada 404 del manifest o undefined.
     */

    const findNotFoundRoute = () => {

        //  -----  Buscar en el manifest una entrada con id '404NotFoundPage' o path que contenga '404'  -----
        return settings.routeManifest?.find(entry =>

            entry?.id === '404NotFoundPage' ||
            normalize(entry?.path) === '404' ||
            normalize(entry?.path) === '404-not-found' ||
            /404/i.test(String(entry?.id || ''))
        );

    };



    /**
     * -----------------------------------------
     * -----  `loadNotFoundRoute(source)`  -----
     * -----------------------------------------
     * - Carga la ruta 404 dinámicamente desde el manifest.
     * @param {'init'|'click'|'popstate'} source - Origen del intento de carga de ruta (para logging y eventos).
     * @returns {void} - No devuelve nada, pero carga la ruta 404 o notifica error si no está configurada, evitando bloqueos del loader.
     */

    const loadNotFoundRoute = (source) => {

        /** Entrada 404 encontrada en el manifest, si existe. */
        const entry404 = findNotFoundRoute();

        //  -----  Si no hay ruta 404 configurada, logueamos error y notificamos para evitar bloqueos del loader  -----
        if (!entry404) {

            console.error(`No existe ruta 404 configurada (source: ${source}).`);

            notifyRouteLoadError(undefined, new Error('No existe ruta 404 configurada.'), source);

            return;
        }

        //  -----  Importar dinámicamente el módulo de la ruta 404 y cargar su contenido  -----
        loadRouteModule(entry404.file).then((route) => {

            //  -----  Si se pudo importar la ruta 404, cargar su contenido  -----
            if (route)
                loadContent(route);
            
            //  -----  Si no se pudo importar la ruta 404, logueamos error y notificamos para evitar bloqueos del loader  -----
            else
                notifyRouteLoadError(undefined, new Error('No se pudo importar la ruta 404.'), source);

        }).catch(() => {
            notifyRouteLoadError(undefined, new Error('Error importando ruta 404.'), source);
        });

    };



    /*
        *  --------------------------------------------------------------  *
        *  -----  Carga de contenido dinámico, Componentes del DOM  -----  *
        *  -----  y Metadatos de la Ruta (título, favicon, CSS, JS)  ----  *
        *  --------------------------------------------------------------  *
    */


    /**
     * ----------------------------------
     * -----  `loadContent(route)`  -----
     * ----------------------------------
     * - `Función para cargar el contenido de una ruta específica`
     * - Si el navegador soporta View Transitions, se usa para una transición suave.
     * - Si no, se carga directamente el contenido.
    * @param {Route} route - Ruta cuya contenido se va a cargar.
     * @returns {void} - No devuelve nada, pero carga el contenido de la ruta o notifica error si falla.
     */

    const loadContent = (route) => {

        /** @type {Promise<void>} - `Promesa de carga del contenido de la ruta` */
        let loadPromise;

        //  -----  Si el navegador soporta View Transitions, se usa para una transición suave  -----
        if (document.startViewTransition) {

            /** Inicia una transicion de vista y ejecuta la carga del DOM de la ruta. */
            const viewTransition = document.startViewTransition(() => loadComponentDom(route));

            //  -----  La promesa de carga se resuelve cuando la transición termina, o inmediatamente si no se puede usar la transición  -----
            loadPromise = viewTransition?.finished || Promise.resolve();
        }

        //  -----  Si no, se carga directamente el contenido  -----
        else

            //  -----  Cargar el contenido de la ruta sin transición  -----
            loadPromise = loadComponentDom(route);

        //  -----  Manejo de errores en la carga del contenido para notificar y evitar bloqueos del loader  -----
        Promise.resolve(loadPromise).catch((error) => {
            notifyRouteLoadError(route, error, 'loadContent');
        });

    };



    /**
     * ----------------------------------------
     * -----  `notifyRouteLoaded(route)`  -----
     * ----------------------------------------
     * - Notifica que una ruta SPA terminó de renderizarse.
     * - Emite `spa:route-loaded` en cada navegación.
     * - Emite `spa:first-route-loaded` una sola vez en la primera carga.
    * @param {Route} route - Ruta que se ha cargado, para incluir detalles en los eventos emitidos.
     */

    const notifyRouteLoaded = (route) => {

        //  -----  Notificar carga de ruta para listeners externos (como el loader)  -----
        document.dispatchEvent(

            //  -----  Evento personalizado con detalles de la ruta cargada  -----
            new CustomEvent('spa:route-loaded', {

                //  -----  Detalles de la ruta cargada para que los listeners puedan usar esta información  -----
                detail: {
                    id: route?.id || null,
                    path: route?.path || window.location.pathname
                }
            })
        );


        //  -----  Si esta es la primera ruta cargada, emitimos el evento específico para desbloquear el loader inicial  -----
        if (!browserWindow.__spaFirstRouteLoaded) {

            //  -----  Marcar que la primera ruta ya se cargó para no emitir este evento de nuevo  -----
            browserWindow.__spaFirstRouteLoaded = true;

            //  -----  Emitir evento personalizado indicando que la primera ruta se ha cargado (para que el loader inicial pueda desbloquearse)  -----
            document.dispatchEvent(new CustomEvent('spa:first-route-loaded'));
        }

    };


    /**
     * ----------------------------------------------------------
     * -----  `notifyRouteLoadError(route, error, source)`  -----
     * ----------------------------------------------------------
     * - Notifica un error durante la carga de ruta.
     * - Si ocurre en la carga inicial, desbloquea el loader con un fallback seguro.
     * @param {Route|undefined} route - Ruta que se intentaba cargar cuando ocurrió el error (puede ser undefined si no se pudo determinar).
     * @param {unknown} error - Error ocurrido durante la carga de la ruta, puede ser cualquier tipo (Error, string, etc.).
     * @param {string} source - Fuente del error, por ejemplo 'init' para errores durante la carga inicial.
     */

    const notifyRouteLoadError = (route, error, source) => {

        console.error('❌ Error cargando ruta SPA:', error);

        //  -----  Emitir evento personalizado con detalles del error para que los listeners puedan manejarlo.  -----
        //  -----   (por ejemplo, el loader puede mostrar un mensaje de error o desbloquearse con un fallback)  -----
        document.dispatchEvent(

            //  -----  Evento personalizado con detalles del error ocurrido durante la carga de la ruta  -----
            new CustomEvent('spa:route-load-error', {

                //  -----  Detalles del error para que los listeners puedan usar esta información  -----
                detail: {
                    id: route?.id || null,
                    path: route?.path || window.location.pathname,
                    source,
                    message: error instanceof Error ? error.message : String(error || 'Error desconocido')
                }
            })
        );

        //  -----  Si el error ocurrió durante la carga inicial (source: 'init'), emitimos el evento de primera ruta cargada para desbloquear el loader con un fallback seguro  -----
        if (!browserWindow.__spaFirstRouteLoaded) {

            //  -----  Marcar que la primera ruta ya se cargó para no emitir este evento de nuevo  -----
            browserWindow.__spaFirstRouteLoaded = true;

            //  -----  Emitir evento personalizado indicando que la primera ruta se ha cargado (aunque haya sido con error) para que el loader inicial pueda desbloquearse  -----
            document.dispatchEvent(new CustomEvent('spa:first-route-loaded'));
        }

    };



    /**
     * ---------------------------------------
     * -----  `loadComponentDom(route)`  -----
     * ---------------------------------------
     * @async
     * - Carga TODO el contenido de la ruta (componentes, título, favicon, css, scripts)
     * - usando únicamente async/await (sin new Promise ni then/catch)
    * @param {Route} route - Ruta de la cual cargar el contenido en el DOM (componentes, metadatos, etc.)
     * @returns {Promise<void>} - Promesa que se resuelve cuando el contenido de la ruta se ha cargado completamente en el DOM, 
     *   o se ha manejado un error para evitar bloqueos del loader.
     */

    const loadComponentDom = async (route) => {

        //  -----  Validación  -----
        if (!route)
            throw new Error('Ruta inválida');

        //  -----  Caso ruta sin components  -----
        if (!route.components || Object.keys(route.components).length === 0) {

            console.warn(`La ruta '${route.id}' no contiene 'components'`);

            //  -----  Aplicar metadatos de la ruta incluso si no hay componentes para cargar, para asegurar que título, favicon, etc. se actualicen correctamente  -----
            await applyRouteMeta(route);

            //  -----  Notificar fin de carga de ruta para el loader inicial y listeners externos incluso si no hay componentes,  -----
            //  -----  para asegurar que el loader se desbloquee y los listeners se notifiquen correctamente                      -----
            notifyRouteLoaded(route);

            //  -----  Renderizar componentes de página (pagesComponents) aunque la ruta no defina 'components'  -----
            await renderPageComponents(route);

            return;
        }


        /*
            ----------------------------------------
            -----  Cargar componentes del DOM  -----
            ----------------------------------------
        */

        //  -----  Iterar sobre cada componente definido en la ruta (selector y URL)  -----
        for (const [selector, url] of Object.entries(route.components)) {


            /** @type {HTMLElement|null} - `Elemento contenedor del componente`,  `Obtener elemento (selector se trata como id sin #)` */
            const el = document.getElementById(selector);

            //  -----  Si el contenedor NO existe simplemente avisamos  -----
            if (!el) {
                console.warn(`⚠️ Contenedor no encontrado para selector: #${selector} — se omite.`);
                continue;
            }


            //  -----  Evitar fetch(undefined) → ocultar contenedor si undefined  -----
            if (!url) {

                console.log('\n');
                console.warn(`⏭️ Componente "${selector}" ignorado (url undefined). Ocultando contenedor.`);
                console.log('\n');

                //  -----  Ocultar contenedor y limpiar contenido para evitar fetch con URL inválida  -----
                el.style.display = 'none';
                el.innerHTML = '';

                continue;
            }


            //  -----  Si hay url → restaurar visibilidad antes de cargar  -----
            el.style.display = '';

            //*  -----  Cargar contenido HTML del componente en el contenedor correspondiente  -----
            await fetchHTML(url, selector);

        }


        //  -----  Inicializar acciones del navbar  --------------------------
        //  -----  proteger de errores si navbar no existe en esta ruta  -----
        try {

            actionsNavbar();

        } catch (e) {

            console.log('\n');
            console.warn('⚠️ actionsNavbar falló (probablemente falta .navbar__container en la vista):', e);
            console.log('\n');
        }


        //  -----  Aplicar metadatos de la ruta  -----
        await applyRouteMeta(route);

        //  -----  Renderizar componentes de página (pagesComponents) dentro de la vista ya cargada  -----
        await renderPageComponents(route);

        //  -----  Notificar fin de carga de ruta para el loader inicial y listeners externos  -----
        notifyRouteLoaded(route);

    }



    /*
        *  ----------------------------------------------------------------------------------------------------  *
        *  -----  Funciones auxiliares para manejo de URLs en HTML inyectado (src, href, poster, srcset)  -----  *
        *  ----------------------------------------------------------------------------------------------------  *
    */


    /**
     * -------------------------------------------------------
     * -----  `resolveInjectedAssetUrl(value, baseUrl)`  -----
     * -------------------------------------------------------
     * - Normaliza rutas de recursos dentro de HTML inyectado.
     * - Soporta rutas relativas al archivo HTML fuente y rutas absolutas prefijadas con settings.base.
     * @param {string} value - Valor del atributo (src, href, poster, etc.)
     * @param {string} baseUrl - URL del archivo HTML inyectado
     * @returns {string}
     */

    const resolveInjectedAssetUrl = (value, baseUrl) => {

        /** - Valor del atributo normalizado */
        const raw = String(value || '').trim();

        //  -----  Ignorar anchors, data URI, protocolos externos y especiales  -----
        if (!raw || /^#|^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(raw) || /^(data|blob|mailto|tel|javascript):/i.test(raw))
            return value;

        //  -----  Si es ruta absoluta desde raíz, prefijar base de la SPA (si aplica)  -----
        if (raw.startsWith('/')) {

            /** - Base de la SPA normalizada */
            const base = (settings.base || '').replace(/\/$/, '');

            //  -----  Si no hay base, devolver la ruta tal cual  -----
            if (!base)
                return raw;

            //  -----  Si la ruta ya empieza con la base, devolver tal cual  -----
            if (raw === base || raw.startsWith(`${base}/`))
                return raw;

            //  -----  Prefijar base de la SPA a la ruta absoluta  -----
            return `${base}${raw}`;

        }


        //  -----  Resolver rutas relativas contra la URL del HTML inyectado  -----
        try {

            /** - Resolver rutas relativas contra la URL del HTML inyectado */
            const resolved = new URL(raw, new URL(baseUrl, window.location.origin));

            return `${resolved.pathname}${resolved.search}${resolved.hash}`;

        } catch (e) {
            return value;
        }

    };



    /**
     * --------------------------------------------------------
     * -----  `rewriteInjectedHtmlUrls(html, sourceUrl)`  -----
     * --------------------------------------------------------
     * - Reescribe URLs de recursos en HTML inyectado para evitar roturas en SPA.
     * @param {string} html - HTML crudo obtenido por fetch.
     * @param {string} sourceUrl - URL del archivo HTML origen.
     * @returns {string} - HTML con URLs reescritas para src, href, poster y srcset.
     */

    const rewriteInjectedHtmlUrls = (html, sourceUrl) => {

        /** - contenedor temporal para manipular el HTML inyectado */
        const template = document.createElement('template');

        //  -----  Asignar el HTML crudo al contenedor temporal  -----
        template.innerHTML = html;

        //  -----  Reescribir URLs de recursos en todos los elementos con src, href, poster o srcset  -----
        template.content.querySelectorAll('[src],[href],[poster],[srcset]').forEach((node) => {

            //  -----  Reescribir src  -----
            if (node.hasAttribute('src')) {
                const src = node.getAttribute('src');
                if (src)
                    node.setAttribute('src', resolveInjectedAssetUrl(src, sourceUrl));
            }

            //  -----  Reescribir href  -----
            if (node.hasAttribute('href')) {
                const href = node.getAttribute('href');
                if (href)
                    node.setAttribute('href', resolveInjectedAssetUrl(href, sourceUrl));
            }

            //  -----  Reescribir poster  -----
            if (node.hasAttribute('poster')) {
                const poster = node.getAttribute('poster');
                if (poster)
                    node.setAttribute('poster', resolveInjectedAssetUrl(poster, sourceUrl));
            }

            //  -----  Reescribir srcset  -----
            if (node.hasAttribute('srcset')) {

                /** - Obtener el atributo srcset */
                const srcset = node.getAttribute('srcset');

                //  -----  Si srcset existe, reescribir cada URL dentro de él  -----
                if (srcset) {

                    /** - Reescribir cada URL en el atributo srcset */
                    const normalized = 
                    
                        srcset
                        
                            .split(',')
                        
                            .map((entry) => {

                                /** - Reescribir cada URL en el atributo srcset */
                                const value = entry.trim();

                                //  -----  Ignorar entradas vacías  -----
                                if (!value)
                                    return value;


                                /** - Separar URL y descriptor */
                                const [srcCandidate, descriptor] = value.split(/\s+/, 2);

                                const resolvedSrc = resolveInjectedAssetUrl(srcCandidate, sourceUrl);

                                return descriptor ? `${resolvedSrc} ${descriptor}` : resolvedSrc;

                            })
                            
                            .join(', ');

                    node.setAttribute('srcset', normalized);
                }
            }
        });

        //  -----  Devolver el HTML reescrito como string  -----
        return template.innerHTML;
    };



    /*
        *  -----------------------------------------------------------------------------  *
        *  -----  Función para cargar contenido HTML dinámicamente en un selector  -----  *
        *  -----  específico y Metadatos de la Ruta (título, favicon, CSS, JS)      ----  *
        *  -----------------------------------------------------------------------------  *
    */


    /**
     * ----------------------------------------
     * -----  `fetchHTML(url, selector)`  -----
     * ----------------------------------------
     * @async
     * - `Carga contenido HTML en un selector específico`
     * @param {string|undefined} url - URL del archivo HTML
     * @param {string} selector - Selector CSS de destino. Se acepta tanto un ID sin `#` (p.ej. `'layoutMain'`, por retrocompatibilidad) como un selector CSS completo (p.ej. `'[data-component-page="htmlPage"]'` o `'.my-class'`).
     * @returns {Promise<void>} - Promesa que se resuelve cuando el contenido se ha cargado o se ha manejado un error
     * 
     */

    const fetchHTML = async (url, selector) => {


        /**
         * @type {HTMLElement|null} - `Referencia al contenedor donde se cargará el HTML`
         * - `Si el selector es un ID sin '#' (formato legacy) se resuelve como '#selector'.`
         * - `Si ya es un selector CSS (empieza por '[', '.' o '#') se usa tal cual.`
         */
        const el = (typeof selector === 'string' && /^[.\[#]/.test(selector))
            ? document.querySelector(selector)
            : document.querySelector(`#${selector}`);

        //  -----  Si el contenedor NO existe simplemente avisamos  -----
        if (!el) {
            console.warn(`⚠️ No existe el elemento #${selector}`);
            return;
        }

        // -----  Si la URL es undefined → ocultar contenedor y salir  -----
        if (!url) {
            console.info(`⏭️ ${selector} omitido (URL undefined). Ocultando contenedor.`);
            el.style.display = "none";
            el.innerHTML = "";
            return;
        }


        //*  -----  Si hay URL ==> aseguramos que el contenedor esté visible  -----

        //  -----  para restaurar estado si antes estaba oculto  -----
        el.style.display = "";

        //  -----  Intentar cargar el contenido HTML con fetch y manejar errores para mostrar mensaje en el contenedor  -----
        try {

            /** - `Respuesta del fetch` */
            const res = await fetch(url);

            //  -----  Si la respuesta no es OK, lanzar error para manejarlo en el catch  -----
            if (!res.ok)
                throw new Error(res.statusText);

            /** - `Contenido HTML como texto` */
            const html = await res.text();
            
            //  -----  Reescribir URLs de recursos en el HTML inyectado para evitar roturas en SPA  -----
            el.innerHTML = rewriteInjectedHtmlUrls(html, url);

        } catch (e) {

            console.error(`❌ Error al cargar ${url}:`, e);

            //  -----  Mostrar mensaje de error en el contenedor para informar al usuario  -----
            el.innerHTML = `<p>Error 404: No se pudo cargar el contenido.</p>`;
        }

    }



    /**
     * -------------------------------------
     * -----  `applyRouteMeta(route)`  -----
     * -------------------------------------
     * @async
     * - `Función para aplicar metadatos de la ruta (título, favicon, URL, etc.)`
     * @param {Route} route - Ruta de la cual aplicar los metadatos en el DOM (título, favicon, headerTitle, CSS, scripts, etc.)
     * @returns {Promise<void>} - Promesa que se resuelve cuando los metadatos de la ruta se han aplicado completamente en el DOM,
     */

    const applyRouteMeta = async (route) => {


        //  -----  Actualizar título  -----
        if (route.pageTitle)
            document.title = route.pageTitle;

        //  -----  Actualizar favicon  -----
        if (route.favicon)
            updateFavicon(route.favicon);


        //  -----  pushState seguro (normalizado)  -----

        /**- `Nueva pathname para la ruta` */
        const newPathname = buildPathname(route.path || '');


        //  -----  Evitar push duplicado  -----
        if (!isPopNavigation && window.location.pathname !== newPathname) {

            //  -----  Buscar el archivo de ruta en el manifest para guardarlo en el historial  -----
            const manifestEntry = findManifestEntryById(route.id);

            //  -----  pushState con pathname normalizado, routeFile y favicon para actualización inmediata en popstate  -----
            history.pushState(
                { id: route.id, path: newPathname, routeFile: manifestEntry?.file || null, favicon: route.favicon || null },
                '',
                newPathname
            );
        }

        //  -----  Resetear flag de navegación por popstate después de manejar la ruta  -----
        isPopNavigation = false;

        //  -----  Actualizar headerTitle en layout  -----
        if (route.headerTitle)
            addTitleHeaderFooter(route.headerTitle);

        //  -----  Cargar hoja de estilos CSS  -----
        if (route.styles)
            loadStylesheetsByPage(route.styles);

        //  -----  Cargar renderizado de Markdown Shiki  -----
        await renderMarkdownShiki(route);

        //  -----  Cargar scripts dinámicos  -----
        if (route.scripts) {

            //  -----  Cargar cada script de la ruta de forma secuencial para respetar dependencias  -----
            for (const s of route.scripts) {
                await loadScripts(s);
            }
        }

    };



    /**
     * ---------------------------------
     * -----  `faviconSessionKey`  -----
     * ---------------------------------
     * - Clave fija por sesión para el cache-busting del favicon.
     * - Al ser constante dentro de la sesión, el browser puede cachear el archivo de favicon
     *   y servirlo desde caché en navegaciones posteriores (evita parpadeo en back-navigation).
     */
    const _faviconSessionKey = Date.now();


    /**
     * --------------------------------------
     * -----  `updateFavicon(favicon)`  -----
     * --------------------------------------
     * - `Función para actualizar el favicon dinámicamente`
     * @param {string} favicon - URL del nuevo favicon a establecer (puede ser relativa o absoluta)
     * @return {void} - No devuelve nada, pero actualiza el favicon del documento.
     */

    const updateFavicon = (favicon) => {

        /**  - `URL absoluta del nuevo favicon` */
        const newAbsolute = new URL(favicon, document.baseURI).href;

        /** - `URL del nuevo favicon con cache-busting` */
        const newHref = `${favicon}?v=${_faviconSessionKey}`;

        /** @type {HTMLLinkElement|null} - `Referencia al favicon existente` */
        const existing = /** @type {HTMLLinkElement|null} */ (document.querySelector('link[rel~="icon"]'));

        //  -----  Si ya existe un favicon, actualizar su href in-place para evitar parpadeo, y eliminar duplicados si los hubiera  -----
        if (existing) {

            //  -----  Si el archivo es el mismo, no hacer nada para evitar parpadeo  -----
            if (existing.href.split('?')[0] === newAbsolute) 
                return;

            //  -----  Actualizar href in-place evita el instante sin favicon que causa parpadeo  -----
            existing.href = newHref;

            //  -----  Eliminar duplicados si los hubiera  -----
            document.querySelectorAll('link[rel~="icon"]').forEach(link => {
                
                if (link !== existing) 
                    link.remove();

            });

            //  -----  Salir de la función después de actualizar el favicon existente  -----
            return;

        }

        //  -----  No existe ningún favicon: crear el elemento  -----
        
        /** @type {HTMLLinkElement} - `Nuevo elemento favicon` */
        const link = document.createElement('link');
        
        //  -----  Configurar atributos del nuevo favicon  -----
        link.rel = 'icon';
        link.type = 'image/x-icon';
        link.href = newHref;

        //  -----  Agregar el nuevo favicon al head del documento  -----
        document.head.appendChild(link);

    }



    /**
     * -------------------------------------------
     * -----  `addTitleHeaderFooter(title)`  -----
     * -------------------------------------------
     * - Agrega el título al header y footer de la página.
     * @param {string} title - Texto para mostrar en ambos lugares.
     * @returns {void} - No retorna ningún valor.
     */

    const addTitleHeaderFooter = (title) => {

        /** @type {HTMLElement|null} - `Referencia al título del header` */
        const headerTitle = document.querySelector('#layoutHeader #headerTitle');

        //  -----  Si existe el elemento, actualizamos su contenido con el título de la ruta  -----
        if (headerTitle)
            headerTitle.innerHTML = title;

        /** @type {HTMLElement|null} - `Referencia al título del footer` */
        const footerTitle = document.querySelector('#layoutFooter #footerTitle');

        //  -----  Si existe el elemento, actualizamos su contenido con el título de la ruta  -----
        if (footerTitle)
            footerTitle.innerHTML = title;

    }



    /*
        *  ---------------------------------------------------------------------  *
        *  -----  Funciones para manejar acciones del navbar (menú móvil)  -----  *
        *  ---------------------------------------------------------------------  *
    */


    /**
     * -------------------------------
     * -----  `actionsNavbar()`  -----
     * -------------------------------
     * - `Función para manejar las acciones del navbar (abrir/cerrar menú móvil)`
     * -  Animaciones slideUp / slideDown para el menú.
     * @returns {void} - No devuelve nada, pero configura los listeners para el navbar y maneja su estado y animaciones.
     */

    const actionsNavbar = () => {


        /** @type {number} - `Duración de la animación de apertura del menú` */
        const OPEN_DURATION = 560;

        /** @type {number} - `Duración de la animación de cierre del menú` */
        const CLOSE_DURATION = 360;

        /** @type {HTMLElement|null} * - `Referencias a los elementos del navbar` */
        const navbar = document.querySelector('.navbar__container');

        //  -----  Si no se encuentra el navbar, lanzamos un error para que se capture y se loguee en loadComponentDom sin romper el flujo global  -----
        if (!navbar)
            throw new Error("❌ No se encontró el elemento .navbar__container");


        /** @type {HTMLElement|null}  - `Referencias a los botones de abrir/cerrar menú` */
        const btnOpen = document.querySelector('.navbar__btn-open');

        //  -----  Si no se encuentra el botón de abrir menú, lanzamos un error para que se capture y se loguee en loadComponentDom sin romper el flujo global  -----
        if (!btnOpen)
            throw new Error("❌ No se encontró el elemento .navbar__btn-open");


        /** @type {HTMLElement|null} - `Referencias al botón de cerrar menú` */
        const btnClose = document.querySelector('.navbar__btn-close');

        //  -----  Si no se encuentra el botón de cerrar menú, lanzamos un error para que se capture y se loguee en loadComponentDom sin romper el flujo global  -----
        if (!btnClose)
            throw new Error("❌ No se encontró el elemento .navbar__btn-close");


        //  -----  Estado inicial  -----
        navbar.style.display = "none";
        btnClose.style.display = "none";


        /**
         * --------------------------------
         * -----  `lockBodyScroll()`  -----
         * --------------------------------
         * - `Función para bloquear el scroll del body al abrir el menú móvil, evitando que el fondo se mueva mientras el menú está abierto`
         * @returns {void} - No devuelve nada, pero aplica estilos para bloquear el scroll del body.
         */

        const lockBodyScroll = () => {
            document.body.style.overflow = 'hidden';
        };



        /**
         * ----------------------------------
         * -----  `unlockBodyScroll()`  -----
         * ----------------------------------
         * - `Función para desbloquear el scroll del body al cerrar el menú móvil, permitiendo que el fondo vuelva a moverse`
         * @returns {void} - No devuelve nada, pero elimina los estilos que bloquean el scroll del body.
         */

        const unlockBodyScroll = () => {
            document.body.style.removeProperty('overflow');
        };


        //*  -----  Evitar bindings duplicados: clonar botones y reemplazarlos -----

        /** - `Nuevo botón open clonado` */
        const newBtnOpen = /** @type {HTMLElement} */ (btnOpen.cloneNode(true));

        //  -----  Reemplazar el botón original por el nuevo clonado para eliminar listeners anteriores y evitar duplicados  -----
        btnOpen.parentNode?.replaceChild(newBtnOpen, btnOpen);


        /** - `Nuevo botón close clonado` */
        const newBtnClose = /** @type {HTMLElement} */(btnClose.cloneNode(true));

        //  -----  Reemplazar el botón original por el nuevo clonado para eliminar listeners anteriores y evitar duplicados  -----
        btnClose.parentNode?.replaceChild(newBtnClose, btnClose);


        //  -----  Abrir Menú  -----
        newBtnOpen.addEventListener("click", (e) => {

            e.stopPropagation();

            newBtnOpen.style.display = "none";
            newBtnClose.style.display = "flex";

            //  -----  Bloquear scroll del body al abrir el menú para evitar que el fondo se mueva  -----
            lockBodyScroll();

            //  -----  Usar animación slideDown para mostrar el navbar de forma suave  -----
            slideDown(navbar, OPEN_DURATION);

        });


        //  -----  Cerrar Menú  -----
        newBtnClose.addEventListener("click", (e) => {

            e.stopPropagation();

            newBtnClose.style.display = "none";
            newBtnOpen.style.display = "flex";

            //  -----  Usar animación slideUp para ocultar el navbar de forma suave  -----
            slideUp(navbar, CLOSE_DURATION);

            //  -----  Desbloquear scroll del body al cerrar el menú para permitir que el fondo vuelva a moverse  -----
            unlockBodyScroll();

        });


        /*  
            -----  Cerrar menú al hacer clic fuera del navbar  -----
            - eliminamos listener anterior seguro creando uno que no se duplique:
            - añadimos un namespace simple usando dataset
        */
        if (!document.body.dataset._spaClickBound) {

            //  -----  Listener para cerrar el menú al hacer clic fuera del navbar, con protección contra errores por si el navbar no existe en alguna vista  -----
            document.addEventListener("click", () => {

                //  -----  Si el navbar no está visible, no hacemos nada  -----
                try {

                    //  -----  Si el navbar no está visible, no hacemos nada  -----
                    slideUp(navbar, CLOSE_DURATION);

                    newBtnClose.style.display = "none";
                    newBtnOpen.style.display = "flex";

                    //  -----  Desbloquear scroll del body al cerrar el menú para permitir que el fondo vuelva a moverse  -----
                    unlockBodyScroll();

                }

                //  -----  Proteger contra errores si el navbar no existe en alguna vista, para evitar romper el flujo global del plugin  -----
                catch (e) {

                    console.warn('⚠️ No se pudo cerrar el menú al hacer clic fuera (probablemente falta .navbar__container en la vista):', e);
                }

            });


            //  -----  Marcar que el listener de clic para cerrar el menú ya está configurado para evitar duplicados  -----
            document.body.dataset._spaClickBound = '1';

        }

    };



    /*
        *  -----------------------------------------------------------  *
        *  -----  ANIMACIONES slideUp / slideDown / slideToggle  -----  *
        *  -----  para menús y otros elementos  ----------------------  *
        *  -----------------------------------------------------------  *
    */


    /**
     * --------------------------------------------------
     * -----  `slideDown(element, duration = 300)`  -----
     * --------------------------------------------------
     * - `Animación para desplegar un elemento con efecto slideDown`
     * @param {HTMLElement} element - Elemento a mostrar con efecto slideDown (debe estar inicialmente oculto con display: none)
     * @param {number} duration - Duración de la animación en milisegundos (opcional, por defecto 300ms)
     * @return {void} - No devuelve nada, pero muestra el elemento con una animación de deslizamiento hacia abajo. 
     */

    const slideDown = (element, duration = 300) => {

        //  -----  Si el elemento ya es visible, no hacemos nada  -----
        if (window.getComputedStyle(element).display !== 'none')
            return;

        //  -----  Asegurar que el elemento tenga display para calcular su altura, restaurando su estado si estaba oculto  -----
        element.style.removeProperty('display');

        /** - Òbtenemos el valor de display actual del elemento */
        let display = window.getComputedStyle(element).display;

        //  -----  Si el display es 'none', lo cambiamos a 'flex' para mostrarlo (puede ser otro valor según el diseño, pero 'flex' es común para contenedores)  -----
        if (display === 'none')
            display = 'flex';

        //  -----  Configurar estilos para la animación de slideDown  -----
        element.style.display = display;
        element.style.marginTop = '-100%';
        element.style.transitionProperty = 'margin-top';
        element.style.transitionDuration = duration + 'ms';
        element.style.transitionTimingFunction = 'cubic-bezier(0.22, 1, 0.36, 1)';
        element.style.willChange = 'margin-top';

        //  -----  Forzar reflow para asegurar que los estilos se apliquen antes de iniciar la animación  -----
        element.offsetHeight;

        //  -----  Iniciar animación de slideDown cambiando margin-top a 0  -----
        requestAnimationFrame(() => {
            element.style.marginTop = '0';
        });

        //  -----  Limpiar estilos de transición después de que termine la animación para restaurar el estado limpio del elemento  -----
        setTimeout(() => {
            element.style.removeProperty('transition-duration');
            element.style.removeProperty('transition-property');
            element.style.removeProperty('transition-timing-function');
            element.style.removeProperty('will-change');
        }, duration);

    }


    /**
     * ------------------------------------------------
     * -----  `slideUp(element, duration = 300)`  -----
     * ------------------------------------------------
     * - `Animación para ocultar un elemento con efecto slideUp`
     * @param {HTMLElement} element - Elemento a ocultar con efecto slideUp (debe estar inicialmente visible)
     * @param {number} duration - Duración de la animación en milisegundos (opcional, por defecto 300ms)
     * @return {void} - No devuelve nada, pero oculta el elemento con una animación de deslizamiento hacia arriba.
     */

    const slideUp = (element, duration = 300) => {

        //  -----  Si el elemento ya está oculto, no hacemos nada  -----
        if (window.getComputedStyle(element).display === 'none')
            return;

        //  -----  Configurar estilos para la animación de slideUp  -----
        element.style.transitionProperty = 'margin-top';
        element.style.transitionDuration = duration + 'ms';
        element.style.transitionTimingFunction = 'cubic-bezier(0.4, 0, 1, 1)';
        element.style.willChange = 'margin-top';

        //  -----  Forzar reflow para asegurar que los estilos se apliquen antes de iniciar la animación  -----
        element.offsetHeight;

        //  -----  Iniciar animación de slideUp cambiando margin-top a -100% para ocultar el elemento  -----
        requestAnimationFrame(() => {
            element.style.marginTop = '-100%';
        });

        //  -----  Después de que termine la animación, ocultar el elemento y limpiar estilos de transición para restaurar el estado limpio del elemento  -----
        setTimeout(() => {
            element.style.display = 'none';
            element.style.removeProperty('transition-duration');
            element.style.removeProperty('transition-property');
            element.style.removeProperty('transition-timing-function');
            element.style.removeProperty('will-change');
        }, duration);

    }



    /**
     * ----------------------------------------------------
     * -----  `slideToggle(element, duration = 300)`  -----
     * ----------------------------------------------------
     * - `Animación para alternar la visibilidad de un elemento con efecto slideToggle`
     * @param {HTMLElement} element - Elemento a alternar con efecto slideToggle
     * @param {number} duration - Duración de la animación en milisegundos (opcional, por defecto 300ms)
     * @return {void} - No devuelve nada, pero alterna la visibilidad del elemento con una animación de deslizamiento hacia arriba o hacia abajo según su estado actual.
     */

    const slideToggle = (element, duration = 300) => {

        //  -----  Si el elemento está oculto, lo mostramos con slideDown  -----
        if (window.getComputedStyle(element).display === 'none')
            slideDown(element, duration);

        //  -----  Si el elemento está visible, lo ocultamos con slideUp  -----
        else
            slideUp(element, duration);

    }



    /*
        *  -------------------------  *
        *  -----  STYLESHEETS  -----  *
        *  -------------------------  *
    */


    /**
     * ---------------------------------------------
     * -----  `loadStylesheetsByPage(styles)`  -----
     * ---------------------------------------------
     * - Carga múltiples hojas de estilo para una página.
     * - Elimina las anteriores marcadas como data-page-style="true".
     * - Inserta todas las nuevas del array route.styles.
    * @param {RouteStyle[]|null} styles - Array de objetos con la propiedad href para cada hoja de estilo a cargar, o null para eliminar estilos sin cargar nuevos.
     * @return {void} - No devuelve nada, pero carga las hojas de estilo especificadas para la página.
     */

    const loadStylesheetsByPage = (styles) => {

        //  -----  Si no hay estilos, elimina los existentes y salir  -----
        if (!styles || !Array.isArray(styles)) {
            document.querySelectorAll('link[data-page-style="true"]').forEach(l => l.remove());
            return;
        }

        //  -----  Eliminar hojas de estilo antiguas  -----
        document.querySelectorAll('link[data-page-style="true"]').forEach(l => l.remove());


        //  -----  Insertar nuevas hojas  -----
        for (const style of styles) {

            //  -----  Validar que el objeto de estilo tenga la propiedad href  -----
            if (!style || !style.href)
                continue;

            /** - `URL con cache bypass` */
            const hrefWithTimestamp = `${style.href}?t=${Date.now()}`;

            /** - `Creamos Elemento link para la hoja de estilo` */
            const link = document.createElement('link');

            //  -----  Configuramos el nuevo link para la hoja de estilo con cache bypass usando timestamp para asegurar que se actualice correctamente  -----
            link.rel = 'stylesheet';
            link.href = hrefWithTimestamp;
            link.dataset.pageStyle = "true";

            //  -----  Añadir al head  -----
            document.head.appendChild(link);

        }


        console.log("🎨 Hojas de estilo cargadas:", styles);

    };



    /*
        *  ---------------------  *
        *  -----  SCRIPTS  -----  *
        *  ---------------------  *
    */


    /**
     * -----------------------------------
     * -----  `isScriptLoaded(src)`  -----
     * -----------------------------------
     * - Comprueba si ya existe un script cargado (previene duplicados)
     * @param {string} src - URL del script a verificar (puede ser relativa o absoluta)
     * @returns {boolean}  - Devuelve true si el script ya está cargado en el documento, o false si no lo está o si ocurre un error durante la verificación.
     */

    const isScriptLoaded = (src) => {

        //  -----  Validación básica de la URL del script  -----
        try {

            /** @type {HTMLScriptElement[]} - `Lista de scripts actualmente cargados en el documento` */
            const list = Array.from(document.scripts);

            //  -----  Verificar si alguno de los scripts cargados coincide con la URL dada (comparando sin querystring para evitar problemas con cache bypass)  -----
            return list.some(s => {

                //  -----  Si el script no tiene src, lo ignoramos  -----
                if (!s.src)
                    return false;

                //  -----  comparar sin querystring  -----
                const a = s.src.split('?')[0];
                const b = src.split('?')[0];

                //  -----  Verificar si el src del script cargado coincide con la URL dada, considerando que puede ser relativa o absoluta  -----
                return a.endsWith(b) || a.includes(b);

            });

        }

        //  -----  Proteger contra errores en la verificación (por ejemplo, si src no es una cadena válida) para evitar romper el flujo global del plugin  -----
        catch (e) {
            return false;
        }

    }



    /**
     * ---------------------------------------------------------------------------------
     * -----  `loadScripts({ src, isModule = false, exportFunctionName = null })`  -----
     * ---------------------------------------------------------------------------------
     * - `Función para cargar scripts dinámicamente desde las rutas definidas en route.scripts`
     * @param {{ 
        * src: string, 
        * isModule?: boolean, 
        * exportFunctionName?: string|null 
     * }} options - Objeto con las opciones para cargar el script:
     *    - `src`: URL del script a cargar (puede ser relativa o absoluta)
     *    - `isModule`: Indica si el script debe cargarse como módulo ES6 (opcional, por defecto false)
     *    - `exportFunctionName`: Si isModule es true, nombre de la función exportada a ejecutar después de importar el módulo (opcional, por defecto null)
     * @returns {Promise<void>} - Promesa que se resuelve cuando el script se ha cargado (y ejecutado si es módulo), o se ha manejado un error para evitar bloqueos del loader.
     */

    const loadScripts = async ({ src, isModule = false, exportFunctionName = null }) => {


        //  -----  Validación básica de la URL del script  -----
        try {

            //  -----  Si no hay src, no hacemos nada  -----
            if (!src)
                return;

            //  -----  Evitar cargar el mismo script más de una vez para prevenir duplicados y posibles conflictos  -----
            if (isScriptLoaded(src)) {
                console.log(`🔁 Script ya cargado: ${src}`);
                return;
            }

            /** - `URL con cache bypass` */
            const urlWithCacheBypass = `${src}?v=${Date.now()}`;


            //  -----  Cargar como módulo ES6 si isModule es true, usando import() dinámico  -----
            if (isModule) {

                /**
                 * @type {Record<string, unknown>}
                 * - `Importar el módulo dinámicamente usando import() con la URL con cache bypass para asegurar que se actualice correctamente`                  Si exportFunctionName está definido y es una función exportada del módulo, se ejecuta después de la importación.
                 *    Esto permite cargar módulos que exportan funciones para ejecutar código específico de la ruta después de cargar el módulo.
                 */
                const module = await import(urlWithCacheBypass);

                console.log(`✅ Módulo importado: ${urlWithCacheBypass}`);

                //  -----  Si se especificó exportFunctionName y es una función exportada del módulo, la ejecutamos  -----
                if (exportFunctionName && typeof module[exportFunctionName] === 'function') {
                    module[exportFunctionName]();
                    console.log(`▶️ Función ${exportFunctionName} ejecutada del módulo.`);
                }

            }


            //  -----  Cargar como script normal  -----
            else {

                //  -----  Cargar el script dinámicamente creando un elemento script y añadiéndolo al head,  ----- 
                //  -----  con manejo de eventos onload y onerror para resolver la promesa correctamente     -----
                await new Promise((resolve) => {


                    /** - `Elemento script para cargar el JS` */
                    const script = document.createElement('script');

                    //  -----  Configurar el nuevo script con cache bypass usando timestamp para asegurar que se actualice correctamente  -----
                    script.src = urlWithCacheBypass;
                    script.async = true;

                    //  -----  Evento onload para resolver la promesa cuando el script se haya cargado correctamente  -----
                    script.onload = () => {
                        console.log(`✅ Script cargado: ${urlWithCacheBypass}`);
                        resolve(undefined);
                    };

                    //  -----  Evento onerror para manejar errores de carga del script y resolver la promesa para evitar bloqueos del loader  -----
                    script.onerror = (e) => {
                        console.error(`❌ Error al cargar: ${urlWithCacheBypass}`, e);
                        // no reject para no romper el flujo global
                        resolve(undefined);
                    };

                    //  -----  Añadir el script al head para iniciar la carga  -----
                    document.head.appendChild(script);

                });

            }

        }

        //  -----  Proteger contra errores en la carga del script para evitar romper el flujo global del plugin  -----
        catch (e) {
            console.error(`❌ Error cargando el script: ${src}`, e);
        }

    };



    /*
        *  -------------------------------------------  *
        *  -----  Renderizado de Markdown Shiki  -----  *
        *  -------------------------------------------  *
    */


    /**
     * -----------------------------------
     * -----  `renderMarkdownShiki`  -----
     * -----------------------------------
     * - `Función para renderizar archivos html Markdown Shiki en la vista`
     * @param {Route} route
     * @returns {Promise<void>}
     */

    const renderMarkdownShiki = async (route) => {

        //  -----  Validación (caso válido: la mayoría de rutas no tienen código que mostrar)  -----
        if (!route.MarkdownShikiHtml || !Array.isArray(route.MarkdownShikiHtml)) {
            return;
        }

        //  -----  Cargar cada entrada Shiki  -----
        for (const entry of route.MarkdownShikiHtml) {

            /**
             * Cada entrada es un objeto  { url: string, target: string }
             * donde target es un selector CSS del contenedor destino.
             */
            /** @type {string} */
            const url = entry.url;

            /** @type {string} */
            const target = entry.target;

            try {

                /**
                 * - `Contenido HTML del archivo Shiki` 
                 * @type {string}
                 */
                const html = await fetch(url).then(r => r.text());

                /**
                 * - `Contenedor donde se insertará el HTML` 
                 * @type {HTMLElement|null}
                 */
                const container = document.querySelector(target);

                if (!container) {
                    console.warn(`❌ No se encontró contenedor para: ${url}`);
                    continue;
                }

                //  -----  Insertar el HTML renderizado de Shiki en el contenedor destino  -----
                container.innerHTML = html;

            } catch (error) {
                console.error(`❌ Error cargando archivo Shiki: ${url}`, error);
            }
        }

    }



    /*
        *  --------------------------------------------  *
        *  -----  Renderizado de Page Components  -----  *
        *  --------------------------------------------  *
    */


    /**
     * -------------------------------------------
     * -----  `renderPageComponents(route)`  -----
     * -------------------------------------------
     * @async
     * - `Función para renderizar componentes HTML dentro de cada página`
     * - `Carga cada componente definido en 'route.pagesComponents' en su contenedor destino (selector CSS),`
     *   `delegando la inyección en 'fetchHTML' para mantener el mismo comportamiento que los componentes del DOM.`
     * - `Permite renderizar más de un componente por página (la ruta puede definir un array de entradas).`
     * @param {Route} route - Ruta de la cual cargar los componentes de página.
     * @returns {Promise<void>} - Promesa que se resuelve cuando todos los componentes de página se han renderizado (o se han omitido/amaiado errores).
     */

    const renderPageComponents = async (route) => {

        //  -----  Validación (caso válido: la mayoría de rutas no definen pagesComponents)  -----
        if (!route.pagesComponents || !Array.isArray(route.pagesComponents)) {
            return;
        }

        //  -----  Renderizar cada componente de página en su contenedor destino  -----
        for (const entry of route.pagesComponents) {

            /**
             * Cada entrada es un objeto { url: string, target: string }
             * donde target es un selector CSS del contenedor destino (p.ej. '[data-component-page="htmlPage"]').
             */

            
            /** @type {string|undefined} - URL del componente de página */
            const url = entry?.url;

            /** @type {string|undefined} - Selector CSS del contenedor destino */
            const target = entry?.target;

            //  -----  Validación de la entrada: debe tener url y target  -----
            if (!url || !target) {
                console.warn('⚠️ Entrada pagesComponents incompleta (falta url o target). Se omite.');
                continue;
            }

            //  -----  Cargar el componente HTML en el contenedor destino usando fetchHTML  -----
            //  -----  (mismo renderizado que los componentes del DOM: visibility, inyección y manejo de errores)  -----
            await fetchHTML(url, target);

        }

    }



    /*
        *  ---------------------  *
        *  -----  EVENTOS  -----  *
        *  ---------------------  *
    */


    /**
     * -------------------------------------
     * -----  `setupEventListeners()`  -----
     * -------------------------------------
     * - `Configura los event listeners para la navegación SPA`
     *    Enlaces internos con data-id para identificar la ruta
     *    y evento popstate para manejar navegación atrás/adelante del navegador.
     * @returns {void} - No devuelve nada, pero configura los listeners para manejar la navegación dentro de la SPA,
     *    permitiendo que los enlaces internos carguen contenido sin recargar la página y que la navegación con los botones del navegador funcione correctamente. 
     */

    const setupEventListeners = () => {


        //  -----  Manejo de clics en enlaces internos  -----
        document.addEventListener('click', (e) => {


            /** - `Elemento objetivo del evento click` */
            const target = e.target;

            //  -----  Si el elemento clicado no es un HTMLElement, no hacemos nada  -----
            if (!(target instanceof HTMLElement))
                return;

            /** 
             * @type {HTMLAnchorElement|null} 
             * - `Busca el enlace más cercano con data-id o data-route para identificar la ruta, 
             *    permitiendo que los enlaces internos funcionen sin recargar la página`  
             */
            const link = target.closest('a[data-id]');

            //  -----  Si se encuentra un enlace con data-id, manejamos la navegación interna con lazy loading  -----
            if (link) {

                e.preventDefault();

                /** - `Nombre del archivo de ruta desde data-route (ej: 'route-01-01-inferir-tipos')` */
                const routeFile = link.dataset.route;

                /** - `ID de la ruta desde data-id (ej: 'inferirTipos')` */
                const routeId = link.dataset.id;


                //  -----  Si tiene data-route, importar directamente por nombre de archivo  -----
                if (routeFile) {

                    loadRouteModule(routeFile).then((route) => {

                        if (route)
                            loadContent(route);
                        else
                            loadNotFoundRoute('click');

                    }).catch(() => {
                        loadNotFoundRoute('click');
                    });

                }

                //  -----  Fallback: si solo tiene data-id, buscar en el manifest por id  -----
                else if (routeId) {

                    /** - `Entrada del manifest correspondiente al id` */
                    const entry = findManifestEntryById(routeId);

                    if (entry) {

                        loadRouteModule(entry.file).then((route) => {

                            if (route)
                                loadContent(route);
                            else
                                loadNotFoundRoute('click');

                        }).catch(() => {
                            loadNotFoundRoute('click');
                        });

                    } else {
                        loadNotFoundRoute('click');
                    }

                }

            }

        });


        //  -----  Manejo del evento popstate (navegación atrás/adelante)  -----
        window.addEventListener('popstate', (e) => {

            //  -----  Marcar que la navegación se hizo por popstate para evitar pushState duplicados al aplicar la ruta  -----
            isPopNavigation = true;

            //  -----  Actualizar favicon inmediatamente (síncronamente) desde el state para evitar parpadeo durante el async de lazy loading  -----
            if (e.state?.favicon)
                updateFavicon(e.state.favicon);

            /** - `Nombre del archivo de ruta guardado en el historial` */
            const routeFile = e.state?.routeFile;

            /** - `Path actual desde el estado del historial o fallback a pathname` */
            const raw = e.state?.path ?? window.location.pathname;


            //  -----  Si tenemos el routeFile en el state, importar directamente (más rápido, usa cache)  -----
            if (routeFile) {

                loadRouteModule(routeFile).then((route) => {

                    if (route)
                        loadContent(route);
                    else
                        loadNotFoundRoute('popstate');

                }).catch(() => {
                    loadNotFoundRoute('popstate');
                });

            }

            //  -----  Fallback: buscar en el manifest por pathname normalizado  -----
            else {

                /** - `Entrada del manifest correspondiente al path actual` */
                const entry = findManifestEntryByPath(raw);

                if (entry) {

                    loadRouteModule(entry.file).then((route) => {

                        if (route)
                            loadContent(route);
                        else
                            loadNotFoundRoute('popstate');

                    }).catch(() => {
                        loadNotFoundRoute('popstate');
                    });

                } else {
                    loadNotFoundRoute('popstate');
                }

            }

        });

    };



    /*
        *  -----------------------------------------
        *  ----------  Iniciar el plugin  ----------
        *  -----------------------------------------
    */


    init();

}
