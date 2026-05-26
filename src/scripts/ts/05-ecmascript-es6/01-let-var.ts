/*
    *  ---------------------------------------------------------------------------------  *
    *  -----  /01-let-var.ts  --  /src/scripts/ts/05-ecmascript-es6/01-let-var.ts  -----  *
    *  ---------------------------------------------------------------------------------  *
*/

(() => {


    //console.clear();
    console.log('\n');
    console.warn('-----  01-let-var.ts  -----');
    console.log('\n');

    //  -----  No es permitido en TypeScript  -----
    //  -----  No usar 'var' nunca más        -----
    //  -----  Usar 'let' o 'const'           -----

    console.log({a});

    var a = 'Antonio';

    //  -----  Usar 'let' o 'const'  -----
    
    let b = 'Dev';
    console.log({b});

    const c = 'Desarrollos';
    console.log({c});

    
    //  -----  funciones con const  -----
    const getName1 = (): string => {
        let name = 'Antonio';
        return name;
    }

    console.log('getName => ', getName1() );
        
    
    //  -----  Función Tradicional reasignada  -----
    function getName2() {
        console.log('Viejo getName');
    }

    getName2 = () => {
        console.log('Nuevo getName');
    } 

    getName2();



})();
