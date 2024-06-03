// 'use strict';

globalThis.name = 'GLOBAL';
this.name = 'MODULE';

const obj = {
    name: 'OBJ',
    f1: function () {
        // property - key.value / function statement
        console.log('f1= ', this.name);
    },
    f2: () => {
        // property - key.value / arrow function : 원래 쓰면 안됨 this가 다름
        console.log('f2= ', this.name);
    },
    f3() {
        // method
        console.log('f3= ', this.name);
    },
};


obj.f1(); // obj 객체가 없어도 부를 수 있음
obj.f2(); // obj 객체가 없어도 부를 수 있음
obj.f3(); // obj 객체가 없으면 부를 수 없음 // 클래스 예제임

const z = Object.getOwnPropertyDescriptors(obj);
console.log(z);

const nm = obj.name;
const f11 = obj.f1;
const f22 = obj.f2; // arrow function : 상위의 this
// const f33 = obj.f3; // 원래 이렇게 안씀

// f11();
// f22();
// f33(); // TypeError: Cannot read properties of undefined (reading 'name') in strict mode.

class Dog {
    f1() {
        console.log('Dog.f1', this.name);
    }
}

Dog.prototype.f1();
const lucy = new Dog();
lucy.f1();
console.log('Dog: ', Dog.prototype.f1);

function f9() {
    this.x = 'F9NAME';
    console.log('f9>>', f9.name, this.x, new.target);
}

f9();
console.log('globalThis.x >>', globalThis.x );

const nine = new f9();
console.log('++++', nine.x);