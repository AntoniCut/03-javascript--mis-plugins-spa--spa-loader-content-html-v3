import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0401Objects = {
    id: 'objects',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: 'Objetos en TypeScript',
    path: 'objetos/objetos-basicos',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/04-objetos/01-objects.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/04-objetos/01-objects-ts.html`,
        `${MarkdownShikiHtml}/04-objetos/01-objects-js.html`
    ],
    headerTitle: 'Objetos en TypeScript',
    styles: [
        { href: `${styles}/04-objetos/01-objects.css` },
    ],
    scripts: [
        { src: `${scripts}/js/04-objetos/01-objects.js` },
    ]
};