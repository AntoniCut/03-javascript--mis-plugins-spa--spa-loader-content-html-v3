/*
    *  -------------------------------------------------------------------------------------------------------  *
    *  -----  /04-herencia-super-extends.ts  --  /src/scripts/ts/06-clases/04-herencia-super-extends.ts  -----  *
    *  -------------------------------------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  04-herencia-super-extends.ts  -----');
    console.log('\n');


    /*
        ---------------------------------------
        -----  Herencia, Super y Extends  -----
        ---------------------------------------
    */


    //  -----  Clase Padre  -----
    class Avenger {

        constructor(
            public name: string,
            public realName?: string
                       
        ) {
            console.log('Constructor Avenger llamado!!!');
        }
       
        protected getFullName() {
            return `${ this.name } ${ this.realName }`;
        }

    }


    //  -----  Extends: hereda de otra clase  -----
    class Xmen extends Avenger {
        
       constructor(
           name: string, 
           realName?: string, 
           public isMutant: boolean = true
       ) {
       
          super(name, realName);
          console.log('Constructor Xmen llamado!!!');
       }

       public getFullNameDesdeXmen() {
           console.log( super.getFullName() );
       }
       
    }


    //  -----  Instancia de la clase Xmen - Hereda de Avenger  -----
    const wolverine = new Xmen('Wolverine', 'Logan', true);

    console.log('Wolverine => ', wolverine);

    //  -----  Llamando método que usa el método de la clase padre  -----
    wolverine.getFullNameDesdeXmen();
   

})();
