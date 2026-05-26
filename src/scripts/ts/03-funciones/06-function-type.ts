/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  /06-function-type.ts  --  /src/scripts/ts/03-funciones/06-function-type.ts  -----  *
    *  ----------------------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  06-function-type.ts  -----');
    console.log('\n');


    //  -----  Función que recibe dos números, los suma y retorna un número  -----
    const addNumbers = (a: number, b: number): number => a + b;

    //  -----  Función que recibe un string y retorna un string  -----
    const greet = (name: string): string => `Hola ${name}`;

    //  -----  Función que no retorna nada (void)  -----
    const saveTheWorld = (): string => 'El mundo esta salvado!';


    //  -----  Definición de un tipo de función  -----
    let myFunction;
    let myFunctionNumber: (x:number, y:number) => Number


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
