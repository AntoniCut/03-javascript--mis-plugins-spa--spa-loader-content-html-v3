# PLAN — Sincronización spa-loader-content-html (v3 → v3.1)

## Estado actual

- **02-javascript** (`udemy.antonydev.tech/.../02-javascript`): versión **mejorada**.
  - `src/plugins` y `app/plugins` son idénticas (verificado por diff).
  - Sin View Transition, orden correcto de carga.
- **v3** (`mis-plugins-spa/spa-loader-content-html-v3`): versión **anterior**.
  - Con View Transition, orden incorrecto de carga.
- **v3.1**: copia de v3 sobre la que se aplican las mejoras. Es la versión de trabajo.

## Diferencias encontradas (02-javascript vs v3)

### 1. `loadContent` — View Transition
| | 02-javascript (mejorado) | v3 |
|---|---|---|
| Enfoque | `async/await` con `try/catch` | `document.startViewTransition` + Promesas |
| View Transition | Eliminada | Activa si el navegador la soporta |

**Motivo de quitarla:** al haber múltiples `fetch()` asíncronos dentro del callback, Chrome aborta la transición por su timeout interno (`TimeoutError`). El DOM se actualiza igual, así que la transición es prescindible.

### 2. `loadComponentDom` — Orden de carga
**Rama "sin components":**
- 02-javascript: `renderPageComponents` → `applyRouteMeta` → `notifyRouteLoaded`
- v3: `applyRouteMeta` → `notifyRouteLoaded` → `renderPageComponents`

**Rama principal (con components):**
- 02-javascript: components → navbar → `renderPageComponents` → `applyRouteMeta` → `notifyRouteLoaded`
- v3: components → navbar → `applyRouteMeta` → `renderPageComponents` → `notifyRouteLoaded`

**Por qué el nuevo orden es correcto:** `applyRouteMeta` carga los `scripts` de la ruta, y esos scripts pueden referenciar contenedores inyectados por `renderPageComponents`. Si `applyRouteMeta` corre primero (v3), los scripts fallan al no encontrar los contenedores. Además, en v3 `notifyRouteLoaded` se dispara antes de que `renderPageComponents` termine (rama sin components), desbloqueando el loader prematuramente.

## Cambios aplicados a v3.1

### Core (portados de 02-javascript)
- [x] **1.** `loadContent` → `async` con `try/await/catch`, sin View Transition.
- [x] **2.** `loadComponentDom` (rama sin components): orden `renderPageComponents` → `applyRouteMeta` → `notifyRouteLoaded`.
- [x] **3.** `loadComponentDom` (rama principal): orden navbar → `renderPageComponents` → `applyRouteMeta` → `notifyRouteLoaded`.

### Mejoras adicionales (A–D)
- [x] **A.** `init()` y `loadNotFoundRoute` migrados de `.then()/.catch()` a `async/await` por consistencia con el resto del plugin.
- [x] **B.** Guard de navegación: flag `isNavigating` + `AbortController` para abortar fetchs previos ante clics rápidos (evita race conditions). La señal se propaga `loadContent` → `loadComponentDom` → `fetchHTML`.
- [x] **C.** `fetchHTML`: mensaje de error preciso. Distingue error HTTP (`HTTP <status> <statusText>`) de error de red (`Error de red: no se pudo conectar...`). Los `AbortError` (cancelación por nueva navegación) se ignoran sin mostrar error.
- [x] **D.** `loadRouteModule`: cachear fallos con un `Set<string>` (`brokenRouteModules`) para no reintentar `import()` repetidamente sobre rutas rotas.

### Cambio de cableado
- [x] `src/spa/spa.js`: import redirigido de `v3/` a `v3.1/`.

## Archivos modificados

1. `src/plugins/spa-loader-content-html/v3.1/spa-loader-content-html.js` — cambios del plugin.
2. `src/spa/spa.js` — import apuntando a `v3.1/`.

## Notas

- `v3/` se conserva intacto como referencia/historial.
- La señalización de aborto no cancela el `import()` dinámico de módulos de ruta (no soporta `AbortSignal`), solo los `fetch()` de componentes HTML.
- Las mejoras B, C y D no estaban en 02-javascript; son nuevas en v3.1 y son candidatas a backport hacia 02-javascript si se desea unificar.
