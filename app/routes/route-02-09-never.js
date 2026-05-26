import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0209Never = {
    id: 'never',
    favicon: `${favicon}/typescript-favicon.ico`,
    pageTitle: 'Never en TypeScript',
    path: 'tipos-de-datos/never',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/02-tipos-de-datos/09-never.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/02-tipos-de-datos/09-never-ts.html`,
        `${MarkdownShikiHtml}/02-tipos-de-datos/09-never-js.html`
    ],
    headerTitle: 'Never en TypeScript',
    styles: [
        { href: `${styles}/02-tipos-de-datos/09-never.css` },
    ],
    scripts: [
        { src: `${scripts}/js/02-tipos-de-datos/09-never.js` },
    ]
};