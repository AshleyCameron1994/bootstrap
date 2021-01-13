'use strict'

function exercise1(){ 
    let x = 'foo';
    if (x = 'foo'){
        let y = 'boo';
    }
    console.log(x);
    console.log(y);
}

exercise1();


function doSomething() {
    a = 1;
    console.log(a);
    console.log(foo());
    function foo() {
      return 2;
    }
  }
  doSomething();