/*
    *  ------------------------------------------------------------------------------------  *
    *  -----  /route-javascript-page.js  --  /src/routes/route-javascript-page.js  -----  *
    *  ------------------------------------------------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const routeJavascriptPage = {
    id: 'javascriptPage',
    favicon: `${favicon}/javascript-icon.svg`,
    pageTitle: 'JavaScript ES6+ — El Lenguaje de la Web',
    path: 'javascript-page',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/javascript-page.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'JavaScript ES6+ — El Lenguaje de la Web',
    styles: [
        { href: `${styles}/javascript-page.css` }
    ],
    scripts: [
        { src: `${scripts}/js/pages/javascript-page.cjs.js` },
        { src: `${scripts}/js/pages/javascript-page.esm.js`, isModule: true },
    ]
};
