/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /01-validations.ts  --  /src/scripts/ts/08-namespaces/01-validations.ts  -----  *
    *  -------------------------------------------------------------------------------------  *
*/

/** `Namespace para validaciones` */
namespace Validations {


    console.clear();
    console.log('\n');
    console.warn('-----  01-validations.ts  -----');
    console.log('\n');


    /** `Valida que un texto tenga más de 3 caracteres` */
    export const validateText = (text: string): boolean => {

        return (text.length > 3) ? true : false;
    }


    /** `Valida que una fecha sea válida` */
    export const validateDate = (date: Date): boolean => {

        return (isNaN(date.valueOf())) ? false : true;
    }


}



//  -----  Pruebas de las validaciones  -----

console.log('\nValidations.validateText(\'Hola Mundo\') => ', Validations.validateText('Hola Mundo'));
console.log('Validations.validateText(\'Ho\') => ', Validations.validateText('Ho'));

console.log('\nValidations.validateDate(new Date(5)) => ', Validations.validateDate(new Date(5)));
console.log('Validations.validateDate(new Date(\'2024-13-01\')) => ', Validations.validateDate(new Date('2024-13-01')));
