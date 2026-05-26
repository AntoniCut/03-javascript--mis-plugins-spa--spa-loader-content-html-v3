/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  /04-args-default.ts  --  /src/scripts/ts/03-funciones/04-args-default.ts  -----  *
    *  --------------------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  04-args-default.ts  -----');
    console.log('\n');


    //  -----  Función con argumentos opcionales  -----
    const fullName = (firsName: string, lastName?: string, upper: boolean = false): string => {

        if (upper) 
            return `${firsName.toUpperCase()} ${lastName || 'NO LAST NAME' }`.toUpperCase();
        
        else
            return `${firsName} ${lastName || 'No last name' }`;
    }

    //  -----  todos los argumentos  -----
    const name1 = fullName('Tony', 'Stark');    
    
    //  -----  argumento opcional omitido  -----
    const name2 = fullName('Tony');
    
    //  -----  argumento opcional con valor por defecto  -----
    const name3 = fullName('Steve', 'Rogers', true);
    
    console.log({ name1, name2, name3 });

    //  -----  Función con argumentos opcionales  -----
    const sumar = (a: number, b?: number): number => a + (b || 0);
    console.log( sumar(1, 2) );


})();
