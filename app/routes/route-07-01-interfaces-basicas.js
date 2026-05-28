import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0701InterfacesBasicas = {
    id: 'interfacesBasicas',
    favicon: `${favicon}/typescript-favicon.ico`,
    pageTitle: '1 - Interfaces Básicas en TypeScript',
    path: 'interfaces/interfaces-basicas',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/07-interfaces/01-interfaces-basicas.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/07-interfaces/01-interfaces-basicas-ts.html`,
        `${MarkdownShikiHtml}/07-interfaces/01-interfaces-basicas-js.html`
    ],
    headerTitle: '1 - Interfaces Básicas en TypeScript',
    styles: [
        { href: `${styles}/07-interfaces/01-interfaces-basicas.css` },
    ],
    scripts: [
        { src: `${scripts}/js/07-interfaces/01-interfaces-basicas.js` },
    ]
};