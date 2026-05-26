/*
    *  ---------------------------------------------------------------------------------------------  *
    *  -----  /02-clase-forma-corta.ts  --  /src/scripts/ts/06-clases/02-clase-forma-corta.ts  -----  *
    *  ---------------------------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  02-clase-forma-corta.ts  -----');
    console.log('\n');


    /*
        -------------------------------
        -----  Clase Forma Corta  -----
        -------------------------------
    */


    class Avenger {


        //  -----  Propiedad Estática  -----
        static avgAge: number = 35;


        //  -----  Constructor  -----
        constructor( 
            private nombre: string, 
            public realName: string ,
            public team?: string, 
        ) {}

    }


    //  -----  Instancia de la Clase  -----
    const antman: Avenger = new Avenger( 'Antman',  'Capitan' );


    //  -----  Mostrar en Consola  -----
    console.log('\nClase Avenger => ', {Avenger});
    console.log('\nAntman => ', {antman});
    console.log('\nNombre de antman => ', antman['nombre']);         //  Propiedad Privada
    console.log('\nNombre real de antman => ', antman.realName);
    console.log('\nTeam de antman => ', antman.team);                //  Propiedad Opcional
    console.log('\nEdad promedio de antman: ', Avenger.avgAge);      //  Propiedad estática


})();
