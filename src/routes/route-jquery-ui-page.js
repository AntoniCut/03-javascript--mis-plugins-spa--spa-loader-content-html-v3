/*
    *  --------------------------------------------------------------------------------------------  *
    *  -----  /route-jquery-ui-page.js  --  /src/routes/route-jquery-ui-page.js  -----  *
    *  --------------------------------------------------------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const routeJqueryUiPage = {
    id: 'jqueryUiPage',
    favicon: `${favicon}/jquery-ui-icon.svg`,
    pageTitle: 'jQuery UI — Interactions, Widgets & Effects',
    path: 'jquery-ui-page',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/jquery-ui-page.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        { url: `${MarkdownShikiHtml}/pages/jquery-ui-page.cjs-js.html`, target: '[data-shiki="codeCjsJs"]' },
        { url: `${MarkdownShikiHtml}/pages/jquery-ui-page.esm-js.html`, target: '[data-shiki="codeEsmJs"]' },
    ],
    headerTitle: 'jQuery UI — Interactions, Widgets & Effects',
    styles: [
        { href: `${styles}/jquery-ui-page.css` }
    ],
    scripts: [
        { src: `${scripts}/js/pages/jquery-ui-page.cjs.js` },
        { src: `${scripts}/js/pages/jquery-ui-page.esm.js`, isModule: true },
    ]
};
