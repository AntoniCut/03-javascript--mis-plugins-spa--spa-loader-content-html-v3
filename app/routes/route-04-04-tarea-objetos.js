import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0404TareaObjetos = {
    id: 'tareaObjetos',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: 'Tarea de Objetos en TypeScript',
    path: 'objetos/tarea',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/04-objetos/04-tarea-objetos.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/04-objetos/04-tarea-objetos-ts.html`,
        `${MarkdownShikiHtml}/04-objetos/04-tarea-objetos-js.html`
    ],
    headerTitle: 'Objetos en TypeScript',
    styles: [
        { href: `${styles}/04-objetos/04-tarea-objetos.css` },
    ],
    scripts: [
        { src: `${scripts}/js/04-objetos/04-tarea-objetos.js` },
    ]
};