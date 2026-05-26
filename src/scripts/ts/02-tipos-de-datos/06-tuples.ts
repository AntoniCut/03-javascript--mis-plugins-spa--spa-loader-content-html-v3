/*
    *  -------------------------------------------------------------------------------  *
    *  -----  /06-tuples.ts  --  /src/scripts/ts/02-tipos-de-datos/06-tuples.ts  -----  *
    *  -------------------------------------------------------------------------------  *
*/

(() => {

    console.log('\n');
    console.warn('-----  06-tuples.ts  -----');
    console.log('\n');

    //  -----  Tuplas  -----
    const hero: [string, number, boolean, string[]] = ['Dr. Strange', 100, true, ['Ironman']];

    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    hero[3] = ['Stark', 'Spiderman'];

    console.log({ hero });

})();
