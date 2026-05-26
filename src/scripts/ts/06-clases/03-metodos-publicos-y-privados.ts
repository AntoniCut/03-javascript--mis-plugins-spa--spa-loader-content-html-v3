/*
    *  -----------------------------------------------------------------------------------------------------------------  *
    *  -----  /03-metodos-publicos-y-privados.ts  --  /src/scripts/ts/06-clases/03-metodos-publicos-y-privados.ts  -----  *
    *  -----------------------------------------------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  03-metodos-publicos-y-privados.ts  -----');
    console.log('\n');


    /*
        -----------------------------------------
        -----  Métodos Públicos y Privados  -----
        -----------------------------------------
    */


    class Avenger {


        //  -----  Propiedad Estática  -----
        static avgAge: number = 35;
        
        //  -----  Método Estático  -----
        static getAvgAge() {
            return this.avgAge;
        }


        //  -----  Constructor  -----
        constructor( 
            private name: string, 
            public realName: string ,
            public team?: string, 
        ) {}


        //  -----  Método Público  -----
        public bio1() {
            return `${ this.name } (${ this.realName }) - ${ this.team ?? 'Sin Equipo' }`;
        }


        //  -----  Método Privado  -----
        private bio2() {
            return `${ this.name } (${ this.realName }) - ${ this.team ?? 'Sin Equipo' }!!!`;
        }

    }


    // //  -----  Instancia de la Clase  -----
    const antman: Avenger = new Avenger( 'Antman',  'Capitan' );


    //  -----  Mostrar en Consola  -----
    console.log('\nClase Avenger => ', {Avenger});
    console.log('\nAntman => ', {antman});

    console.log('\nBio publico de antman => ', antman.bio1() );
    //console.log('\nBio privado de antman => ', antman.bio2() ); //  Error: Property 'bio2' is private and only accessible within class 'Avenger'.
    console.log('\nEdad promedio de los avengers => ', Avenger.getAvgAge() );


})();
