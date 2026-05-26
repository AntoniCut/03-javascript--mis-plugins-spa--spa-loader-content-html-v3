/*
    *  ---------------------------------------------------------------------------------  *
    *  -----  /03-strings.ts  --  /src/scripts/ts/02-tipos-de-datos/03-strings.ts  -----  *
    *  ---------------------------------------------------------------------------------  *
*/

(() => {


    console.log('\n');
    console.warn('-----  03-strings.ts  -----');
    console.log('\n');


    //  -----  3 formas de crear strings  -----
    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna's Verde";
    const volcanNegro: string = `Héroe: Volcán Negro`;
        
    //  -----  number  -----
    const abc: number = 123;
    
    console.log({ batman, linternaVerde, volcanNegro, abc });
    

    //  -----  Métodos de String  -----
    console.log('\n', batman.toUpperCase());
    console.log(` I'm ${batman}, ${abc.toString()} `);
    console.log( batman[11]?.toUpperCase() || 'No existe el héroe' );

    
})();
