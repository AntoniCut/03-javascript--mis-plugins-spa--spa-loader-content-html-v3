// @ts-nocheck
"use strict";
/*
    *  --------------------------------------------------------------------------  *
    *  -----  /01-objects.js  --  /src/scripts/js/04-objetos/01-objects.js  -----  *
    *  --------------------------------------------------------------------------  *
*/

(function () {
    console.clear();
    console.log('\n');
    console.warn('-----  01-objects.ts  -----');
    console.log('\n');
    //  -----  Inferir tipo  -----
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    };
    console.log(flash);
    //  -----  cambiamos valor de flash  -----
    flash = {
        name: 'Clark Kent',
        age: 30,
        powers: ['Super Fuerza'],
        //  El literal de objeto solo puede especificar propiedades conocidas 
        // y 'getNombre' no existe en el tipo '{ name: string; age: number; powers: string[]; }'
        getNombre: function () {
            return this.name;
        }
    };
    console.log(flash);
    //  -----  Definir tipo  -----
    var superman = {
        name: 'Superman',
        //age: 500,
        powers: ['Super Fuerza', 'Volar']
    };
    console.log(superman);
    //  -----  Agregar método  -----
    var ironMan = {
        name: 'Iron Man',
        age: 33,
        powers: ['Super Fuerza', 'Volar', 'Inteligencia'],
        getName: function () {
            return this.name;
        }
    };
    console.log('ironMan.getName() = ', ironMan.getName());
})();
//# sourceMappingURL=01-objects.js.map