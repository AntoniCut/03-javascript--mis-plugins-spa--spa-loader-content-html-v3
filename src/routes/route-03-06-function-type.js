import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0306FunctionType = {
    id: 'function-type',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: 'Tipos de Retorno en Funciones en TypeScript',
    path: 'funciones/tipos-de-funciones',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/03-funciones/06-function-type.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/03-funciones/06-function-type-ts.html`,
        `${MarkdownShikiHtml}/03-funciones/06-function-type-js.html`
    ],
    headerTitle: 'Tipos de Retorno en Funciones en TypeScript',
    styles: [
        { href: `${styles}/03-funciones/06-function-type.css` },
    ],
    scripts: [
        { src: `${scripts}/js/03-funciones/06-function-type.js` },
    ]
};