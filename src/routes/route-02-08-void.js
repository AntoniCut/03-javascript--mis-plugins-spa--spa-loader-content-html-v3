import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0208Void = {
    id: 'void',
    favicon: `${favicon}/typescript-favicon.ico`,
    pageTitle: 'Void en TypeScript',
    path: 'tipos-de-datos/void',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/02-tipos-de-datos/08-void.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/02-tipos-de-datos/08-void-ts.html`,
        `${MarkdownShikiHtml}/02-tipos-de-datos/08-void-js.html`
    ],
    headerTitle: 'Void en TypeScript',
    styles: [
        { href: `${styles}/02-tipos-de-datos/08-void.css` },
    ],
    scripts: [
        { src: `${scripts}/js/02-tipos-de-datos/08-void.js` },
    ]
};