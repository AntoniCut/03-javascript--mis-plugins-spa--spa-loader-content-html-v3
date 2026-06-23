/*
    *  -----------------------------------------------------------------------------  *
    *  -----  /route-react-page.js  --  /src/routes/route-react-page.js  -----  *
    *  -----------------------------------------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const routeReactPage = {
    id: 'reactPage',
    favicon: `${favicon}/react-icon.svg`,
    pageTitle: 'React — Biblioteca UI Declarativa',
    path: 'react-page',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/react-page.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        { url: `${MarkdownShikiHtml}/pages/react-page-html.html`, target: '[data-shiki="codeHtml"]' },
        { url: `${MarkdownShikiHtml}/pages/react-page-css.html`, target: '[data-shiki="codeCss"]' },
        { url: `${MarkdownShikiHtml}/pages/react-page.cjs-js.html`, target: '[data-shiki="codeCjsJs"]' },
        { url: `${MarkdownShikiHtml}/pages/react-page.esm-js.html`, target: '[data-shiki="codeEsmJs"]' },
    ],
    headerTitle: 'React — Biblioteca UI Declarativa',
    styles: [
        { href: `${styles}/react-page.css` }
    ],
    scripts: [
        { src: `${scripts}/js/pages/react-page.cjs.js` },
        { src: `${scripts}/js/pages/react-page.esm.js`, isModule: true },
    ]
};