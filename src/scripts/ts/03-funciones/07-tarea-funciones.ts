/*
    *  --------------------------------------------------------------------------------------------  *
    *  -----  /07-tarea-funciones.ts  --  /src/scripts/ts/03-funciones/07-tarea-funciones.ts  -----  *
    *  --------------------------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  07-tarea-funciones.ts  -----');
    console.log('\n');



    //  -----  Funciones Básicas  -----
    
    const sumar = (a: number, b: number): number => {
        return a + b;
    }

    console.log('sumar(10, 20): ', sumar(10, 20));

    const contar = (heroes: string[]): number => {
        return heroes.length;
    }

    const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    
    contar(superHeroes);


    //  -----  Parametros por defecto  -----
    const llamarBatman = (llamar: boolean = false): void => {
        
        if (llamar) {
            console.log("Batiseñal activada");
        }
    }

    llamarBatman();


    //  -----  Rest?  -----
    const unirheroes = ( ...personas: string[]): string => {
        return personas.join(", ");
    }

    console.log(unirheroes("Capitan America", "Ironman", "Thor", "Hulk"));


    //  -----  Tipo funcion  -----
    const noHaceNada = (numero: number, texto: string, booleano: boolean, arreglo: string[]): void => {
        
        // Esta funcion no hace nada
     }


    // Crear el tipo de funcion que acepte la funcion "noHaceNada"
    let noHaceNadaTampoco: (n:number, s:string, b:boolean, a:string[]) => void;
        
    noHaceNadaTampoco = noHaceNada;


})();
