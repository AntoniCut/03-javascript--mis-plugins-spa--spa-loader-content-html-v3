import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;


/** @type {import("../../types/index.js").Route} */
export const route0605GetsSets = {
    id: 'getsSets',
    favicon: `${favicon}/typescript-favicon.ico`,
    pageTitle: '5 - Gets y Sets',
    path: 'clases/gets-sets',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/06-clases/05-gets-y-sets.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/06-clases/05-gets-y-sets-ts.html`,
        `${MarkdownShikiHtml}/06-clases/05-gets-y-sets-js.html`
    ],
    headerTitle: '5 - Gets y Sets',
    styles: [
        { href: `${styles}/06-clases/05-gets-y-sets.css` },
    ],
    scripts: [
        { src: `${scripts}/js/06-clases/05-gets-y-sets.js` },
    ]
};