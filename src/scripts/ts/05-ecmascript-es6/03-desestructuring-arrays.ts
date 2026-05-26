/*
    *  ---------------------------------------------------------------------------------------------------------------  *
    *  -----  /03-desestructuring-arrays.ts  --  /src/scripts/ts/05-ecmascript-es6/03-desestructuring-arrays.ts  -----  *
    *  ---------------------------------------------------------------------------------------------------------------  *
*/

(() => {


    //console.clear();
    console.log('\n');
    console.warn('-----  03-desestructuring-arrays.ts  -----');
    console.log('\n');


    //  -----  Desestructuración de Arrays - inferiendo el tipo  -----
    
    const avengersArr = ['Cap. América', 'Ironman', 'Hulk'];
    
    const ironman1 = avengersArr[1];
    console.log({ ironman1 });
    
    const [capitan2, ironman2, hulk2] = avengersArr;
    console.log({ capitan2, ironman2, hulk2 });

    const [, ironman3 ,] = avengersArr;
    console.log({ ironman3 });

    const [ , , hulk3 ] = avengersArr;
    console.log({ hulk3 });


    //  -----  Desestructuración de Arrays - con tipo explícito  -----

    const avengersArr2: string[] = ['Cap. América', 'Ironman', 'Hulk'];
    
    const [capitan4, ironman4, hulk4]: string[] = avengersArr2;
    console.log('\n', { capitan4, ironman4, hulk4 });


    //  -----  Desestructuración de Arrays - como una tupla  -----

    const avengersArr3: [string, boolean, number] = ['Cap. América', true, 100];
    
    const [capitan5, ironman5, hulk5]: [string, boolean, number] = avengersArr3;
    console.log('\n', { capitan5, ironman5, hulk5 });


})();
