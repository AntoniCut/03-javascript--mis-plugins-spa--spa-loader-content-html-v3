import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0702InterfacesComplejas = {
    id: 'interfacesComplejas',
    favicon: `${favicon}/typescript-favicon.ico`,
    pageTitle: '2 - Interfaces Complejas en TypeScript',
    path: 'interfaces/interfaces-complejas',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/07-interfaces/02-interfaces-complejas.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/07-interfaces/02-interfaces-complejas-ts.html`,
        `${MarkdownShikiHtml}/07-interfaces/02-interfaces-complejas-js.html`
    ],
    headerTitle: '2 - Interfaces Complejas en TypeScript',
    styles: [
        { href: `${styles}/07-interfaces/02-interfaces-complejas.css` },
    ],
    scripts: [
        { src: `${scripts}/js/07-interfaces/02-interfaces-complejas.js` },
    ]
};