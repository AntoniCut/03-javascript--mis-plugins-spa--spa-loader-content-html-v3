// @ts-nocheck
"use strict";
/*
    *  --------------------------------------------------------------------------------  *
    *  -----  /01-functions.js  --  /src/scripts/js/03-funciones/01-functions.js  -----  *
    *  --------------------------------------------------------------------------------  *
*/

(function () {
    console.clear();
    console.log('\n');
    console.warn('-----  01-functions.ts  -----');
    console.log('\n');
    //  -----  Función tradicional que retorna un string  -----
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    //  -----  Función de flecha que retorna un string  -----
    var activateBatSignal = function () {
        return 'Batiseñal activada';
    };
    //  -----  Uso de las funciones  -----
    console.log(typeof activateBatSignal);
    //  -----  Mostrar en consola el valor retornado por la función  -----
    console.log(returnName());
    console.log(activateBatSignal());
    console.log('\n');
    //  -----  Llamar a las funciones sin usar su valor retornado  -----
    returnName();
    activateBatSignal();
    //  -----  Almacenar en una variable el valor retornado por la función  -----
    var heroName = returnName();
    console.log({ heroName: heroName });
})();
//# sourceMappingURL=01-functions.js.map