/*
    *  ----------------------------------------------------------------------------------  *
    *  -----  /03-union-types.ts  --  /src/scripts/ts/04-objetos/03-union-types.ts  -----  *
    *  ----------------------------------------------------------------------------------  *
*/

(() => {

    
    console.clear();
    console.log('\n');
    console.warn('-----  03-union-types.ts  -----');
    console.log('\n');
    

    //  -----  Definir tipos personalizados para un objeto  -----
    type Hero = {
        name: string;
        age?: number; 
        powers: string[];
        getName?: () => string;
    }


    //  -----  Definir un tipo personalizado con union types  -----
    //  -----  y asignamos un string  -----------------------------
    let myCustomVariable: (number|string|Hero) = 'Antonio';

    console.log('\nmyCustomVariable:', myCustomVariable);
    console.log('typeof myCustomVariable:', typeof myCustomVariable);

    //  -----  Asignar un número a la variable  -----
    myCustomVariable = 20;

    console.log('\nmyCustomVariable:', myCustomVariable);
    console.log('typeof myCustomVariable:', typeof myCustomVariable);

    //  -----  Asignar un objeto de tipo Hero a la variable  -----
    myCustomVariable = {
        name: 'Superman',
        age: 50,
        powers: [ 'Super Fuerza', 'Volar' ],
        getName(this: Hero) {
            return this.name;
        }
    };

    console.log('\nmyCustomVariable:', myCustomVariable);
    console.log('typeof myCustomVariable:', typeof myCustomVariable);
    console.log('myCustomVariable.getName():', (myCustomVariable as Hero).getName?.() );


})();
