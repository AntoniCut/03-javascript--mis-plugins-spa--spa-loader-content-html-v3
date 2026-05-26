// @ts-nocheck
"use strict";
/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /01-validations.js  --  /src/scripts/js/08-namespaces/01-validations.js  -----  *
    *  -------------------------------------------------------------------------------------  *
*/

/** `Namespace para validaciones` */
var Validations;
(function (Validations) {
    console.clear();
    console.log('\n');
    console.warn('-----  01-validations.ts  -----');
    console.log('\n');
    /** `Valida que un texto tenga más de 3 caracteres` */
    Validations.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    /** `Valida que una fecha sea válida` */
    Validations.validateDate = (date) => {
        return (isNaN(date.valueOf())) ? false : true;
    };
})(Validations || (Validations = {}));
//  -----  Pruebas de las validaciones  -----
console.log('\nValidations.validateText(\'Hola Mundo\') => ', Validations.validateText('Hola Mundo'));
console.log('Validations.validateText(\'Ho\') => ', Validations.validateText('Ho'));
console.log('\nValidations.validateDate(new Date(5)) => ', Validations.validateDate(new Date(5)));
console.log('Validations.validateDate(new Date(\'2024-13-01\')) => ', Validations.validateDate(new Date('2024-13-01')));
//# sourceMappingURL=01-validations.js.map