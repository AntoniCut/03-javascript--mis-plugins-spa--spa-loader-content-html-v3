// @ts-nocheck
"use strict";
/*
    *  -----------------------------------------------------------------------------------------------------------------  *
    *  -----  /03-metodos-publicos-y-privados.js  --  /src/scripts/js/06-clases/03-metodos-publicos-y-privados.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------  *
*/

(() => {
    console.clear();
    console.log('\n');
    console.warn('-----  03-metodos-publicos-y-privados.ts  -----');
    console.log('\n');
    /*
        -----------------------------------------
        -----  Métodos Públicos y Privados  -----
        -----------------------------------------
    */
    class Avenger {
        //  -----  Método Estático  -----
        static getAvgAge() {
            return this.avgAge;
        }
        //  -----  Constructor  -----
        constructor(name, realName, team) {
            this.name = name;
            this.realName = realName;
            this.team = team;
        }
        //  -----  Método Público  -----
        bio1() {
            var _a;
            return `${this.name} (${this.realName}) - ${(_a = this.team) !== null && _a !== void 0 ? _a : 'Sin Equipo'}`;
        }
        //  -----  Método Privado  -----
        bio2() {
            var _a;
            return `${this.name} (${this.realName}) - ${(_a = this.team) !== null && _a !== void 0 ? _a : 'Sin Equipo'}!!!`;
        }
    }
    //  -----  Propiedad Estática  -----
    Avenger.avgAge = 35;
    // //  -----  Instancia de la Clase  -----
    const antman = new Avenger('Antman', 'Capitan');
    //  -----  Mostrar en Consola  -----
    console.log('\nClase Avenger => ', { Avenger });
    console.log('\nAntman => ', { antman });
    console.log('\nBio publico de antman => ', antman.bio1());
    //console.log('\nBio privado de antman => ', antman.bio2() ); //  Error: Property 'bio2' is private and only accessible within class 'Avenger'.
    console.log('\nEdad promedio de los avengers => ', Avenger.getAvgAge());
})();
//# sourceMappingURL=03-metodos-publicos-y-privados.js.map