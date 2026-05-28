import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0307TareaFunciones = {
    id: 'tarea-funciones',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: 'Tarea Funciones en TypeScript',
    path: 'funciones/tarea',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/03-funciones/07-tarea-funciones.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/03-funciones/07-tarea-funciones-ts.html`,
        `${MarkdownShikiHtml}/03-funciones/07-tarea-funciones-js.html`
    ],
    headerTitle: 'Tarea Funciones en TypeScript',
    styles: [
        { href: `${styles}/03-funciones/07-tarea-funciones.css` },
    ],
    scripts: [
        { src: `${scripts}/js/03-funciones/07-tarea-funciones.js` },
    ]
};