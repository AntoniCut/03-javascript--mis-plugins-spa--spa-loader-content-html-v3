/*
    *  ---------------------------------------------------------------------------------------------------  *
    *  -----  /03-interfaces-metodos.ts  --  /src/scripts/ts/07-interfaces/03-interfaces-metodos.ts  -----  *
    *  ---------------------------------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  03-interfaces-metodos.ts  -----');
    console.log('\n');


    /*
        ---------------------------------------
        -----  Métodos de las Interfaces  -----
        ---------------------------------------
    */

    //  -----  Definir interfaces  -----

    interface Client {  
        name: string;
        age?: number;
        address: Address;
        getFullAddress?( id: string ): void;
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
        },
        getFullAddress( id: string ) {
            return this.address.street + ', ' + this.address.city + ', ' + this.address.country;
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


    console.log('Dirección client1 => ', client1.getFullAddress?.('125') );
    console.log( client2 );
    

})();
