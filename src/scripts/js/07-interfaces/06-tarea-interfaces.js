// @ts-nocheck
"use strict";
/*
    *  -----------------------------------------------------------------------------------------------  *
    *  -----  /06-tarea-interfaces.js  --  /src/scripts/js/07-interfaces/06-tarea-interfaces.js  -----  *
    *  -----------------------------------------------------------------------------------------------  *
*/

(() => {
    //  -----  Validamos el auto (el valor enviado por parametro)  -----
    const conducirBatimovil = (auto) => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelear();
    };
    //  -----  Crear el objeto  -----
    const batimovil = {
        encender: false,
        velocidadMaxima: 0,
        acelear() {
            console.log("...... gogogo!!!");
        }
    };
    //  -----  Conducir el batimovil  -----
    console.log("\nConduciendo batimovil");
    conducirBatimovil(batimovil);
    //  -----  Objeto guason  -----
    const guason = {
        reir: true,
        comer: true,
        llorar: false
    };
    //  -----  Función reir  -----
    const reir = (guason) => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    };
    console.log("\nEl guason dice:");
    reir(guason);
    const ciudadGotica = (ciudadanos) => {
        return ciudadanos.length;
    };
    console.log("\nNúmero de ciudadanos en la ciudad gotica:", ciudadGotica(["1", "2", "3", "4", "5"]));
    //  -----  Clase Persona que implementa la interfaz PersonaInterface  -----
    class Persona {
        constructor(nombre, edad, sexo, estadoCivil) {
            this.nombre = nombre;
            this.edad = edad;
            this.sexo = sexo;
            this.estadoCivil = estadoCivil;
        }
        imprimirBio() {
            console.log(`${this.nombre}, ${this.edad} años, ${this.sexo}, estado civil: ${this.estadoCivil}`);
        }
    }
    //  -----  Crear una instancia de Persona y llamar a imprimirBio  -----
    const persona = new Persona("Juan Pérez", 30, "Masculino", "Soltero");
    console.log("\nBiografía de la persona:");
    persona.imprimirBio();
})();
//# sourceMappingURL=06-tarea-interfaces.js.map