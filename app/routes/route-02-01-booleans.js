import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0201Booleans = {
    id: 'booleans',
    favicon: `${favicon}/typescript-favicon.ico`,
    pageTitle: 'Booleanos en TypeScript',
    path: 'tipos-de-datos/booleans',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/02-tipos-de-datos/01-booleans.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/02-tipos-de-datos/01-booleans-ts.html`,
        `${MarkdownShikiHtml}/02-tipos-de-datos/01-booleans-js.html`
    ],
    headerTitle: 'Booleanos en TypeScript',
    styles: [
        { href: `${styles}/02-tipos-de-datos/01-booleans.css` },
    ],
    scripts: [
        { src: `${scripts}/js/02-tipos-de-datos/01-booleans.js` },
    ]
};