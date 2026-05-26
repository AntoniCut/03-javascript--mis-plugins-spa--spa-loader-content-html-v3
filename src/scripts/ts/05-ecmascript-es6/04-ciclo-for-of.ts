/*
    *  -------------------------------------------------------------------------------------------  *
    *  -----  /04-ciclo-for-of.ts  --  /src/scripts/ts/05-ecmascript-es6/04-ciclo-for-of.ts  -----  *
    *  -------------------------------------------------------------------------------------------  *
*/

(() => {


    //console.clear();
    console.log('\n');
    console.warn('-----  04-ciclo-for-of.ts  -----');
    console.log('\n');

    //  -----  tipo de dato personalizado  -----
    type Avenger = {
        name: string;
        weapon: string;
    }

    //  -----  objetos  -----
    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    };

    //  -----  otro objeto  -----
    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };

    //  -----  array de objetos  -----
    const avengers: Avenger[] = [ ironman, thor ];

    for ( const avenger of avengers ) {
        console.table({ avenger });
    }
   


})();
