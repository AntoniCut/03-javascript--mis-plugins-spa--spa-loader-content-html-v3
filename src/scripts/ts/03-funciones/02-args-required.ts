/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  /02-args-required.ts  --  /src/scripts/ts/03-funciones/02-args-required.ts  -----  *
    *  ----------------------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  02-args-required.ts  -----');
    console.log('\n');


    //  -----  Función con argumentos requeridos  -----
    const fullName = (firsName: string, lastName: string|boolean): string => {

        return `${firsName} ${lastName}`;
    }

    //  -----  Llamadas a la función  -----
    const name1 = fullName('Tony', 'Stark');    
    const name2 = fullName('Tony', true);
    
    console.log({ name1, name2 });


})();
