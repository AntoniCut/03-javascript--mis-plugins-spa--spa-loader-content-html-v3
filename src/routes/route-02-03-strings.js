import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0203Strings = {
    id: 'strings',
    favicon: `${favicon}/typescript-favicon.ico`,
    pageTitle: 'Strings en TypeScript',
    path: 'tipos-de-datos/strings',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/02-tipos-de-datos/03-strings.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/02-tipos-de-datos/03-strings-ts.html`,
        `${MarkdownShikiHtml}/02-tipos-de-datos/03-strings-js.html`
    ],
    headerTitle: 'Strings en TypeScript',
    styles: [
        { href: `${styles}/02-tipos-de-datos/03-strings.css` },
    ],
    scripts: [
        { src: `${scripts}/js/02-tipos-de-datos/03-strings.js` },
    ]
};