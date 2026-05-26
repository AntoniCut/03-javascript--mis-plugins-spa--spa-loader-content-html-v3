/*
    *  -----------------------------------------------------------------------------------------------  *
    *  -----  /06-tarea-interfaces.ts  --  /src/scripts/ts/07-interfaces/06-tarea-interfaces.ts  -----  *
    *  -----------------------------------------------------------------------------------------------  *
*/

(() => {

  
    //  -----  Crear interfaz Auto  -----
    interface Auto {
        encender: boolean;
        velocidadMaxima: number;
        acelear(): void;
    }

    //  -----  Validamos el auto (el valor enviado por parametro)  -----
    const conducirBatimovil = (auto: Auto): void => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelear();
    }

    //  -----  Crear el objeto  -----
    const batimovil: Auto = {
        encender: false,
        velocidadMaxima: 0,
        acelear() {
            console.log("...... gogogo!!!");
        }
    }


    //  -----  Conducir el batimovil  -----
    console.log("\nConduciendo batimovil");
    conducirBatimovil(batimovil);


    //  -----  Cree una interfaz con que permita utilizar el siguiente objeto  -----
    //  -----  utilizando propiedades opcionales                               -----

    interface Guason {
        reir?: boolean;
        comer?: boolean;
        llorar?: boolean;
    }


    //  -----  Objeto guason  -----
    const guason = {
        reir: true,
        comer: true,
        llorar: false
    }

    //  -----  Función reir  -----
    const reir = (guason: Guason): void => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    }

    console.log("\nEl guason dice:");
    reir(guason);


    // Cree una interfaz para la siguiente funcion

    interface CiudadGoticaFunction {
        (ciudadanos: string[]): number;
    }

    const ciudadGotica: CiudadGoticaFunction = (ciudadanos: string[]): number => {
        return ciudadanos.length;
    }

    console.log("\nNúmero de ciudadanos en la ciudad gotica:", ciudadGotica(["1", "2", "3", "4", "5"]));


    //  -----  Cree una interfaz que obligue crear una clase  -----
    //  -----  con las siguientes propiedades y metodos       -----

    /*
      propiedades:
        - nombre
        - edad
        - sexo
        - estadoCivil
        - imprimirBio(): void // en consola una breve descripcion.
    */

    interface PersonaInterface {
        nombre: string;
        edad: number;
        sexo: string;
        estadoCivil: string;
        imprimirBio(): void;
    }

    //  -----  Clase Persona que implementa la interfaz PersonaInterface  -----
    class Persona implements PersonaInterface {
        
        nombre: string;
        edad: number;
        sexo: string;
        estadoCivil: string;

        constructor(nombre: string, edad: number, sexo: string, estadoCivil: string) {
            this.nombre = nombre;
            this.edad = edad;
            this.sexo = sexo;
            this.estadoCivil = estadoCivil;
        }

        public imprimirBio(): void {
            console.log(`${this.nombre}, ${this.edad} años, ${this.sexo}, estado civil: ${this.estadoCivil}`);
        }
    }

    //  -----  Crear una instancia de Persona y llamar a imprimirBio  -----
    const persona = new Persona("Juan Pérez", 30, "Masculino", "Soltero");
    
    console.log("\nBiografía de la persona:");
    persona.imprimirBio();


})();
