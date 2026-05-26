// @ts-nocheck
"use strict";
/*
    *  -----------------------------------------------------------------------------------  *
    *  -----  /01-booleans.js  --  /src/scripts/js/02-tipos-de-datos/01-booleans.js  -----  *
    *  -----------------------------------------------------------------------------------  *
*/

(function () {
    console.clear();
    console.log('\n');
    console.warn('-----  01-booleans.ts  -----');
    console.log('\n');
    var isSuperman = true;
    var isBatman = false;
    var isSpiderman = true;
    console.log({ isSuperman: isSuperman, isBatman: isBatman, isSpiderman: isSpiderman });
    isSuperman = true && false; //  false
    isBatman = true && true; //  true  
    isSpiderman = false && false; //  false   
    console.log('\n', { isSuperman: isSuperman, isBatman: isBatman, isSpiderman: isSpiderman });
    //isSuperman = ( isBatman) ? 'ABC' : 'XYZ';
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman: isSuperman });
})();
//# sourceMappingURL=01-booleans.js.map