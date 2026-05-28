import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0207Enums = {
    id: 'enums',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: 'Enumeraciones en TypeScript',
    path: 'tipos-de-datos/enums',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/02-tipos-de-datos/07-enums.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/02-tipos-de-datos/07-enums-ts.html`,
        `${MarkdownShikiHtml}/02-tipos-de-datos/07-enums-js.html`
    ],
    headerTitle: 'Enumeraciones en TypeScript',
    styles: [
        { href: `${styles}/02-tipos-de-datos/07-enums.css` },
    ],
    scripts: [
        { src: `${scripts}/js/02-tipos-de-datos/07-enums.js` },
    ]
};