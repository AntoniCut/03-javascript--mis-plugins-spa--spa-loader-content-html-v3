/*
    *  ------------------------------------------  *
    *  -----  /route-00-home.js  -----  *
    *  ------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, layoutFooter, styles, scripts } = paths;

/** @typedef {import("../../types/index.js").Route} Route */

/** @type {Route} - `-----  Ruta deinicio  -----` */
export const route00Home = {
    id: 'home',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: 'spa-loader-content-html — Plugin SPA v3',
    path: '',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/home.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${scripts}/js/plugins/markdown-shiki-html.cjs.js`,
        `${scripts}/js/plugins/markdown-shiki-html.esm.js`,
    ],
    headerTitle: 'spa-loader-content-html — Plugin SPA v3',
    styles: [
        { href: `${styles}/home.css` }
    ],
    scripts: [
        { src: `${scripts}/js/pages/home.cjs.js` },
        { src: `${scripts}/js/pages/home.esm.js`, isModule: true },
    ]
};