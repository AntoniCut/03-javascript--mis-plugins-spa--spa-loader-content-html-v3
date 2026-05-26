/*
    *  -------------------------------------------------------------------------  *
    *  -----  /04-any.ts  --  /src/scripts/ts/02-tipos-de-datos/04-any.ts  -----  *
    *  -------------------------------------------------------------------------  *
*/

(() => {


    console.log('\n');
    console.warn('-----  04-any.ts  -----');
    console.log('\n');

    //  -----  any  -----
    let avenger: any = 123;
    
    //  -----  boolean  -----
    const exist = false;

    //  -----  string  -----
    let power: string = 'power';

    console.log({ avenger, exist, power });

    //  -----  casteo, pasar a string  -----
    //console.log('(avenger as string).charAt(0)', (avenger as string).charAt(0));
    console.log('String(avenger).charAt(0)', String(avenger).charAt(0));


    //  -----  cambia a string  -----
    avenger = 'Dr. Strange';
    console.log({ avenger });

    //  -----  cambia a number  -----
    avenger = 150.235478;

    //  -----  casteo, pasar a number  -----
    console.log({ avenger: <number>avenger.toFixed(2) });

    console.log({ power: power.charAt(2) });


})();
