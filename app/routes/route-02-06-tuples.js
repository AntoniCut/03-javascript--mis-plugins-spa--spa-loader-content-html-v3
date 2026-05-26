import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0206Tuples = {
    id: 'tuples',
    favicon: `${favicon}/typescript-favicon.ico`,
    pageTitle: 'Tuplas en TypeScript',
    path: 'tipos-de-datos/tuples',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/02-tipos-de-datos/06-tuples.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/02-tipos-de-datos/06-tuples-ts.html`,
        `${MarkdownShikiHtml}/02-tipos-de-datos/06-tuples-js.html`
    ],
    headerTitle: 'Tuplas en TypeScript',
    styles: [
        { href: `${styles}/02-tipos-de-datos/06-tuples.css` },
    ],
    scripts: [
        { src: `${scripts}/js/02-tipos-de-datos/06-tuples.js` },
    ]
};