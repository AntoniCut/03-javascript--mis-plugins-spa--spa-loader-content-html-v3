import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0606ClaseAbstract = {
    id: 'claseAbstract',
    favicon: `${favicon}/typescript-favicon.ico`,
    pageTitle: '6 - Clase Abstracta',
    path: 'clases/clase-abstracta',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/06-clases/06-clases-abstractas.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/06-clases/06-clases-abstractas-ts.html`,
        `${MarkdownShikiHtml}/06-clases/06-clases-abstractas-js.html`
    ],
    headerTitle: '6 - Clase Abstracta',
    styles: [
        { href: `${styles}/06-clases/06-clases-abstractas.css` },
    ],
    scripts: [
        { src: `${scripts}/js/06-clases/06-clases-abstractas.js` },
    ]
};