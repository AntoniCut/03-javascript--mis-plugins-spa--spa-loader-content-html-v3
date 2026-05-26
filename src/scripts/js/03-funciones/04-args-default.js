// @ts-nocheck
"use strict";
/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  /04-args-default.js  --  /src/scripts/js/03-funciones/04-args-default.js  -----  *
    *  --------------------------------------------------------------------------------------  *
*/

(function () {
    console.clear();
    console.log('\n');
    console.warn('-----  04-args-default.ts  -----');
    console.log('\n');
    //  -----  Función con argumentos opcionales  -----
    var fullName = function (firsName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper)
            return "".concat(firsName.toUpperCase(), " ").concat(lastName || 'NO LAST NAME').toUpperCase();
        else
            return "".concat(firsName, " ").concat(lastName || 'No last name');
    };
    //  -----  todos los argumentos  -----
    var name1 = fullName('Tony', 'Stark');
    //  -----  argumento opcional omitido  -----
    var name2 = fullName('Tony');
    //  -----  argumento opcional con valor por defecto  -----
    var name3 = fullName('Steve', 'Rogers', true);
    console.log({ name1: name1, name2: name2, name3: name3 });
    //  -----  Función con argumentos opcionales  -----
    var sumar = function (a, b) { return a + (b || 0); };
    console.log(sumar(1, 2));
})();
//# sourceMappingURL=04-args-default.js.map