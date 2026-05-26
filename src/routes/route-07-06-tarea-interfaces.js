import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0706TareaInterfaces = {
    id: 'tareaInterfaces',
    favicon: `${favicon}/typescript-favicon.ico`,
    pageTitle: '6 - Tarea de Interfaces',
    path: 'interfaces/tarea-interfaces',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/07-interfaces/06-tarea-interfaces.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/07-interfaces/06-tarea-interfaces-ts.html`,
        `${MarkdownShikiHtml}/07-interfaces/06-tarea-interfaces-js.html`
    ],
    headerTitle: '6 - Tarea de Interfaces',
    styles: [
        { href: `${styles}/07-interfaces/06-tarea-interfaces.css` },
    ],
    scripts: [
        { src: `${scripts}/js/07-interfaces/06-tarea-interfaces.js` },
    ]
};