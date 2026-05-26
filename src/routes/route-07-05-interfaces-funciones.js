import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0705InterfacesFunciones = {
    id: 'interfacesFunciones',
    favicon: `${favicon}/typescript-favicon.ico`,
    pageTitle: '5 - Interfaces Funciones en TypeScript',
    path: 'interfaces/interfaces-funciones',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/07-interfaces/05-interfaces-funciones.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/07-interfaces/05-interfaces-funciones-ts.html`,
        `${MarkdownShikiHtml}/07-interfaces/05-interfaces-funciones-js.html`
    ],
    headerTitle: '5 - Interfaces Funciones en TypeScript',
    styles: [
        { href: `${styles}/07-interfaces/05-interfaces-funciones.css` },
    ],
    scripts: [
        { src: `${scripts}/js/07-interfaces/05-interfaces-funciones.js` },
    ]
};