// @ts-nocheck
"use strict";
/*
    *  -------------------------------------------------------------------------------------------------------  *
    *  -----  /02-interfaces-complejas.js  --  /src/scripts/js/07-interfaces/02-interfaces-complejas.js  -----  *
    *  -------------------------------------------------------------------------------------------------------  *
*/

(() => {
    console.clear();
    console.log('\n');
    console.warn('-----  02-interfaces-complejas.ts  -----');
    console.log('\n');
    //  -----  Usar interfazes  -----
    const client1 = {
        name: 'Tony',
        age: 45,
        address: {
            id: 125,
            street: 'Av. Principal',
            country: 'USA',
            city: 'New York',
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 39,
        address: {
            id: 126,
            street: 'Calle Secundaria',
            country: 'USA',
            city: 'Los Angeles',
        }
    };
    console.log({ client1 });
    console.log({ client2 });
})();
//# sourceMappingURL=02-interfaces-complejas.js.map