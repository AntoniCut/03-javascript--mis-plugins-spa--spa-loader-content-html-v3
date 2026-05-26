// @ts-nocheck
"use strict";
/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  /06-function-type.js  --  /src/scripts/js/03-funciones/06-function-type.js  -----  *
    *  ----------------------------------------------------------------------------------------  *
*/

(function () {
    console.clear();
    console.log('\n');
    console.warn('-----  06-function-type.ts  -----');
    console.log('\n');
    //  -----  Función que recibe dos números, los suma y retorna un número  -----
    var addNumbers = function (a, b) { return a + b; };
    //  -----  Función que recibe un string y retorna un string  -----
    var greet = function (name) { return "Hola ".concat(name); };
    //  -----  Función que no retorna nada (void)  -----
    var saveTheWorld = function () { return 'El mundo esta salvado!'; };
    //  -----  Definición de un tipo de función  -----
    var myFunction;
    var myFunctionNumber;
    //  -----  asigna un número a la variable  -----
    myFunction = 10;
    console.log('myFunction:', myFunction);
    //  -----  pasa la función por referencia  -----
    myFunctionNumber = addNumbers;
    console.log(myFunctionNumber);
    //  -----  invoca la función  -----
    console.log('myFunction(1, 2):', myFunctionNumber(1, 2));
    //  -----  invoca la función  -----
    myFunction = greet;
    console.log(myFunction('Antonio'));
    //  -----  invoca la función  -----
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
//# sourceMappingURL=06-function-type.js.map