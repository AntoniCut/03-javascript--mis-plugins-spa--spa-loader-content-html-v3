// @ts-nocheck
"use strict";
/*
    *  -------------------------------------------------------------------------------------------------------  *
    *  -----  /05-interfaces-funciones.js  --  /src/scripts/js/07-interfaces/05-interfaces-funciones.js  -----  *
    *  -------------------------------------------------------------------------------------------------------  *
*/

(() => {
    console.clear();
    console.log('\n');
    console.warn('-----  05-interfaces-funciones.ts  -----');
    console.log('\n');
    //  -----  Usar interfaces  -----
    let addNumbersFunction;
    //  -----  Asignar la función  -----
    addNumbersFunction = (a, b) => {
        return a + b;
    };
    //  -----  Usar la función  -----
    const result = addNumbersFunction(10, 20);
    //  -----  Mostrar el resultado  -----
    console.log({ result });
})();
//# sourceMappingURL=05-interfaces-funciones.js.map