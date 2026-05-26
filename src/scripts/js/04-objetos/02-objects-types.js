// @ts-nocheck
"use strict";
/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  /02-objects-types.js  --  /src/scripts/js/04-objetos/02-objects-types.js  -----  *
    *  --------------------------------------------------------------------------------------  *
*/

(function () {
    var _a;
    console.clear();
    console.log('\n');
    console.warn('-----  02-objects-types.ts  -----');
    console.log('\n');
    //  -----  Usar el tipo personalizado  -----
    var flash = {
        name: 'Barry Allen',
        age: 25,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    };
    console.log(flash);
    //  -----  Otro objeto del mismo tipo  -----
    var superman = {
        name: 'Superman',
        age: 50,
        powers: ['Super Fuerza', 'Volar'],
        getName: function () {
            return this.name;
        }
    };
    console.log('superman.getName() = ', (_a = superman.getName) === null || _a === void 0 ? void 0 : _a.call(superman));
})();
//# sourceMappingURL=02-objects-types.js.map