// @ts-nocheck
"use strict";
/*
    *  -------------------------------------------------------------------------  *
    *  -----  /04-any.js  --  /src/scripts/js/02-tipos-de-datos/04-any.js  -----  *
    *  -------------------------------------------------------------------------  *
*/

(function () {
    console.log('\n');
    console.warn('-----  04-any.ts  -----');
    console.log('\n');
    //  -----  any  -----
    var avenger = 123;
    //  -----  boolean  -----
    var exist = false;
    //  -----  string  -----
    var power = 'power';
    console.log({ avenger: avenger, exist: exist, power: power });
    //  -----  casteo, pasar a string  -----
    //console.log('(avenger as string).charAt(0)', (avenger as string).charAt(0));
    console.log('String(avenger).charAt(0)', String(avenger).charAt(0));
    //  -----  cambia a string  -----
    avenger = 'Dr. Strange';
    console.log({ avenger: avenger });
    //  -----  cambia a number  -----
    avenger = 150.235478;
    //  -----  casteo, pasar a number  -----
    console.log({ avenger: avenger.toFixed(2) });
    console.log({ power: power.charAt(2) });
})();
//# sourceMappingURL=04-any.js.map