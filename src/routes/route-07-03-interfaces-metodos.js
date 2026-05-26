

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0703InterfacesMetodos = {
    id: 'interfacesMetodos',
    favicon: `${favicon}/typescript-favicon.ico`,
    pageTitle: '3 - Interfaces Métodos en TypeScript',
    path: 'interfaces/interfaces-metodos',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/07-interfaces/03-interfaces-metodos.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/07-interfaces/03-interfaces-metodos-ts.html`,
        `${MarkdownShikiHtml}/07-interfaces/03-interfaces-metodos-js.html`
    ],
    headerTitle: '3 - Interfaces Métodos en TypeScript',
    styles: [
        { href: `${styles}/07-interfaces/03-interfaces-metodos.css` },
    ],
    scripts: [
        { src: `${scripts}/js/07-interfaces/03-interfaces-metodos.js` },
    ]
};