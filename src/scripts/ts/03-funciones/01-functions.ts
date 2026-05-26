/*
    *  --------------------------------------------------------------------------------  *
    *  -----  /01-functions.ts  --  /src/scripts/ts/03-funciones/01-functions.ts  -----  *
    *  --------------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  01-functions.ts  -----');
    console.log('\n');

    //  -----  Función tradicional que retorna un string  -----
    const hero: string = 'Flash';

    function returnName(): string {
        return hero;
    }

    //  -----  Función de flecha que retorna un string  -----
    const activateBatSignal = (): string => {
        return 'Batiseñal activada';
    }

    //  -----  Uso de las funciones  -----
    console.log(typeof activateBatSignal);

    //  -----  Mostrar en consola el valor retornado por la función  -----
    console.log(returnName());
    console.log(activateBatSignal());

    console.log('\n');

    //  -----  Llamar a las funciones sin usar su valor retornado  -----
    returnName();
    activateBatSignal();

    //  -----  Almacenar en una variable el valor retornado por la función  -----
    const heroName = returnName();
    console.log({ heroName });


})();
