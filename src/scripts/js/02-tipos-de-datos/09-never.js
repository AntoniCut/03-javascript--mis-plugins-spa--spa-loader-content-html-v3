// @ts-nocheck
"use strict";
/*
    *  -----------------------------------------------------------------------------  *
    *  -----  /09-never.js  --  /src/scripts/js/02-tipos-de-datos/09-never.js  -----  *
    *  -----------------------------------------------------------------------------  *
*/

(function () {
    console.log('\n');
    console.warn('-----  09-never.ts  -----');
    console.log('\n');
    //  ----------------------------------------------
    //  -----  never  --------------------------------
    //  -----  No debe de terminar Exitosamente  -----
    //  -----  Da Error en tiempo de Ejecución  ------
    //  ----------------------------------------------
    var errorOrNumber = function (message) {
        if (!message)
            throw new Error(message);
        return 1;
    };
    errorOrNumber('Auxilio');
    errorOrNumber();
    var error = function (message) {
        throw new Error(message);
    };
    error('Auxilio');
})();
//# sourceMappingURL=09-never.js.map