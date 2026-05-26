import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0505ClasesES6 = {
    id: 'clasesES6',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: '5 - Clases en el EcmaScript 2015 - ES6',
    path: 'ecmascript2015/clases-es6',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/05-ecmascript-es6/05-clases-en-es6.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/05-ecmascript-es6/05-clases-en-es6-js.html`
    ],
    headerTitle: '5 - Clases en el EcmaScript 2015 - ES6',
    styles: [
        { href: `${styles}/05-ecmascript-es6/05-clases-en-es6.css` },
    ],
    scripts: [
        { src: `${scripts}/js/05-ecmascript-es6/05-clases-en-es6.js` },
    ]
};