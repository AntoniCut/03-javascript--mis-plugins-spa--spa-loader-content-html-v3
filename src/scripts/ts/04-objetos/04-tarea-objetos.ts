/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  /04-tarea-objetos.ts  --  /src/scripts/ts/04-objetos/04-tarea-objetos.ts  -----  *
    *  --------------------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  04-tarea-objetos.ts  -----');
    console.log('\n');


    //  -----  Definir tipos personalizados para un objeto  -----
    type Carro = {
        carroceria: string;
        modelo: string;
        antibalas: boolean;
        pasajeros: number;
        disparar?: () => void; // El metodo disparar es opcional
    }

    //  -----  Crear el objeto  -----
    const batimovil: Carro = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };

    //  -----  Otro objeto  -----
    const bumblebee: Carro = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() { // El metodo disparar es opcional
            console.log("Disparando");
        }
    };

    //  -----  Imprimir en consola  -----
    console.log('batimovil:', batimovil);
    console.log('bumblebee:', bumblebee);
    console.log('bumblebee.disparar():', bumblebee.disparar?.());



    //  -----  Definir un tipo personalizado para un objeto  -----
    type Villano = {
        nombre: string;
        edad: number | undefined;
        mutante: boolean;
    }

    //  -----  Villanos debe de ser un arreglo de objetos personalizados  -----
    const villanos: Villano[] = [
        {
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }
    ];

    //  -----  Imprimir en consola  -----
    console.log('\nvillanos:', villanos);


    //  -----  Multiples tipos  ----------------------------------------------
    //  -----  cree dos tipos, uno para charles y otro para apocalipsis  -----


    //    -----  Tipo Charles  -----
    type Charles = {
        poder: string;
        estatura: number;
    }

    //  -----  variable charles  -----
    const charles: Charles = {
        poder: "psiquico",
        estatura: 1.78
    };


    //    -----  Tipo Apocalipsis  -----
    type Apocalipsis = {
        lider: boolean;
        miembros: string[];
    }
  
    //  -----  Variable apocalipsis  -----
    const apocalipsis: Apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    }

    
    //  -----  Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)  -----
    let mystique: Charles | Apocalipsis;

    //  -----  Asignar a mystique el tipo charles  -----
    mystique = charles;
    console.log('\nmystique como charles:', mystique);
    

    //  -----  Asignar a mystique el tipo apocalipsis  -----
    mystique = apocalipsis;
    console.log('mystique como apocalipsis:', mystique);



})();
