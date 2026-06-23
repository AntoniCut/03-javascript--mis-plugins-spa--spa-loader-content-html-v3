/*
    *  -----------------------------------------------------------------------------  *
    *  -----  /route-astro-page.js  --  /src/routes/route-astro-page.js  -----  *
    *  -----------------------------------------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const routeAstroPage = {
    id: 'astroPage',
    favicon: `${favicon}/astro-official.svg`,
    pageTitle: 'Astro — Framework de Sitios Estáticos',
    path: 'astro-page',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/astro-page.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        { url: `${MarkdownShikiHtml}/pages/astro-page.cjs-js.html`, target: '[data-shiki="codeCjsJs"]' },
        { url: `${MarkdownShikiHtml}/pages/astro-page.esm-js.html`, target: '[data-shiki="codeEsmJs"]' },
    ],
    headerTitle: 'Astro — Framework de Sitios Estáticos',
    styles: [
        { href: `${styles}/astro-page.css` }
    ],
    scripts: [
        { src: `${scripts}/js/pages/astro-page.cjs.js` },
        { src: `${scripts}/js/pages/astro-page.esm.js`, isModule: true },
    ]
};