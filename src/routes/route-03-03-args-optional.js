import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0303ArgsOptional = {
    id: 'args-optional',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: 'Argumentos Opcionales en Funciones en TypeScript',
    path: 'funciones/argumentos-opcionales',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/03-funciones/03-args-optional.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/03-funciones/03-args-optional-ts.html`,
        `${MarkdownShikiHtml}/03-funciones/03-args-optional-js.html`
    ],
    headerTitle: 'Argumentos Opcionales en Funciones en TypeScript',
    styles: [
        { href: `${styles}/03-funciones/03-args-optional.css` },
    ],
    scripts: [
        { src: `${scripts}/js/03-funciones/03-args-optional.js` },
    ]
};