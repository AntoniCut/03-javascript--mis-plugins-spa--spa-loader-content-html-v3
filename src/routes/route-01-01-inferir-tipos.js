import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0101InferirTipos = {
    id: 'inferirTipos',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: 'Inferir Tipos en TypeScript',
    path: 'introduccion/inferir-tipos',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/01-introduccion/inferir-tipos.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/01-introduccion/inferir-tipos-ts.html`,
        `${MarkdownShikiHtml}/01-introduccion/inferir-tipos-js.html`
    ],
    headerTitle: 'Inferir Tipos en TypeScript',
    styles: [
        { href: `${styles}/01-introduccion/inferir-tipos.css` },
    ],
    scripts: [
        { src: `${scripts}/js/01-introduccion/inferir-tipos.js` }
    ]
};