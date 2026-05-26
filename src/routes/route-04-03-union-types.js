import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0403UnionTypes = {
    id: 'unionTypes',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: 'Union de Tipos en Objetos en TypeScript',
    path: 'objetos/union-de-tipos',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/04-objetos/03-union-types.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/04-objetos/03-union-types-ts.html`,
        `${MarkdownShikiHtml}/04-objetos/03-union-types-js.html`
    ],
    headerTitle: 'Objetos en TypeScript',
    styles: [
        { href: `${styles}/04-objetos/03-union-types.css` },
    ],
    scripts: [
        { src: `${scripts}/js/04-objetos/03-union-types.js` },
    ]
};