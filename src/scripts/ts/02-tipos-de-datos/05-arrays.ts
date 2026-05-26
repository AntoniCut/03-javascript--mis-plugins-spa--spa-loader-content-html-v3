/*
    *  -------------------------------------------------------------------------------  *
    *  -----  /05-arrays.ts  --  /src/scripts/ts/02-tipos-de-datos/05-arrays.ts  -----  *
    *  -------------------------------------------------------------------------------  *
*/

(() => {


    console.log('\n');
    console.warn('-----  05-arrays.ts  -----');
    console.log('\n');

    //  -----  Arrays de String, Numbers, Boolean  -----
    const numbers1 = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10, true];
    
    numbers1.push(false);
    console.log({ numbers1 });


    //  -----  Array de Numbers  -----
    const numbers2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    numbers2.push(11);
    console.log('\n', { numbers2 });

    
    //  -----  Array de Strings  -----
    const villains = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    console.log('\n', { villains });
    console.log('\n');
    
    villains.forEach(villain => console.log(villain.toUpperCase()));

    
})();
