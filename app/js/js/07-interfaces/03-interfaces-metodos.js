// @ts-nocheck
"use strict";
/*
    *  ---------------------------------------------------------------------------------------------------  *
    *  -----  /03-interfaces-metodos.js  --  /src/scripts/js/07-interfaces/03-interfaces-metodos.js  -----  *
    *  ---------------------------------------------------------------------------------------------------  *
*/

(() => {
    var _a;
    console.clear();
    console.log('\n');
    console.warn('-----  03-interfaces-metodos.ts  -----');
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
        },
        getFullAddress(id) {
            return this.address.street + ', ' + this.address.city + ', ' + this.address.country;
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
    console.log('Dirección client1 => ', (_a = client1.getFullAddress) === null || _a === void 0 ? void 0 : _a.call(client1, '125'));
    console.log(client2);
})();
//# sourceMappingURL=03-interfaces-metodos.js.map