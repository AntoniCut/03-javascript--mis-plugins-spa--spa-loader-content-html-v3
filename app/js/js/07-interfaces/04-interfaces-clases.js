// @ts-nocheck
"use strict";
/*
    *  -------------------------------------------------------------------------------------------------  *
    *  -----  /04-interfaces-clases.js  --  /src/scripts/js/07-interfaces/04-interfaces-clases.js  -----  *
    *  -------------------------------------------------------------------------------------------------  *
*/

(() => {
    console.clear();
    console.log('\n');
    console.warn('-----  04-interfaces-clases.ts  -----');
    console.log('\n');
    //  -----  Implementar interfaces en las clases  -----
    class Mutant {
        constructor(name, realName, age) {
            this.name = name;
            this.realName = realName;
            this.age = age;
            console.log('Constructor called!!');
        }
        mutantPower(id) {
            return `Mutant power with id: ${id} y name: ${this.name}`;
        }
    }
    const wolverine = new Mutant('Wolverine', 'Logan', 500);
    console.log('wolverine => ', wolverine);
    console.log('wolverine.mutantPower(1) => ', wolverine.mutantPower(1));
})();
//# sourceMappingURL=04-interfaces-clases.js.map