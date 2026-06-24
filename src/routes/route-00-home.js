/*
    *  ------------------------------------------  *
    *  -----  /route-00-home.js  -----  *
    *  ------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

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
        { url: `${MarkdownShikiHtml}/plugins/spa-loader-content-html/v3/spa-loader-content-html-js.html`, target: '[data-shiki="codeEsmJs"]' },
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