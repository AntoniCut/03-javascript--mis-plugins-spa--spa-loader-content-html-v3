import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0501LetVar = {
    id: 'letVar',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: '1 - Variables Let y Var en TypeScript',
    path: 'ecmascript2015/let-var',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/05-ecmascript-es6/01-let-var.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/05-ecmascript-es6/01-let-var-ts.html`,
        `${MarkdownShikiHtml}/05-ecmascript-es6/01-let-var-js.html`
    ],
    headerTitle: '1 - Variables Let y Var en TypeScript',
    styles: [
        { href: `${styles}/05-ecmascript-es6/01-let-var.css` },
    ],
    scripts: [
        { src: `${scripts}/js/05-ecmascript-es6/01-let-var.js` },
    ]
};