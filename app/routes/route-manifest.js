/*
    *  -------------------------------------------------------------------  *
    *  -----  /route-manifest.js  --  /src/routes/route-manifest.js  -----  *
    *  -------------------------------------------------------------------  *
*/


/** 
 * - `Manifiesto ligero de rutas: solo id, path y nombre de archivo (sin imports)`
 * - Se usa para lazy loading: el módulo de cada ruta se importa dinámicamente bajo demanda.
 * @type {import("../../types/index.js").RouteManifest[]} 
 */

export const routeManifest = [

    //  ----------  00 - Home  ----------
    { 
        id: 'home', 
        path: '', 
        file: 'route-00-home' 
    },

    //  ----------  01 - Introducción  ----------
    { 
        id: 'inferirTipos', 
        path: 'introduccion/inferir-tipos', 
        file: 'route-01-01-inferir-tipos' 
    },

    //  ----------  02 - Tipos de Datos  ----------
    { 
        id: 'booleans', 
        path: 'tipos-de-datos/booleans', 
        file: 'route-02-01-booleans' 
    },

    
    { 
        id: 'numbers', 
        path: 'tipos-de-datos/numbers', 
        file: 'route-02-02-numbers' 
    },

    { 
        id: 'strings', 
        path: 'tipos-de-datos/strings', 
        file: 'route-02-03-strings' 
    },

    { 
        id: 'any', 
        path: 'tipos-de-datos/any', 
        file: 'route-02-04-any' 
    },

    { 
        id: 'arrays', 
        path: 'tipos-de-datos/arrays', 
        file: 'route-02-05-arrays' 
    },

    { 
        id: 'tuples', 
        path: 'tipos-de-datos/tuples', 
        file: 'route-02-06-tuples' 
    },

    { 
        id: 'enums', 
        path: 'tipos-de-datos/enums', 
        file: 'route-02-07-enums' 
    },

    { 
        id: 'void', 
        path: 'tipos-de-datos/void', 
        file: 'route-02-08-void' 
    },

    { 
        id: 'never', 
        path: 'tipos-de-datos/never', 
        file: 'route-02-09-never' 
    },

    { 
        id: 'nullUndefined', 
        path: 'tipos-de-datos/null-undefined', 
        file: 'route-02-10-undefined' 
    },
    
    { 
        id: 'tareaTiposDeDatos', 
        path: 'tipos-de-datos/tarea', 
        file: 'route-02-11-tarea-tipos-de-datos' 
    },

    //  ----------  03 - Funciones  ----------
    { 
        id: 'functions', 
        path: 'funciones/funciones-basicas', 
        file: 'route-03-01-functions' 
    },

    { 
        id: 'args-required', 
        path: 'funciones/argumentos-requeridos', 
        file: 'route-03-02-args-required' 
    },

    { 
        id: 'args-optional', 
        path: 'funciones/argumentos-opcionales', 
        file: 'route-03-03-args-optional' 
    },

    { 
        id: 'args-default', 
        path: 'funciones/argumentos-por-defecto', 
        file: 'route-03-04-args-default' 
    },

    { 
        id: 'args-rest', 
        path: 'funciones/argumentos-rest', 
        file: 'route-03-05-args-rest' 
    },

    { 
        id: 'function-type', 
        path: 'funciones/tipos-de-funciones', 
        file: 'route-03-06-function-type' 
    },

    { 
        id: 'tarea-funciones', 
        path: 'funciones/tarea', 
        file: 'route-03-07-tarea-funciones' 
    },

    //  ----------  04 - Objetos  ----------
    { 
        id: 'objects', 
        path: 'objetos/objetos-basicos', 
        file: 'route-04-01-objects' 
    },

    { 
        id: 'objectsTypes', 
        path: 'objetos/tipos-en-objetos', 
        file: 'route-04-02-objects-types' 
    },

    { 
        id: 'unionTypes', 
        path: 'objetos/union-de-tipos', 
        file: 'route-04-03-union-types' 
    },

    { 
        id: 'tareaObjetos', 
        path: 'objetos/tarea', 
        file: 'route-04-04-tarea-objetos' 
    },


    //  ----------  05 - EcmaScript 2015 - ES6  ----------
    { 
        id: 'letVar', 
        path: 'ecmascript2015/let-var', 
        file: 'route-05-01-let-var' 
    },

    { 
        id: 'desestObjects', 
        path: 'ecmascript2015/desestructuracion-objetos', 
        file: 'route-05-02-desestructuring-objects' 
    },

    { 
        id: 'desestArrays', 
        path: 'ecmascript2015/desestructuracion-arrays', 
        file: 'route-05-03-desestructuring-arrays' 
    },

    { 
        id: 'cicloForOf', 
        path: 'ecmascript2015/ciclo-for-of', 
        file: 'route-05-04-ciclo-for-of' 
    },

    { 
        id: 'clasesES6', 
        path: 'ecmascript2015/clases-es6', 
        file: 'route-05-05-clases-en-es6' 
    },


    //  ----------  06 - Clases en TypeScript  ----------
    { 
        id: 'claseBasica', 
        path: 'clases/clase-basica', 
        file: 'route-06-01-clase-basica' 
    },

    { 
        id: 'claseCorta', 
        path: 'clases/clase-forma-corta', 
        file: 'route-06-02-clase-forma-corta' 
    },

    { 
        id: 'metodosPublicosPrivados', 
        path: 'clases/metodos-publicos-privados', 
        file: 'route-06-03-metodos-publicos-privados' 
    },

    { 
        id: 'herencia', 
        path: 'clases/herencia-super-extends', 
        file: 'route-06-04-herencia-super-extends' 
    },

    { 
        id: 'getsSets', 
        path: 'clases/gets-sets', 
        file: 'route-06-05-gets-y-sets' 
    },

    { 
        id: 'claseAbstract', 
        path: 'clases/clase-abstracta', 
        file: 'route-06-06-clase-abstracta' 
    },

    { 
        id: 'constructoresPrivados', 
        path: 'clases/constructores-privados', 
        file: 'route-06-07-constructores-privados' 
    },


    //  ----------  07 - Interfaces en TypeScript  ----------
    { 
        id: 'interfacesBasicas', 
        path: 'interfaces/interfaces-basicas', 
        file: 'route-07-01-interfaces-basicas' 
    },

    { 
        id: 'interfacesComplejas', 
        path: 'interfaces/interfaces-complejas', 
        file: 'route-07-02-interfaces-complejas' 
    },

    { 
        id: 'interfacesMetodos', 
        path: 'interfaces/interfaces-metodos', 
        file: 'route-07-03-interfaces-metodos' 
    },

    { 
        id: 'interfacesClases', 
        path: 'interfaces/interfaces-clases', 
        file: 'route-07-04-interfaces-clases' 
    },

    { 
        id: 'interfacesFunciones', 
        path: 'interfaces/interfaces-funciones', 
        file: 'route-07-05-interfaces-funciones' 
    },

    { 
        id: 'tareaInterfaces', 
        path: 'interfaces/tarea-interfaces', 
        file: 'route-07-06-tarea-interfaces' 
    },


    //  ----------  08 - Namespaces  ----------
    { 
        id: 'namespaces', 
        path: 'namespaces/validations', 
        file: 'route-08-01-namespaces' 
    },

    //  ----------  404 - Not Found  ----------
    { 
        id: '404NotFoundPage', 
        path: '404-not-found-page', 
        file: 'route-404-not-found-page' 
    },

];
