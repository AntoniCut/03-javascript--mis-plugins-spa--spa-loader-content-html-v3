// @ts-nocheck
"use strict";
/*
    *  -------------------------------------------------------------------------------------------  *
    *  -----  /04-ciclo-for-of.js  --  /src/scripts/js/05-ecmascript-es6/04-ciclo-for-of.js  -----  *
    *  -------------------------------------------------------------------------------------------  *
*/

(() => {
    //console.clear();
    console.log('\n');
    console.warn('-----  04-ciclo-for-of.ts  -----');
    console.log('\n');
    //  -----  objetos  -----
    const ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    };
    //  -----  otro objeto  -----
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    //  -----  array de objetos  -----
    const avengers = [ironman, thor];
    for (const avenger of avengers) {
        console.table({ avenger });
    }
})();
//# sourceMappingURL=04-ciclo-for-of.js.map