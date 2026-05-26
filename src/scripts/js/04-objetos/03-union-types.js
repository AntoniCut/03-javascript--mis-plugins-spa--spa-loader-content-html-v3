// @ts-nocheck
"use strict";
/*
    *  ----------------------------------------------------------------------------------  *
    *  -----  /03-union-types.js  --  /src/scripts/js/04-objetos/03-union-types.js  -----  *
    *  ----------------------------------------------------------------------------------  *
*/

(function () {
    var _a, _b;
    console.clear();
    console.log('\n');
    console.warn('-----  03-union-types.ts  -----');
    console.log('\n');
    //  -----  Definir un tipo personalizado con union types  -----
    //  -----  y asignamos un string  -----------------------------
    var myCustomVariable = 'Antonio';
    console.log('\nmyCustomVariable:', myCustomVariable);
    console.log('typeof myCustomVariable:', typeof myCustomVariable);
    //  -----  Asignar un número a la variable  -----
    myCustomVariable = 20;
    console.log('\nmyCustomVariable:', myCustomVariable);
    console.log('typeof myCustomVariable:', typeof myCustomVariable);
    //  -----  Asignar un objeto de tipo Hero a la variable  -----
    myCustomVariable = {
        name: 'Superman',
        age: 50,
        powers: ['Super Fuerza', 'Volar'],
        getName: function () {
            return this.name;
        }
    };
    console.log('\nmyCustomVariable:', myCustomVariable);
    console.log('typeof myCustomVariable:', typeof myCustomVariable);
    console.log('myCustomVariable.getName():', (_b = (_a = myCustomVariable).getName) === null || _b === void 0 ? void 0 : _b.call(_a));
})();
//# sourceMappingURL=03-union-types.js.map