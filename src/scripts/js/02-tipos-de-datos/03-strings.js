// @ts-nocheck
"use strict";
/*
    *  ---------------------------------------------------------------------------------  *
    *  -----  /03-strings.js  --  /src/scripts/js/02-tipos-de-datos/03-strings.js  -----  *
    *  ---------------------------------------------------------------------------------  *
*/

(function () {
    var _a;
    console.log('\n');
    console.warn('-----  03-strings.ts  -----');
    console.log('\n');
    //  -----  3 formas de crear strings  -----
    var batman = 'Batman';
    var linternaVerde = "Linterna's Verde";
    var volcanNegro = "H\u00E9roe: Volc\u00E1n Negro";
    //  -----  number  -----
    var abc = 123;
    console.log({ batman: batman, linternaVerde: linternaVerde, volcanNegro: volcanNegro, abc: abc });
    //  -----  Métodos de String  -----
    console.log('\n', batman.toUpperCase());
    console.log(" I'm ".concat(batman, ", ").concat(abc.toString(), " "));
    console.log(((_a = batman[11]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No existe el héroe');
})();
//# sourceMappingURL=03-strings.js.map