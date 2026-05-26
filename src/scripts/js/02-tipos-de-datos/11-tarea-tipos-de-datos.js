// @ts-nocheck
"use strict";
/*
    *  -----------------------------------------------------------------------------------------------------------  *
    *  -----  /11-tarea-tipos-de-datos.js  --  /src/scripts/js/02-tipos-de-datos/11-tarea-tipos-de-datos.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------  *
*/

(function () {
    console.log('\n');
    console.warn('-----  11-tarea-tipos-de-datos.ts  -----');
    console.log('\n');
    //  -----  String  -----
    var batman = 'Bruce';
    var superman = 'Clark';
    console.log('\n', { batman: batman, superman: superman });
    //  -----  Booleanos  -----
    var existe = false;
    console.log('\n', { existe: existe });
    //  -----  Tuplas  -----
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    console.log('\n', { parejaHeroes: parejaHeroes, villano: villano });
    //  -----  Arreglos  -----
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    console.log('\n', { aliados: aliados });
    //  -----  Enumeraciones  -----
    var Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["Acuaman"] = 0] = "Acuaman";
        Fuerza[Fuerza["Batman"] = 1] = "Batman";
        Fuerza[Fuerza["Flash"] = 5] = "Flash";
        Fuerza[Fuerza["Superman"] = 100] = "Superman";
    })(Fuerza || (Fuerza = {}));
    console.log('Fuerza', Fuerza);
    console.log('Fuerza', { Fuerza: Fuerza });
    console.log('\nFuerza de Acuaman:', Fuerza.Acuaman);
    console.log('Fuerza de Batman:', Fuerza.Batman);
    console.log('Fuerza de Flash:', Fuerza.Flash);
    console.log('Fuerza de Superman:', Fuerza.Superman);
    var fuerzaAcuaman = Fuerza.Acuaman;
    var fuerzaBatman = Fuerza.Batman;
    var fuerzaFlash = Fuerza.Flash;
    var fuerzaSuperman = Fuerza.Superman;
    console.log('\n', { fuerzaAcuaman: fuerzaAcuaman, fuerzaBatman: fuerzaBatman, fuerzaFlash: fuerzaFlash, fuerzaSuperman: fuerzaSuperman });
    //  -----  Retorno de funciones  -----
    function activar_batiseñal() {
        return 'activada';
    }
    console.log('\n', activar_batiseñal());
    function pedir_ayuda() {
        console.log('\nAuxilio!!!');
    }
    pedir_ayuda();
    //  -----  Aserciones de Tipo  -  Casteo  -----
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log('\n', { largoDelPoder: largoDelPoder });
})();
//# sourceMappingURL=11-tarea-tipos-de-datos.js.map