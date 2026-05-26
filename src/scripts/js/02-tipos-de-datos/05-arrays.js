// @ts-nocheck
"use strict";
/*
    *  -------------------------------------------------------------------------------  *
    *  -----  /05-arrays.js  --  /src/scripts/js/02-tipos-de-datos/05-arrays.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/

(function () {
    console.log('\n');
    console.warn('-----  05-arrays.ts  -----');
    console.log('\n');
    //  -----  Arrays de String, Numbers, Boolean  -----
    var numbers1 = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10, true];
    numbers1.push(false);
    console.log({ numbers1: numbers1 });
    //  -----  Array de Numbers  -----
    var numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers2.push(11);
    console.log('\n', { numbers2: numbers2 });
    //  -----  Array de Strings  -----
    var villains = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    console.log('\n', { villains: villains });
    console.log('\n');
    villains.forEach(function (villain) { return console.log(villain.toUpperCase()); });
})();
//# sourceMappingURL=05-arrays.js.map