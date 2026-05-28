import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0607ConstructoresPrivados = {
    id: 'constructoresPrivados',
    favicon: `${favicon}/typescript-favicon.ico`,
    pageTitle: '7 - Constructores Privados',
    path: 'clases/constructores-privados',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/06-clases/07-constructores-privados.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/06-clases/07-constructores-privados-ts.html`,
        `${MarkdownShikiHtml}/06-clases/07-constructores-privados-js.html`
    ],
    headerTitle: '7 - Constructores Privados',
    styles: [
        { href: `${styles}/06-clases/07-constructores-privados.css` },
    ],
    scripts: [
        { src: `${scripts}/js/06-clases/07-constructores-privados.js` },
    ]
};