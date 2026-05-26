// @ts-nocheck
"use strict";
/*
    *  -----------------------------------------------------------------------------------------------------------------  *
    *  -----  /02-desestructuring-objects.js  --  /src/scripts/js/05-ecmascript-es6/02-desestructuring-objects.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------  *
*/

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    //console.clear();
    console.log('\n');
    console.warn('-----  02-desestructuring-objects.ts  -----');
    console.log('\n');
    //  -----  Desestructuración de Objetos  -----
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123123,
    };
    //  -----  Desestructuración  -----
    const { nick, ironman, activo, poder, vision } = avengers;
    //  -----  salida por consola  -----
    console.log('nick :', nick);
    console.log('ironman :', ironman);
    console.log('activo :', activo);
    console.log('poder :', poder.toFixed(2));
    console.log('vision :', vision.toUpperCase());
    //  -----  Usando una funcion con parametros de tipo en linea  -----
    const printAvenger = (
    //  -----  crear tipo en linea  -----
    avengers) => {
        const { nick, ironman, activo, poder, vision } = avengers;
        console.log('\n\nprintAvenger nick :', nick);
        console.log('printAvenger ironman :', ironman);
        console.log('printAvenger activo :', activo);
        console.log('printAvenger poder :', poder.toFixed(2));
        console.log('printAvenger vision :', vision.toUpperCase());
    };
    printAvenger(avengers);
    //  -----  Usando un tipo ya creado  -----
    const printAvenger2 = (_a) => {
        var { ironman } = _a, rest = __rest(_a, ["ironman"]);
        console.log('\n\nprintAvenger2 ironman :', ironman);
        console.log('printAvenger2 resto de propiedades :', rest);
    };
    printAvenger2(avengers);
})();
//# sourceMappingURL=02-desestructuring-objects.js.map