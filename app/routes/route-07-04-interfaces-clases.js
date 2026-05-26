import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0704InterfacesClases = {
    id: 'interfacesClases',
    favicon: `${favicon}/typescript-favicon.ico`,
    pageTitle: '4 - Interfaces Clases en TypeScript',
    path: 'interfaces/interfaces-clases',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/07-interfaces/04-interfaces-clases.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/07-interfaces/04-interfaces-clases-ts.html`,
        `${MarkdownShikiHtml}/07-interfaces/04-interfaces-clases-js.html`
    ],
    headerTitle: '4 - Interfaces Clases en TypeScript',
    styles: [
        { href: `${styles}/07-interfaces/04-interfaces-clases.css` },
    ],
    scripts: [
        { src: `${scripts}/js/07-interfaces/04-interfaces-clases.js` },
    ]
};