/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  /02-objects-types.ts  --  /src/scripts/ts/04-objetos/02-objects-types.ts  -----  *
    *  --------------------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  02-objects-types.ts  -----');
    console.log('\n');


    //  -----  Definir tipos personalizados para un objeto  -----
    type Hero = {
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
