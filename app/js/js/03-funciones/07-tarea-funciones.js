// @ts-nocheck
"use strict";
/*
    *  --------------------------------------------------------------------------------------------  *
    *  -----  /07-tarea-funciones.js  --  /src/scripts/js/03-funciones/07-tarea-funciones.js  -----  *
    *  --------------------------------------------------------------------------------------------  *
*/

(function () {
    console.clear();
    console.log('\n');
    console.warn('-----  07-tarea-funciones.ts  -----');
    console.log('\n');
    //  -----  Funciones Básicas  -----
    var sumar = function (a, b) {
        return a + b;
    };
    console.log('sumar(10, 20): ', sumar(10, 20));
    var contar = function (heroes) {
        return heroes.length;
    };
    var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    //  -----  Parametros por defecto  -----
    var llamarBatman = function (llamar) {
        if (llamar === void 0) { llamar = false; }
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    //  -----  Rest?  -----
    var unirheroes = function () {
        var personas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            personas[_i] = arguments[_i];
        }
        return personas.join(", ");
    };
    console.log(unirheroes("Capitan America", "Ironman", "Thor", "Hulk"));
    //  -----  Tipo funcion  -----
    var noHaceNada = function (numero, texto, booleano, arreglo) {
        // Esta funcion no hace nada
    };
    // Crear el tipo de funcion que acepte la funcion "noHaceNada"
    var noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
//# sourceMappingURL=07-tarea-funciones.js.map