// @ts-nocheck
"use strict";
/*
    *  -----------------------------------------------------------------------------------------------  *
    *  -----  /10-null-undefined.js  --  /src/scripts/js/02-tipos-de-datos/10-null-undefined.js  -----  *
    *  -----------------------------------------------------------------------------------------------  *
*/

(function () {
    console.log('\n');
    console.warn('-----  10-null-undefined.ts  -----');
    console.log('\n');
    //  -----  null o undefined  -----
    //  -----  strictNullChecks = true  -----
    var nada = undefined;
    // nada = 123;                   //  Error: Type 'number' is not assignable to type 'undefined'.
    console.log('\n', { nada: nada });
    var nadaNumber = undefined;
    // nadaNumber = 123;             //  OK
    // nadaNumber = null;            //  OK
    console.log('\n', { nadaNumber: nadaNumber });
    var isActive = null;
    console.log('\n', { isActive: isActive });
})();
//# sourceMappingURL=10-null-undefined.js.map