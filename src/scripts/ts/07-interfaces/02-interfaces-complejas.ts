/*
    *  -------------------------------------------------------------------------------------------------------  *
    *  -----  /02-interfaces-complejas.ts  --  /src/scripts/ts/07-interfaces/02-interfaces-complejas.ts  -----  *
    *  -------------------------------------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  02-interfaces-complejas.ts  -----');
    console.log('\n');


    /*
        ----------------------------------
        -----  Interfaces Complejas  -----
        ----------------------------------
    */

    //  -----  Definir interfaces  -----

    interface Client {
        name: string;
        age?: number;
        address: Address;
    }

    interface Address {
        id: number;
        street: string;
        country: string;
        city: string;
    }


    //  -----  Usar interfazes  -----

    const client1: Client = {
        name: 'Tony',
        age: 45,
        address: {
            id: 125,
            street: 'Av. Principal',
            country: 'USA', 
            city: 'New York',
        }
    }

    
    const client2: Client = {
        name: 'Melissa',
        age: 39,    
        address: {
            id: 126,
            street: 'Calle Secundaria',
            country: 'USA', 
            city: 'Los Angeles',
        }
    }


    console.log({ client1 });
    console.log({ client2 });
    

})();
