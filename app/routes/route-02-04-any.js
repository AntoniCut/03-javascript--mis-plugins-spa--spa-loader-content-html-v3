import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0204Any = {
    id: 'any',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: 'Any en TypeScript',
    path: 'tipos-de-datos/any',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/02-tipos-de-datos/04-any.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/02-tipos-de-datos/04-any-ts.html`,
        `${MarkdownShikiHtml}/02-tipos-de-datos/04-any-js.html`
    ],
    headerTitle: 'Any en TypeScript',
    styles: [
        { href: `${styles}/02-tipos-de-datos/04-any.css` },
    ],
    scripts: [
        { src: `${scripts}/js/02-tipos-de-datos/04-any.js` },
    ]
};