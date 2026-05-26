import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route0211TareaTiposDeDatos = {
    id: 'tareaTiposDeDatos',
    favicon: `${favicon}/typescript-favicon.ico`,
    pageTitle: 'Tarea Tipos de Datos en TypeScript',
    path: 'tipos-de-datos/tarea',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/02-tipos-de-datos/11-tarea-tipos-de-datos.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    MarkdownShikiHtml: [
        `${MarkdownShikiHtml}/02-tipos-de-datos/11-tarea-tipos-de-datos-ts.html`,
        `${MarkdownShikiHtml}/02-tipos-de-datos/11-tarea-tipos-de-datos-js.html`
    ],
    headerTitle: 'Tarea Tipos de Datos en TypeScript',
    styles: [
        { href: `${styles}/02-tipos-de-datos/11-tarea-tipos-de-datos.css` },
    ],
    scripts: [
        { src: `${scripts}/js/02-tipos-de-datos/11-tarea-tipos-de-datos.js` },
    ]
};