/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /inferir-tipos.ts  --  /src/scripts/ts/01-introduccion/inferir-tipos.ts  -----  *
    *  -------------------------------------------------------------------------------------  *
*/

//  -----  función anónima autoinvocada  -----


(() => {

    
    console.clear();
    console.log('\n');
    console.warn('-----  inferir-tipos.ts  -----');
    console.log('\n');


    //  -----  Variables - inferir tipo  -----
    let msg1 = 'Antonio Cutillas';
    msg1 = 'Mi nombre';


    //  -----  Variables - definir tipo  -----
    const msg2: string = 'Hola Mundo';
    console.log({msg1, msg2});
    

    //  -----  Objetos  -----
    const hero = {
        name: 'Ironman',
        age: 45
    }
    
    console.log('hero', hero);
    console.log('{hero} ', { hero });

    hero.name = 'Fernando Herrera';
    hero.age = 50;

    console.log('hero.name:', hero.name);
    console.log('hero.age:', hero.age);

        
    /*  
        -------------------------------------
        ----------  inferir tipos  ----------
        -------------------------------------
    */

    //  -----  inferir tipos  -----
    const a = 10;   //  a: 10
    let b = 10;     //  b: number

    console.log({ a, b });


    //  -----  number  -----
    const c: number = 20;
    let d: number;

    d = 30;
    console.log({ c, d });


    /*  
        -----------------
        -----  any  -----
        -----------------
    */
    
    //  -----  any  -----
    let e;         
    
    //  -----  number  -----
    e = 3.1416;         
    console.log({ e });

    //  -----  string  -----
    e = 'Hola mundo';
    console.log({ e });

    //  -----  boolean  -----
    e = true;
    console.log({ e });

    //  -----  array number  -----
    e = [1, 2, 3, 4, 5];
    console.log({ e });

    //  -----  object  -----
    e = {
        name: 'Antonio Cutillas',
        age: 45
    };
    console.log({ e });



    //  -----  number  -----
    let f: number = 20;

    console.log({ f });


    //  -----  param string - return void  -----
    function sayHello(message: string) {

        console.log(message);
    }

    sayHello('Hola mundo');


    //  -----  inferir tipo  -----
    const message = 'Hello World';
    sayHello(message);
        

})();
