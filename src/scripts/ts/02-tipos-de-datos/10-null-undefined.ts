/*
    *  -----------------------------------------------------------------------------------------------  *
    *  -----  /10-null-undefined.ts  --  /src/scripts/ts/02-tipos-de-datos/10-null-undefined.ts  -----  *
    *  -----------------------------------------------------------------------------------------------  *
*/

(() => {

    
    console.log('\n');
    console.warn('-----  10-null-undefined.ts  -----');
    console.log('\n');


    //  -----  null o undefined  -----
    //  -----  strictNullChecks = true  -----

    let nada: undefined = undefined;
    // nada = 123;                   //  Error: Type 'number' is not assignable to type 'undefined'.
    console.log('\n', { nada });
    
    let nadaNumber: number|undefined = undefined;
    // nadaNumber = 123;             //  OK
    // nadaNumber = null;            //  OK
    console.log('\n', { nadaNumber });

    let isActive: boolean|null = null;
    console.log('\n', { isActive });


})();
