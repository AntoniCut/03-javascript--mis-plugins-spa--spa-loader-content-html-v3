import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0402ObjectsTypes = {
    id: 'objectsTypes',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: 'Tipos en Objetos en TypeScript',
    path: 'objetos/tipos-en-objetos',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/04-objetos/02-objects-types.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/04-objetos/02-objects-types-ts.html`,
        `${MarkdownShikiHtml}/04-objetos/02-objects-types-js.html`
    ],
    headerTitle: 'Objetos en TypeScript',
    styles: [
        { href: `${styles}/04-objetos/02-objects-types.css` },
    ],
    scripts: [
        { src: `${scripts}/js/04-objetos/02-objects-types.js` },
    ]
};