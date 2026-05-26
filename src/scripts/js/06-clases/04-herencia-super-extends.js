// @ts-nocheck
"use strict";
/*
    *  -------------------------------------------------------------------------------------------------------  *
    *  -----  /04-herencia-super-extends.js  --  /src/scripts/js/06-clases/04-herencia-super-extends.js  -----  *
    *  -------------------------------------------------------------------------------------------------------  *
*/

(() => {
    console.clear();
    console.log('\n');
    console.warn('-----  04-herencia-super-extends.ts  -----');
    console.log('\n');
    /*
        ---------------------------------------
        -----  Herencia, Super y Extends  -----
        ---------------------------------------
    */
    //  -----  Clase Padre  -----
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado!!!');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    //  -----  Extends: hereda de otra clase  -----
    class Xmen extends Avenger {
        constructor(name, realName, isMutant = true) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado!!!');
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
    //  -----  Instancia de la clase Xmen - Hereda de Avenger  -----
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log('Wolverine => ', wolverine);
    //  -----  Llamando método que usa el método de la clase padre  -----
    wolverine.getFullNameDesdeXmen();
})();
//# sourceMappingURL=04-herencia-super-extends.js.map