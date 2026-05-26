// @ts-nocheck
"use strict";
/*
    *  ---------------------------------------------------------------------------------------------------------------  *
    *  -----  /03-desestructuring-arrays.js  --  /src/scripts/js/05-ecmascript-es6/03-desestructuring-arrays.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------  *
*/

(() => {
    //console.clear();
    console.log('\n');
    console.warn('-----  03-desestructuring-arrays.ts  -----');
    console.log('\n');
    //  -----  Desestructuración de Arrays - inferiendo el tipo  -----
    const avengersArr = ['Cap. América', 'Ironman', 'Hulk'];
    const ironman1 = avengersArr[1];
    console.log({ ironman1 });
    const [capitan2, ironman2, hulk2] = avengersArr;
    console.log({ capitan2, ironman2, hulk2 });
    const [, ironman3,] = avengersArr;
    console.log({ ironman3 });
    const [, , hulk3] = avengersArr;
    console.log({ hulk3 });
    //  -----  Desestructuración de Arrays - con tipo explícito  -----
    const avengersArr2 = ['Cap. América', 'Ironman', 'Hulk'];
    const [capitan4, ironman4, hulk4] = avengersArr2;
    console.log('\n', { capitan4, ironman4, hulk4 });
    //  -----  Desestructuración de Arrays - como una tupla  -----
    const avengersArr3 = ['Cap. América', true, 100];
    const [capitan5, ironman5, hulk5] = avengersArr3;
    console.log('\n', { capitan5, ironman5, hulk5 });
})();
//# sourceMappingURL=03-desestructuring-arrays.js.map