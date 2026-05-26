/*
    *  -------------------------------------------------------------------------------------------------------  *
    *  -----  /05-interfaces-funciones.ts  --  /src/scripts/ts/07-interfaces/05-interfaces-funciones.ts  -----  *
    *  -------------------------------------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  05-interfaces-funciones.ts  -----');
    console.log('\n');


    /*
        -------------------------------------------
        -----  Interfaces para las funciones  -----
        -------------------------------------------
    */

    //  -----  Definir interfaces  -----

    interface addTwoNumbers { 
        (a: number, b: number): number;
    }

    
    //  -----  Usar interfaces  -----
    let addNumbersFunction: addTwoNumbers;
    
    //  -----  Asignar la función  -----
    addNumbersFunction = (a: number, b: number): number => {
        return a + b;
    }

    //  -----  Usar la función  -----
    const result = addNumbersFunction(10, 20);
    
    //  -----  Mostrar el resultado  -----
    console.log({ result });

})();
