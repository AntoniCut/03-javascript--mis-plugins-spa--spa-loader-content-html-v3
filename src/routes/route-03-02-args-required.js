import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0302ArgsRequired = {
    id: 'args-required',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: 'Argumentos Requeridos en Funciones en TypeScript',
    path: 'funciones/argumentos-requeridos',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/03-funciones/02-args-required.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/03-funciones/02-args-required-ts.html`,
        `${MarkdownShikiHtml}/03-funciones/02-args-required-js.html`
    ],
    headerTitle: 'Argumentos Requeridos en Funciones en TypeScript',
    styles: [
        { href: `${styles}/03-funciones/02-args-required.css` },
    ],
    scripts: [
        { src: `${scripts}/js/03-funciones/02-args-required.js` },
    ]
};