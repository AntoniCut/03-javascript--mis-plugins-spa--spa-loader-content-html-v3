/*
    *  --------------------------------------------------------------------------  *
    *  -----  /route-html-page.js  --  /src/routes/route-html-page.js  -----  *
    *  --------------------------------------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const routeHtmlPage = {
    id: 'htmlPage',
    favicon: `${favicon}/html-icon.svg`,
    pageTitle: 'HTML5 — HyperText Markup Language',
    path: 'html-page',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/html-page.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        { url: `${MarkdownShikiHtml}/pages/html-page.cjs-js.html`, id: 'codeCjsJs' },
        { url: `${MarkdownShikiHtml}/pages/html-page.esm-js.html`, id: 'codeEsmJs' },
    ],
    headerTitle: 'HTML5 — HyperText Markup Language',
    styles: [
        { href: `${styles}/html-page.css` }
    ],
    scripts: [
        { src: `${scripts}/js/pages/html-page.cjs.js` },
        { src: `${scripts}/js/pages/html-page.esm.js`, isModule: true },
    ]
};
