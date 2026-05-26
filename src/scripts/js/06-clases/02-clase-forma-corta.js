// @ts-nocheck
"use strict";
/*
    *  ---------------------------------------------------------------------------------------------  *
    *  -----  /02-clase-forma-corta.js  --  /src/scripts/js/06-clases/02-clase-forma-corta.js  -----  *
    *  ---------------------------------------------------------------------------------------------  *
*/

(() => {
    console.clear();
    console.log('\n');
    console.warn('-----  02-clase-forma-corta.ts  -----');
    console.log('\n');
    /*
        -------------------------------
        -----  Clase Forma Corta  -----
        -------------------------------
    */
    class Avenger {
        //  -----  Constructor  -----
        constructor(nombre, realName, team) {
            this.nombre = nombre;
            this.realName = realName;
            this.team = team;
        }
    }
    //  -----  Propiedad Estática  -----
    Avenger.avgAge = 35;
    //  -----  Instancia de la Clase  -----
    const antman = new Avenger('Antman', 'Capitan');
    //  -----  Mostrar en Consola  -----
    console.log('\nClase Avenger => ', { Avenger });
    console.log('\nAntman => ', { antman });
    console.log('\nNombre de antman => ', antman['nombre']); //  Propiedad Privada
    console.log('\nNombre real de antman => ', antman.realName);
    console.log('\nTeam de antman => ', antman.team); //  Propiedad Opcional
    console.log('\nEdad promedio de antman: ', Avenger.avgAge); //  Propiedad estática
})();
//# sourceMappingURL=02-clase-forma-corta.js.map