import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0603MetodosPublicosPrivados = {
    id: 'metodosPublicosPrivados',
    favicon: `${favicon}/typescript-favicon.ico`,
    pageTitle: '3 - Métodos Públicos y Privados en TypeScript',
    path: 'clases/metodos-publicos-privados',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/06-clases/03-metodos-publicos-y-privados.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/06-clases/03-metodos-publicos-y-privados-ts.html`,
        `${MarkdownShikiHtml}/06-clases/03-metodos-publicos-y-privados-js.html`
    ],
    headerTitle: '3 - Métodos Públicos y Privados en TypeScript',
    styles: [
        { href: `${styles}/06-clases/03-metodos-publicos-y-privados.css` },
    ],
    scripts: [
        { src: `${scripts}/js/06-clases/03-metodos-publicos-y-privados.js` },
    ]
};