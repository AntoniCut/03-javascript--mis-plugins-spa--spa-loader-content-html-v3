// @ts-nocheck
"use strict";
/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  /04-tarea-objetos.js  --  /src/scripts/js/04-objetos/04-tarea-objetos.js  -----  *
    *  --------------------------------------------------------------------------------------  *
*/

(function () {
    var _a;
    console.clear();
    console.log('\n');
    console.warn('-----  04-tarea-objetos.ts  -----');
    console.log('\n');
    //  -----  Crear el objeto  -----
    var batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    //  -----  Otro objeto  -----
    var bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log("Disparando");
        }
    };
    //  -----  Imprimir en consola  -----
    console.log('batimovil:', batimovil);
    console.log('bumblebee:', bumblebee);
    console.log('bumblebee.disparar():', (_a = bumblebee.disparar) === null || _a === void 0 ? void 0 : _a.call(bumblebee));
    //  -----  Villanos debe de ser un arreglo de objetos personalizados  -----
    var villanos = [
        {
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }
    ];
    //  -----  Imprimir en consola  -----
    console.log('\nvillanos:', villanos);
    //  -----  variable charles  -----
    var charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    //  -----  Variable apocalipsis  -----
    var apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    //  -----  Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)  -----
    var mystique;
    //  -----  Asignar a mystique el tipo charles  -----
    mystique = charles;
    console.log('\nmystique como charles:', mystique);
    //  -----  Asignar a mystique el tipo apocalipsis  -----
    mystique = apocalipsis;
    console.log('mystique como apocalipsis:', mystique);
})();
//# sourceMappingURL=04-tarea-objetos.js.map