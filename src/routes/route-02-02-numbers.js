import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0202Numbers = {
    id: 'numbers',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: 'Números en TypeScript',
    path: 'tipos-de-datos/numbers',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/02-tipos-de-datos/02-numbers.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/02-tipos-de-datos/02-numbers-ts.html`,
        `${MarkdownShikiHtml}/02-tipos-de-datos/02-numbers-js.html`
    ],
    headerTitle: 'Números en TypeScript',
    styles: [
        { href: `${styles}/02-tipos-de-datos/02-numbers.css` },
    ],
    scripts: [
        { src: `${scripts}/js/02-tipos-de-datos/02-numbers.js` },
    ]
};