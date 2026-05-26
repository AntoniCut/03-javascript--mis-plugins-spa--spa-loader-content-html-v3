/*
    *  ---------------------------------------------------------------------------------  *
    *  -----  /05-gets-y-sets.ts  --  /src/scripts/ts/06-clases/05-gets-y-sets.ts  -----  *
    *  ---------------------------------------------------------------------------------  *
*/

(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  05-gets-y-sets.ts  -----');
    console.log('\n');


    /*
        -------------------------
        -----  Gets y Sets  -----
        -------------------------
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
       

       //  -----  Getter  -----
       get fullName() : string {
           return `${ this.name } - ${ this.realName }`;
       }


       //  -----  Setter  -----
       set fullName( name: string ) {
           
           if( name.length < 3 ) {
               throw new Error('El nombre debe ser mayor de 3 caracteres');
           }

           this.name = name;
       }


    }


    //  -----  Instancia de la clase Xmen - Hereda de Avenger  -----
    const wolverine = new Xmen('Wolverine', 'Logan', true);

    console.log('Wolverine => ', wolverine);

    //  -----  Getter -----
    console.log('\nwolverine.fullName => ', wolverine.fullName);
   
    //  -----  Setter  -----
    wolverine.fullName = 'New name for Wolverine';
    //wolverine.fullName = 'Ne';
    console.log('wolverine.fullName (después de set) => ', wolverine.fullName);

})();
