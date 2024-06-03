'use strict';

// 함수 선언문에서는 this가 global 객체를 가르킴

function f(x, y){
    const id = 1;
    // global object(globalThis)
    console.log('funtion.id= ', this.id);
    console.log('x y: ', x, y)
}

// var id = 5;
globalThis.id = 'Global this';

f();

// 화살표 함수는 this가 모듈 객체를 가르킴
this.id = 'Module this';

const f2 = () => {
    console.log('arrowFn.id= ', this.id, globalThis.id);
}

f2();

// 함수선언문이 자체 this를 갖으려면 bind나 call
const user = {id:1, name: 'Hong'}
const newF = f.bind(user);
newF(1, 11);
f.call(user, 2, 22);
f.apply(user, [3, 33]);

f.call(globalThis, 4, 44);
f(4, 44)

console.log('-------------');
f2.call(globalThis, 5, 55);
f2.bind(user)();