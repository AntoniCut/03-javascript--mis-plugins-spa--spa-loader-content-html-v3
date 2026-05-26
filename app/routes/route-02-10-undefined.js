import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0210NullUndefined = {
    id: 'nullUndefined',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: 'Null & Undefined en TypeScript',
    path: 'tipos-de-datos/null-undefined',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/02-tipos-de-datos/10-null-undefined.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/02-tipos-de-datos/10-null-undefined-ts.html`,
        `${MarkdownShikiHtml}/02-tipos-de-datos/10-null-undefined-js.html`
    ],
    headerTitle: 'Null & Undefined en TypeScript',
    styles: [
        { href: `${styles}/02-tipos-de-datos/10-null-undefined.css` },
    ],
    scripts: [
        { src: `${scripts}/js/02-tipos-de-datos/10-null-undefined.js` },
    ]
};