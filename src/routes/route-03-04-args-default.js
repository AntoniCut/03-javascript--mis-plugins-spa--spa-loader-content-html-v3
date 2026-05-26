import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0304ArgsDefault = {
    id: 'args-default',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: 'Argumentos por Defecto en Funciones en TypeScript',
    path: 'funciones/argumentos-por-defecto',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/03-funciones/04-args-default.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/03-funciones/04-args-default-ts.html`,
        `${MarkdownShikiHtml}/03-funciones/04-args-default-js.html`
    ],
    headerTitle: 'Argumentos por Defecto en Funciones en TypeScript',
    styles: [
        { href: `${styles}/03-funciones/04-args-default.css` },
    ],
    scripts: [
        { src: `${scripts}/js/03-funciones/04-args-default.js` },
    ]
};