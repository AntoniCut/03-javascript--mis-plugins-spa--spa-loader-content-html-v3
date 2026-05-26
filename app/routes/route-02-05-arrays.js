import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0205Arrays = {
    id: 'arrays',
    favicon: `${favicon}/typescript-favicon.ico`,
    pageTitle: 'Arrays en TypeScript',
    path: 'tipos-de-datos/arrays',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/02-tipos-de-datos/05-arrays.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/02-tipos-de-datos/05-arrays-ts.html`,
        `${MarkdownShikiHtml}/02-tipos-de-datos/05-arrays-js.html`
    ],
    headerTitle: 'Arrays en TypeScript',
    styles: [
        { href: `${styles}/02-tipos-de-datos/05-arrays.css` },
    ],
    scripts: [
        { src: `${scripts}/js/02-tipos-de-datos/05-arrays.js` },
    ]
};