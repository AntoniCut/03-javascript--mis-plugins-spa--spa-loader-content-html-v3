// @ts-nocheck
"use strict";
/*
    *  ---------------------------------------------------------------------------------  *
    *  -----  /05-gets-y-sets.js  --  /src/scripts/js/06-clases/05-gets-y-sets.js  -----  *
    *  ---------------------------------------------------------------------------------  *
*/

(() => {
    console.clear();
    console.log('\n');
    console.warn('-----  05-gets-y-sets.ts  -----');
    console.log('\n');
    /*
        -------------------------
        -----  Gets y Sets  -----
        -------------------------
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
        //  -----  Getter  -----
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        //  -----  Setter  -----
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor de 3 caracteres');
            }
            this.name = name;
        }
    }
    //  -----  Instancia de la clase Xmen - Hereda de Avenger  -----
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log('Wolverine => ', wolverine);
    //  -----  Getter -----
    console.log('\nwolverine.fullName => ', wolverine.fullName);
    //  -----  Setter  -----
    wolverine.fullName = 'New name for Wolverine';
    //wolverine.fullName = 'Ne';
    console.log('wolverine.fullName (después de set) => ', wolverine.fullName);
})();
//# sourceMappingURL=05-gets-y-sets.js.map