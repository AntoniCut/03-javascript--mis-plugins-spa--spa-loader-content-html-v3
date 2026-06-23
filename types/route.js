/*
    *  --------------------------------------------------------  *
    *  -----  /route-types.js  --  /types/route-types.js  -----  *
    *  --------------------------------------------------------  *
*/


//  ----------  Esto asegura que VS Code lo trate como módulo  ----------
export { };


/**
 * -------------------------------
 * -----  `RouteComponents`  -----
 * -------------------------------
 * @typedef {Record<string, string|undefined>} RouteComponents - Mapa de componentes HTML a cargar dinámicamente. 
 *                                                               Cada valor puede ser string o undefined.
 */


/**
 * --------------------------
 * -----  `RouteStyle`  -----
 * --------------------------
 * @typedef {Object} RouteStyle - Representa una hoja de estilos que debe cargarse dinámicamente.
 * @property {string} href - Ruta absoluta o relativa del archivo CSS.
 */


/**
 * ---------------------------
 * -----  `RouteScript`  -----
 * ---------------------------
 * @typedef {Object} RouteScript - Representa un script que debe cargarse dinámicamente.
 * @property {string} src - Ruta absoluta o relativa del archivo JS.
 * @property {boolean} [isModule] - Si es true, el script se carga como módulo ES6 con import() dinámico.
 * @property {string|null} [exportFunctionName] - Nombre de la función exportada a ejecutar tras importar el módulo (solo si isModule es true).
 */



/**
 * ----------------------------------
 * -----  `MarkdownShikiEntry`  -----
 * ----------------------------------
 * @typedef {Object} MarkdownShikiEntry - Entrada de archivo HTML generado por Shiki para resaltar código.
 * @property {string} url - URL absoluta al archivo .html generado con Shiki.
 * @property {string} target - Selector CSS del contenedor DOM donde se insertará el HTML (p.ej. `'[data-shiki="codeJs"]'`). Permite múltiples archivos del mismo tipo sin colisión de IDs.
 */



/**
 * ---------------------
 * -----  `Route`  -----
 * ---------------------
 * @typedef {Object} Route - Objeto de configuración de cada ruta del SPA.
 * @property {string} id - Identificador único de la ruta.
 * @property {string} path - URL interna asociada a la vista.
 * @property {string} pageTitle - Título mostrado en la etiqueta `<title>`.
 * @property {string} headerTitle - Título que se mostrará dentro del layout-header.
 * @property {string} favicon - Ruta del favicon específico de la vista.
 * @property {RouteComponents} components - Mapa selector → URL de componente HTML.
 * @property {MarkdownShikiEntry[]} MarkdownShikiHtml - Rutas a los archivos .html generados por Shiki para mostrar código.
 *                                          Ejecuta `pnpm code-highlight` para regenerarlos.
 * @property {RouteStyle[]|null} styles - Lista de hojas CSS asociadas a la vista (opcional).
 * @property {RouteScript[]|null} scripts - Lista de scripts a cargar dinámicamente (opcional).
 */
