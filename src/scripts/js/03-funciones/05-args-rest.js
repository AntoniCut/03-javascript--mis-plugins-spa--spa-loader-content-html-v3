// @ts-nocheck
"use strict";
/*
    *  --------------------------------------------------------------------------------  *
    *  -----  /05-args-rest.js  --  /src/scripts/js/03-funciones/05-args-rest.js  -----  *
    *  --------------------------------------------------------------------------------  *
*/

(function () {
    console.clear();
    console.log('\n');
    console.warn('-----  05-args-rest.ts  -----');
    console.log('\n');
    //  -----  Rest parameters  -----
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(' '));
    };
    //  -----  Usamos el operador rest para agrupar los argumentos restantes en un array  -----
    var sumerman = fullName('Clark', 'Joseph', 'Kent', 'Superman');
    console.log({ sumerman: sumerman });
})();
//# sourceMappingURL=05-args-rest.js.map