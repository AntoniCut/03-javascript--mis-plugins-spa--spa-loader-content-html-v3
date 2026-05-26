// @ts-nocheck
"use strict";
/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /inferir-tipos.js  --  /src/scripts/js/01-introduccion/inferir-tipos.js  -----  *
    *  -------------------------------------------------------------------------------------  *
*/

//  -----  función anónima autoinvocada  -----
(function () {
    console.clear();
    console.log('\n');
    console.warn('-----  inferir-tipos.ts  -----');
    console.log('\n');
    //  -----  Variables - inferir tipo  -----
    var msg1 = 'Antonio Cutillas';
    msg1 = 'Mi nombre';
    //  -----  Variables - definir tipo  -----
    var msg2 = 'Hola Mundo';
    console.log({ msg1: msg1, msg2: msg2 });
    //  -----  Objetos  -----
    var hero = {
        name: 'Ironman',
        age: 45
    };
    console.log('hero', hero);
    console.log('{hero} ', { hero: hero });
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
    var a = 10; //  a: 10
    var b = 10; //  b: number
    console.log({ a: a, b: b });
    //  -----  number  -----
    var c = 20;
    var d;
    d = 30;
    console.log({ c: c, d: d });
    /*
        -----------------
        -----  any  -----
        -----------------
    */
    //  -----  any  -----
    var e;
    //  -----  number  -----
    e = 3.1416;
    console.log({ e: e });
    //  -----  string  -----
    e = 'Hola mundo';
    console.log({ e: e });
    //  -----  boolean  -----
    e = true;
    console.log({ e: e });
    //  -----  array number  -----
    e = [1, 2, 3, 4, 5];
    console.log({ e: e });
    //  -----  object  -----
    e = {
        name: 'Antonio Cutillas',
        age: 45
    };
    console.log({ e: e });
    //  -----  number  -----
    var f = 20;
    console.log({ f: f });
    //  -----  param string - return void  -----
    function sayHello(message) {
        console.log(message);
    }
    sayHello('Hola mundo');
    //  -----  inferir tipo  -----
    var message = 'Hello World';
    sayHello(message);
})();
//# sourceMappingURL=inferir-tipos.js.map