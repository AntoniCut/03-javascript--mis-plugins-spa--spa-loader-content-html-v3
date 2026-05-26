import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0305ArgsRest = {
    id: 'args-rest',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: 'Argumentos Rest en Funciones en TypeScript',
    path: 'funciones/argumentos-rest',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/03-funciones/05-args-rest.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/03-funciones/05-args-rest-ts.html`,
        `${MarkdownShikiHtml}/03-funciones/05-args-rest-js.html`
    ],
    headerTitle: 'Argumentos Rest en Funciones en TypeScript',
    styles: [
        { href: `${styles}/03-funciones/05-args-rest.css` },
    ],
    scripts: [
        { src: `${scripts}/js/03-funciones/05-args-rest.js` },
    ]
};