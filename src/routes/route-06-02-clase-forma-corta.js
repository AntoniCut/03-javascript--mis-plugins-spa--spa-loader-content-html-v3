import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0602ClaseCorta = {
    id: 'claseCorta',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: '1 - Clase Básica en TypeScript',
    path: 'clases/clase-forma-corta',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/06-clases/02-clase-forma-corta.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/06-clases/02-clase-forma-corta-ts.html`,
        `${MarkdownShikiHtml}/06-clases/02-clase-forma-corta-js.html`
    ],
    headerTitle: '2 - Clase Forma Corta',
    styles: [
        { href: `${styles}/06-clases/02-clase-forma-corta.css` },
    ],
    scripts: [
        { src: `${scripts}/js/06-clases/02-clase-forma-corta.js` },
    ]
};