// @ts-nocheck
"use strict";
/*
    *  ---------------------------------------------------------------------------------------------------  *
    *  -----  /01-interfaces-basicas.js  --  /src/scripts/js/07-interfaces/01-interfaces-basicas.js  -----  *
    *  ---------------------------------------------------------------------------------------------------  *
*/

(() => {
    var _a;
    console.clear();
    console.log('\n');
    console.warn('-----  01-interfaces-basicas.ts  -----');
    console.log('\n');
    //  -----  Usar el tipo personalizado  -----
    let flash = {
        name: 'Barry Allen',
        age: 25,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    };
    console.log(flash);
    //  -----  Otro objeto del mismo tipo  -----
    let superman = {
        name: 'Superman',
        age: 50,
        powers: ['Super Fuerza', 'Volar'],
        getName() {
            return this.name;
        }
    };
    console.log('superman.getName() = ', (_a = superman.getName) === null || _a === void 0 ? void 0 : _a.call(superman));
})();
//# sourceMappingURL=01-interfaces-basicas.js.map