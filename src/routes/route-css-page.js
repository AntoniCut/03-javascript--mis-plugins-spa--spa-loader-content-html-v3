/*
    *  --------------------------------------------------------------------------  *
    *  -----  /route-css-page.js  --  /src/routes/route-css-page.js  -----  *
    *  --------------------------------------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const routeCssPage = {
    id: 'cssPage',
    favicon: `${favicon}/css-icon.svg`,
    pageTitle: 'CSS3 — Cascading Style Sheets',
    path: 'css-page',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/css-page.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'CSS3 — Cascading Style Sheets',
    styles: [
        { href: `${styles}/css-page.css` }
    ],
    scripts: [
        { src: `${scripts}/js/pages/css-page.cjs.js` },
        { src: `${scripts}/js/pages/css-page.esm.js`, isModule: true },
    ]
};
