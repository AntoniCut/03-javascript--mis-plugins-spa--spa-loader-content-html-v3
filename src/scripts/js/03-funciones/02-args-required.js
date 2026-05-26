// @ts-nocheck
"use strict";
/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  /02-args-required.js  --  /src/scripts/js/03-funciones/02-args-required.js  -----  *
    *  ----------------------------------------------------------------------------------------  *
*/

(function () {
    console.clear();
    console.log('\n');
    console.warn('-----  02-args-required.ts  -----');
    console.log('\n');
    //  -----  Función con argumentos requeridos  -----
    var fullName = function (firsName, lastName) {
        return "".concat(firsName, " ").concat(lastName);
    };
    //  -----  Llamadas a la función  -----
    var name1 = fullName('Tony', 'Stark');
    var name2 = fullName('Tony', true);
    console.log({ name1: name1, name2: name2 });
})();
//# sourceMappingURL=02-args-required.js.map