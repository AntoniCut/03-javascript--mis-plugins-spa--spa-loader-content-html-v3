/*
    *  --------------------------------------------------------------------------  *
    *  -----  /01-objects.ts  --  /src/scripts/ts/04-objetos/01-objects.ts  -----  *
    *  --------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  01-objects.ts  -----');
    console.log('\n');


    //  -----  Inferir tipo  -----
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [ 'Super Velocidad', 'Viajar en el tiempo' ]
    }

    console.log( flash );


    //  -----  cambiamos valor de flash  -----
    flash = {
        name: 'Clark Kent',
        age: 30,
        powers: [ 'Super Fuerza' ],
        
        //  El literal de objeto solo puede especificar propiedades conocidas 
        // y 'getNombre' no existe en el tipo '{ name: string; age: number; powers: string[]; }'
                
        getNombre() {
            return this.name;
        }
    }

    console.log( flash );


    //  -----  Definir tipo  -----
    let superman: {
        name: string, 
        age?: number, 
        powers: string[]
    } = {
        name: 'Superman',
        //age: 500,
        powers: [ 'Super Fuerza', 'Volar' ]
    }   

    console.log( superman );


    //  -----  Agregar método  -----
    let ironMan: {
        name: string, 
        age?: number, 
        powers: string[],
        getName: () => string
    } = {
        name: 'Iron Man',
        age: 33,
        powers: [ 'Super Fuerza', 'Volar', 'Inteligencia' ],
        getName() {
            return this.name;
        }
    }

    console.log('ironMan.getName() = ', ironMan.getName() );


})();
