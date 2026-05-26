import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0503DesestArrays = {
    id: 'desestArrays',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: '3 - Desestructuración de Arrays en TypeScript',
    path: 'ecmascript2015/desestructuracion-arrays',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/05-ecmascript-es6/03-desestructuring-arrays.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/05-ecmascript-es6/03-desestructuring-arrays-ts.html`,
        `${MarkdownShikiHtml}/05-ecmascript-es6/03-desestructuring-arrays-js.html`
    ],
    headerTitle: '3 - Desestructuración de Arrays en TypeScript',
    styles: [
        { href: `${styles}/05-ecmascript-es6/03-desestructuring-arrays.css` },
    ],
    scripts: [
        { src: `${scripts}/js/05-ecmascript-es6/03-desestructuring-arrays.js` },
    ]
};