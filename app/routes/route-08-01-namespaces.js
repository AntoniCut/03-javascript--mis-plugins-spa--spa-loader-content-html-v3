import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0801Namespaces = {
    id: 'namespaces',
    favicon: `${favicon}/typescript-favicon.ico`,
    pageTitle: '1 - Namespaces en TypeScript',
    path: 'namespaces/validations',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/08-namespaces/01-namespaces.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/08-namespaces/01-validations-ts.html`,
        `${MarkdownShikiHtml}/08-namespaces/01-validations-js.html`
    ],
    headerTitle: '1 - Namespaces en TypeScript',
    styles: [
        { href: `${styles}/08-namespaces/01-namespaces.css` },
    ],
    scripts: [
        { src: `${scripts}/js/08-namespaces/01-validations.js` },
    ]
};