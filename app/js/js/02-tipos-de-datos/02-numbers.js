// @ts-nocheck
"use strict";
/*
    *  ---------------------------------------------------------------------------------  *
    *  -----  /02-numbers.js  --  /src/scripts/js/02-tipos-de-datos/02-numbers.js  -----  *
    *  ---------------------------------------------------------------------------------  *
*/

(function () {
    console.log('\n');
    console.warn('-----  02-numbers.ts  -----');
    console.log('\n');
    var avengers = 10; // 10
    var villians = 20;
    console.log({ avengers: avengers, villians: villians });
    if (avengers < villians)
        console.log('\nEstamos en problemas');
    else
        console.log('Estamos a salvo');
    avengers = 123;
    console.log('\n', { avengers: avengers });
    avengers = Number('123');
    console.log({ avengers: avengers });
    avengers = Number('55A');
    console.log({ avengers: avengers }); // NaN  => Es considerado un Number.
})();
//# sourceMappingURL=02-numbers.js.map