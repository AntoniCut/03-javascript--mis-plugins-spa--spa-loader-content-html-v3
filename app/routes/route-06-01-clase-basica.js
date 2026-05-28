import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0601ClaseBasica = {
    id: 'claseBasica',
    favicon: `${favicon}/typescript-favicon.ico`,
    pageTitle: '1 - Clase Básica en TypeScript',
    path: 'clases/clase-basica',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/06-clases/01-clase-basica.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/06-clases/01-clase-basica-ts.html`,
        `${MarkdownShikiHtml}/06-clases/01-clase-basica-js.html`
    ],
    headerTitle: '1 - Clase Básica en TypeScript',
    styles: [
        { href: `${styles}/06-clases/01-clase-basica.css` },
    ],
    scripts: [
        { src: `${scripts}/js/06-clases/01-clase-basica.js` },
    ]
};