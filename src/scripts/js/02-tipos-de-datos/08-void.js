// @ts-nocheck
"use strict";
/*
    *  ---------------------------------------------------------------------------  *
    *  -----  /08-void.js  --  /src/scripts/js/02-tipos-de-datos/08-void.js  -----  *
    *  ---------------------------------------------------------------------------  *
*/

(function () {
    console.log('\n');
    console.warn('-----  08-void.ts  -----');
    console.log('\n');
    //  -----  void  -----
    function callBatman() {
        return;
    }
    var a = callBatman();
    console.log({ a: a });
    var callSuperman = function () {
        return;
    };
    var b = callSuperman();
    console.log({ b: b });
})();
//# sourceMappingURL=08-void.js.map