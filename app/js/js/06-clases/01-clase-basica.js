// @ts-nocheck
"use strict";
/*
    *  -----------------------------------------------------------------------------------  *
    *  -----  /01-clase-basica.js  --  /src/scripts/js/06-clases/01-clase-basica.js  -----  *
    *  -----------------------------------------------------------------------------------  *
*/

(() => {
    console.clear();
    console.log('\n');
    console.warn('-----  01-clase-basica.ts  -----');
    console.log('\n');
    /*
        --------------------------
        -----  Clase Básica  -----
        --------------------------
    */
    class Avenger {
        //  -----  Constructor  -----
        constructor(nombre, team, realName) {
            this.nombre = nombre;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35; //  Propiedad estática
    //  -----  Instancia de la Clase  -----
    const antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
    //  -----  Mostrar en Consola  -----
    console.log('\nClase Avenger => ', Avenger);
    console.log('\nAntman => ', antman);
    console.log('Nombre de antman => ', antman['nombre']); //  Propiedad privada
    console.log('\nTeam de antman => ', antman.team);
    console.log('\nEdad promedio de antman: ', Avenger.avgAge); //  Propiedad estática
})();
//# sourceMappingURL=01-clase-basica.js.map