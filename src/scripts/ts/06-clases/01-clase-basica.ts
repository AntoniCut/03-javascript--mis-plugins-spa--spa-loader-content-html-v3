/*
    *  -----------------------------------------------------------------------------------  *
    *  -----  /01-clase-basica.ts  --  /src/scripts/ts/06-clases/01-clase-basica.ts  -----  *
    *  -----------------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  01-clase-basica.ts  -----');
    console.log('\n');


    /*
        --------------------------
        -----  Clase Básica  -----
        --------------------------
    */


    class Avenger {

        //  -----  Propiedades  -----
        private nombre: string;         //  Propiedad privada
        public team: string;            //  Propiedad pública
        public realName?: string;        //  Propiedad pública
        static avgAge: number = 35;     //  Propiedad estática


        //  -----  Constructor  -----
        constructor( nombre: string, team: string, realName?: string ) {
            this.nombre = nombre;
            this.team = team;
            this.realName = realName;
        }

    }


    //  -----  Instancia de la Clase  -----
    const antman: Avenger = new Avenger( 'Antman', 'Capitan', 'Scott Lang' );


    //  -----  Mostrar en Consola  -----
    console.log('\nClase Avenger => ', Avenger);
    console.log('\nAntman => ', antman);
    console.log('Nombre de antman => ', antman['nombre']);  //  Propiedad privada
    console.log('\nTeam de antman => ', antman.team);
    console.log('\nEdad promedio de antman: ', Avenger.avgAge);      //  Propiedad estática


})();
