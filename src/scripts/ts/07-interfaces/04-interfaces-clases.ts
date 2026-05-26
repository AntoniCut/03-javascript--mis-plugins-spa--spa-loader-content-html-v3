/*
    *  -------------------------------------------------------------------------------------------------  *
    *  -----  /04-interfaces-clases.ts  --  /src/scripts/ts/07-interfaces/04-interfaces-clases.ts  -----  *
    *  -------------------------------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  04-interfaces-clases.ts  -----');
    console.log('\n');


    /*
        --------------------------------------
        -----  Clases en las Interfaces  -----
        --------------------------------------
    */

    //  -----  Definir interfaces  -----

    interface Xmen {  
        name: string;
        realName: string;
        mutantPower(id: number): string;
    }

    interface Human {
        age: number;
    }

    
    //  -----  Implementar interfaces en las clases  -----
    class Mutant implements Xmen, Human {
        
        constructor(
            public name: string,
            public realName: string,
            public age: number
        ) {
            console.log('Constructor called!!');
        }

        mutantPower(id: number): string {
            return `Mutant power with id: ${id} y name: ${ this.name }`;
        }
    }
    
    const wolverine = new Mutant('Wolverine', 'Logan', 500);
    console.log('wolverine => ', wolverine);
    console.log('wolverine.mutantPower(1) => ', wolverine.mutantPower(1));




})();
