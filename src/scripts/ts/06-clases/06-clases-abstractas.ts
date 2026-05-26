/*
    *  ---------------------------------------------------------------------------------------------  *
    *  -----  /06-clases-abstractas.ts  --  /src/scripts/ts/06-clases/06-clases-abstractas.ts  -----  *
    *  ---------------------------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  06-clases-abstractas.ts  -----');
    console.log('\n');


    /*
        -------------------------------
        -----  Clases Abstractas  -----
        -------------------------------
    */


    //  -----  Clase Abstracta  -----
    abstract class Mutante {

        constructor(
            public name: string,
            public realName: string
        ) { }
        
    }


    //  -----  Clase que hereda de la Clase Abstracta  -----
    class Xmen extends Mutante {
    
        salvarMundo() {
            return 'Mundo Salvado!';
        }
    }

    class Villian extends Mutante {

        conquistarMundo() {
            return 'Mundo Conquistado!';
        }
    }

    //  -----  Instancia de la Clase Xmen que hereda de la Clase Abstracta  -----
    const wolverine = new Xmen('Wolverine', 'Logan');

    //  -----  Instancia de la Clase Villian que hereda de la Clase Abstracta  -----
    const magneto = new Villian('Magneto', 'Erik Lehnsherr');


    console.log('\nwolverine => ',  wolverine );
    console.log('magneto => ',  magneto );

    console.log('\nwolverine.salvarMundo() => ', wolverine.salvarMundo() );
    console.log('magneto.conquistarMundo() => ', magneto.conquistarMundo() );


    const printName = ( character: Mutante ) => {
        console.log(`\nEl personaje es: Nombre: ${ character.name } - Nombre real: ${ character.realName }`);
    }
    

    //  -----  Llamada a la Función y le pasamos al personaje wolverine  -----
    printName( wolverine );
    
    //  -----  Llamada a la Función y le pasamos al personaje magneto  -----
    printName( magneto );
    

})();
