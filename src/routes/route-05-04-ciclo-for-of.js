import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0504CicloForOf = {
    id: 'cicloForOf',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: '4 - Ciclo For Of en TypeScript',
    path: 'ecmascript2015/ciclo-for-of',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/05-ecmascript-es6/04-ciclo-for-of.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/05-ecmascript-es6/04-ciclo-for-of-ts.html`,
        `${MarkdownShikiHtml}/05-ecmascript-es6/04-ciclo-for-of-js.html`
    ],
    headerTitle: '4 - Ciclo For Of en TypeScript',
    styles: [
        { href: `${styles}/05-ecmascript-es6/04-ciclo-for-of.css` },
    ],
    scripts: [
        { src: `${scripts}/js/05-ecmascript-es6/04-ciclo-for-of.js` },
    ]
};