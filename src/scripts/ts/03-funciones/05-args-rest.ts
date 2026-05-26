/*
    *  --------------------------------------------------------------------------------  *
    *  -----  /05-args-rest.ts  --  /src/scripts/ts/03-funciones/05-args-rest.ts  -----  *
    *  --------------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  05-args-rest.ts  -----');
    console.log('\n');


    //  -----  Rest parameters  -----
   const fullName = (firstName: string, ...restArgs: string[]): string => {

        return `${ firstName } ${ restArgs.join(' ') }`;    
    }

    //  -----  Usamos el operador rest para agrupar los argumentos restantes en un array  -----
    const sumerman = fullName('Clark', 'Joseph', 'Kent', 'Superman');

    console.log({ sumerman });


})();
