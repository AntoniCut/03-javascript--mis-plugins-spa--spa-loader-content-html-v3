/*
    *  ---------------------------------------------------------------------------------------------------  *
    *  -----  /01-interfaces-basicas.ts  --  /src/scripts/ts/07-interfaces/01-interfaces-basicas.ts  -----  *
    *  ---------------------------------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  01-interfaces-basicas.ts  -----');
    console.log('\n');


    /*
        --------------------------------
        -----  Interfaces Básicas  -----
        --------------------------------
    */

    
    //  -----  Definir una interfaz básica  -----
    interface Hero {
        name: string, 
        age?: number, 
        powers: string[],
        getName?: () => string
    }


    //  -----  Usar el tipo personalizado  -----
    let flash: Hero = {
        name: 'Barry Allen',
        age: 25,
        powers: [ 'Super Velocidad', 'Viajar en el tiempo' ]
    }   

    console.log( flash );

    
    //  -----  Otro objeto del mismo tipo  -----
    let superman: Hero = {
        name: 'Superman',
        age: 50,
        powers: [ 'Super Fuerza', 'Volar' ],
        getName() {
            return this.name;
        }
    }   

    console.log('superman.getName() = ', superman.getName?.());
    

})();
