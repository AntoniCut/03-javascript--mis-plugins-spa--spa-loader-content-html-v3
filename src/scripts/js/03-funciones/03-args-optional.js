// @ts-nocheck
"use strict";
/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  /03-args-optional.js  --  /src/scripts/js/03-funciones/03-args-optional.js  -----  *
    *  ----------------------------------------------------------------------------------------  *
*/

(function () {
    console.clear();
    console.log('\n');
    console.warn('-----  03-args-optional.ts  -----');
    console.log('\n');
    //  -----  Función con argumentos opcionales  -----
    var fullName = function (firsName, lastName) {
        return "".concat(firsName, " ").concat(lastName || 'No last name');
    };
    //  -----  todos los argumentos  -----
    var name1 = fullName('Tony', 'Stark');
    //  -----  argumento opcional omitido  -----
    var name2 = fullName('Tony');
    console.log({ name1: name1, name2: name2 });
    //  -----  Función con argumentos opcionales  -----
    var sumar = function (a, b) { return a + (b || 0); };
    console.log(sumar(1, 2));
})();
//# sourceMappingURL=03-args-optional.js.map