import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0604Herencia = {
    id: 'herencia',
    favicon: `${favicon}/typescript-favicon.ico`,
    pageTitle: '4 - Herencia, Super y Extends',
    path: 'clases/herencia-super-extends',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/06-clases/04-herencia-super-extends.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/06-clases/04-herencia-super-extends-ts.html`,
        `${MarkdownShikiHtml}/06-clases/04-herencia-super-extends-js.html`
    ],
    headerTitle: '4 - Herencia, Super y Extends',
    styles: [
        { href: `${styles}/06-clases/04-herencia-super-extends.css` },
    ],
    scripts: [
        { src: `${scripts}/js/06-clases/04-herencia-super-extends.js` },
    ]
};