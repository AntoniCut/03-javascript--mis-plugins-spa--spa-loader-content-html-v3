# spa-loader-content-html-v3

Plugin SPA en Vanilla JS (ES Modules) para cargar contenido HTML dinámicamente,
con renderizado de código fuente resaltado mediante Shiki (tema `dark-plus`).

## Scripts

| Script | Descripción |
|---|---|
| `pnpm dev` | Entorno de desarrollo (watch + server con polling). |
| `pnpm dev:watch` | Watch de Gulp sin polling. |
| `pnpm build` | Build de producción. |
| `pnpm code-highlight` | Regenera los bloques HTML resaltados con Shiki. |
| `pnpm add:ts-nocheck` | Añade `// @ts-nocheck` a los archivos TS. |

## MarkdownShiki

El proyecto muestra código fuente resaltado en las vistas mediante un pipeline
de **4 pasos** (pre-compilado en Node, renderizado en navegador):

### 1. Generación (Node)

`pnpm code-highlight` ejecuta `generate-markdown-shiki.js`, que:

1. Lee los módulos de `src/routes/route-*.js` y recolecta las entradas
   `MarkdownShikiHtml` (objetos `{ url, target }`).
2. Para cada entrada, deriva el archivo fuente por **convención de nombres
   multi-sufijo** y lo resalta con `codeToHtml()` de Shiki (tema `dark-plus`).
3. Escribe el HTML resultante en `src/markdown-shiki/`.

La generación se ejecuta en paralelo con `Promise.all`.

#### Convención de nombres

| Sufijo del `.html` | Archivo fuente | Lenguaje Shiki |
|---|---|---|
| `...-ts.html` | `src/scripts/ts/**/*.ts` | `typescript` |
| `...-js.html` | `src/scripts/js/**/*.js` | `javascript` |
| `...-html.html` | `src/pages/**/*.html` | `html` |
| `...-css.html` | `src/scss/pages/**/*.scss` | `scss` |

> Los sufijos `cjs-js` / `esm-js` (p. ej. `page.cjs-js.html`) se resuelven
> mediante el sufijo `-js.html` → `page.cjs.js` / `page.esm.js`.

### 2. Copia Gulp

La tarea `copyMarkdownShiki` copia `src/markdown-shiki/` → `app/markdown-shiki/`.
Se ejecuta tanto en `gulp dev` (con watch sobre `src/markdown-shiki/**/*`) como
en `gulp build`.

### 3. Servidor

El servidor estático sirve el contenido desde `app/`, donde ya están disponibles
los archivos `app/markdown-shiki/**/*.html`.

### 4. Inyección SPA

En el navegador, `renderMarkdownShiki(route)` (dentro de
`src/plugins/spa-loader-content-html/v3/spa-loader-content-html.js`) recorre las
entradas `MarkdownShikiHtml` de la ruta y, para cada una:

- hace `fetch(url)` del HTML pre-compilado,
- localiza el contenedor con `document.querySelector(target)`,
- inserta el HTML con `container.innerHTML`.

Cada entrada debe ser un objeto `{ url: string, target: string }`, donde
`target` es un selector CSS del contenedor destino
(p. ej. `[data-shiki="codeJs"]`).

### Flujo completo

```
src/scripts|pages|scss  ──▶  src/markdown-shiki  ──▶  app/markdown-shiki  ──▶  DOM
   (fuente)        code-highlight   (HTML Shiki)   copyMarkdownShiki   fetch+innerHTML
```

### Regenerar tras editar código fuente

Si modificas un archivo fuente referenciado por una ruta, regenera y deja que el
watch de Gulp copie:

```bash
pnpm code-highlight
```
