/*
    *  ---------------------------------------------------------------------------  *
    *  -----  /08-void.ts  --  /src/scripts/ts/02-tipos-de-datos/08-void.ts  -----  *
    *  ---------------------------------------------------------------------------  *
*/

(() => {

    console.log('\n');
    console.warn('-----  08-void.ts  -----');
    console.log('\n');


    //  -----  void  -----
    
    function callBatman(): void {

        return;
    }

    const a = callBatman();
    
    console.log({ a });


    const callSuperman = (): void => {

        return;
    }

    const b = callSuperman();

    console.log({ b });


})();