// @ts-nocheck
/*
    *  ---------------------------------------------------------------------------------------------  *
    *  -----  /05-clases-en-es6.js  --  /src/scripts/js/05-ecmascript-es6/05-clases-en-es6.js  -----  *
    *  ---------------------------------------------------------------------------------------------  *
*/

(() => {



    console.clear();
    console.log('\n');
    console.warn('-----  05-clases-en-es6.js  -----');
    console.log('\n');


    /*  
        ---------------------------
        -----  Clases en ES6  -----
        ---------------------------  
    */
    

    //  -----  definir clase Avenger -----
    class Avenger {
        
        constructor(name = 'No name', power = 0) {
            this.name = name;
            this.power = power;
        }

    }


    //  -----  definir clase FlyiningAvenger que hereda de Avenger -----
    class FlyiningAvenger extends Avenger {

        constructor(name, power) {
            
            super(name, power);
            this.flying = true;
        }

    }


    //  -----  crear instancia de la clase Avenger -----
    const hulk = new Avenger('Hulk', 9000);

    //  -----  crear instancia de la clase FlyiningAvenger -----
    const falcon = new FlyiningAvenger('Falcon', 70, true);
    
    //  -----  mostrar en consola  -----
    console.table({ hulk, falcon });
   


})();
