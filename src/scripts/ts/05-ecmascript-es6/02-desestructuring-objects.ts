/*
    *  -----------------------------------------------------------------------------------------------------------------  *
    *  -----  /02-desestructuring-objects.ts  --  /src/scripts/ts/05-ecmascript-es6/02-desestructuring-objects.ts  -----  *
    *  -----------------------------------------------------------------------------------------------------------------  *
*/

(() => {


    //console.clear();
    console.log('\n');
    console.warn('-----  02-desestructuring-objects.ts  -----');
    console.log('\n');


    //  -----  Desestructuración de Objetos  -----
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123123,
    }


    //  -----  Desestructuración  -----
    const { nick, ironman, activo, poder, vision } = avengers;
    
    //  -----  salida por consola  -----
    console.log('nick :', nick);
    console.log('ironman :', ironman);
    console.log('activo :', activo);
    console.log('poder :', poder.toFixed(2));
    console.log('vision :', vision.toUpperCase());
    
    
    //  -----  Usando una funcion con parametros de tipo en linea  -----
    const printAvenger = (
    
        //  -----  crear tipo en linea  -----
        avengers: {
        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder: number,

    }) => {

        const { nick, ironman, activo, poder, vision } = avengers;
        console.log('\n\nprintAvenger nick :', nick);
        console.log('printAvenger ironman :', ironman);
        console.log('printAvenger activo :', activo);
        console.log('printAvenger poder :', poder.toFixed(2));
        console.log('printAvenger vision :', vision.toUpperCase());
    }

    printAvenger(avengers);


    //  -----  Usando un tipo  -----
    type Avenger = {
        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder: number,
    }

    //  -----  Usando un tipo ya creado  -----
    const printAvenger2 = ({ ironman, ...rest}: Avenger) => {

        console.log('\n\nprintAvenger2 ironman :', ironman);
        console.log('printAvenger2 resto de propiedades :', rest);
    }

    printAvenger2(avengers);


})();
