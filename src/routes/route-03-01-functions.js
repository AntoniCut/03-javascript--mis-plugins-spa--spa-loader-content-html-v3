import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0301Functions = {
    id: 'functions',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: 'Funciones en TypeScript',
    path: 'funciones/funciones-basicas',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/03-funciones/01-functions.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/03-funciones/01-functions-ts.html`,
        `${MarkdownShikiHtml}/03-funciones/01-functions-js.html`
    ],
    headerTitle: 'Funciones en TypeScript',
    styles: [
        { href: `${styles}/03-funciones/01-functions.css` },
    ],
    scripts: [
        { src: `${scripts}/js/03-funciones/01-functions.js` },
    ]
};