/*
    *  -----------------------------------------------------------------------------------------------------------  *
    *  -----  /11-tarea-tipos-de-datos.ts  --  /src/scripts/ts/02-tipos-de-datos/11-tarea-tipos-de-datos.ts  -----  *
    *  -----------------------------------------------------------------------------------------------------------  *
*/

(() => {


    console.log('\n');
    console.warn('-----  11-tarea-tipos-de-datos.ts  -----');
    console.log('\n');


    //  -----  String  -----
    const batman: string = 'Bruce';
    const superman: string = 'Clark';

    console.log('\n', { batman, superman });


    //  -----  Booleanos  -----
    const existe: boolean = false;

    console.log('\n', { existe });


    //  -----  Tuplas  -----
    const parejaHeroes: [string, string] = [batman, superman];
    const villano: [string, number, boolean] = ['Lex Lutor', 5, true];

    console.log('\n', { parejaHeroes, villano });


    //  -----  Arreglos  -----
    const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

    console.log('\n', { aliados });


    //  -----  Enumeraciones  -----
    
    enum Fuerza {
        Acuaman = 0,
        Batman = 1,
        Flash = 5,
        Superman = 100,
    }

    console.log('Fuerza', Fuerza);
    console.log('Fuerza', {Fuerza});

    console.log('\nFuerza de Acuaman:', Fuerza.Acuaman);
    console.log('Fuerza de Batman:', Fuerza.Batman);
    console.log('Fuerza de Flash:', Fuerza.Flash);
    console.log('Fuerza de Superman:', Fuerza.Superman);


    const fuerzaAcuaman: Fuerza = Fuerza.Acuaman;
    const fuerzaBatman: Fuerza = Fuerza.Batman;
    const fuerzaFlash: Fuerza = Fuerza.Flash;
    const fuerzaSuperman: Fuerza = Fuerza.Superman;

    console.log('\n', { fuerzaAcuaman, fuerzaBatman, fuerzaFlash, fuerzaSuperman });

    
    //  -----  Retorno de funciones  -----
    function activar_batiseñal(): string {
        return 'activada';
    }

    console.log('\n', activar_batiseñal());

    function pedir_ayuda(): void {
        console.log('\nAuxilio!!!');
    }

    pedir_ayuda();


    //  -----  Aserciones de Tipo  -  Casteo  -----
    const poder: any = '100';
    const largoDelPoder: number = <number>poder.length;
    
    console.log('\n', {largoDelPoder});
    


})();
