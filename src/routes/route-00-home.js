

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, layoutFooter, styles } = paths;

/** @typedef {import("../../types/index.js").Route} Route */


/** @type {Route} - `-----  Ruta de inicio  -----` */
export const route00Home = {
    id: 'home',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: 'TypeScript - Tu completa guia y manual de mano',
    path: '',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/home.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [],
    headerTitle: 'TypeScript - Tu completa guia y manual de mano',
    styles: [
        { href: `${styles}/home.css` }
    ],
    scripts: []
};