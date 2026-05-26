import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0502DesestObjects = {
    id: 'desestObjects',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: '2 - Desestructuración de Objetos en TypeScript',
    path: 'ecmascript2015/desestructuracion-objetos',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/05-ecmascript-es6/02-desestructuring-objects.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/05-ecmascript-es6/02-desestructuring-objects-ts.html`,
        `${MarkdownShikiHtml}/05-ecmascript-es6/02-desestructuring-objects-js.html`
    ],
    headerTitle: '2 - Desestructuración de Objetos en TypeScript',
    styles: [
        { href: `${styles}/05-ecmascript-es6/02-desestructuring-objects.css` },
    ],
    scripts: [
        { src: `${scripts}/js/05-ecmascript-es6/02-desestructuring-objects.js` },
    ]
};