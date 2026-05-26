/*
    *  -------------------------------------------------------------------------------------------------------  *
    *  -----  /07-constructores-privados.ts  --  /src/scripts/ts/06-clases/07-constructores-privados.ts  -----  *
    *  -------------------------------------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  07-constructores-privados.ts  -----');
    console.log('\n');


    /*
        ------------------------------------
        -----  Constructores Privados  -----
        ------------------------------------
    */


    //  -----  Constructores privados  -----
    class Apocalipsis {


        //static instance: Apocalipsis;


        private constructor( public name: string ) { }


        static callApocalipsis(name: string): Apocalipsis {
            
            if (!Apocalipsis.instance) 
                Apocalipsis.instance = new Apocalipsis(name);
            
            return Apocalipsis.instance;
        }

        changeName( newName: string ): void {
            this.name = newName;
        }

    }


    //  -----  Patrón Singleton  -----
    const apocalipsis1 = Apocalipsis.callApocalipsis('Soy Apocalipsis1... el Único');
    const apocalipsis2 = Apocalipsis.callApocalipsis('Soy Apocalipsis2... el Único');
    const apocalipsis3 = Apocalipsis.callApocalipsis('Soy Apocalipsis3... el Único');
    
    const apocalipsis4 = Apocalipsis.callApocalipsis('Soy Apocalipsis4... el Único'); // Error: El constructor de la clase 'Apocalipsis' es privado y solo se puede invocar dentro de la clase.
    apocalipsis4.changeName('Soy Apocalipsis4 con nuevo nombre');


    console.log({ apocalipsis1, apocalipsis2, apocalipsis3, apocalipsis4 });



})();
