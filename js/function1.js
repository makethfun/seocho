function hello(){
    console.log('Hello, world!');
}

hello();

function Dog(name){
    // console.log(this);  // 전역객체
    this.name = name;
}

Dog('maxx');
// console.log(this) // module
// console.log(globalThis.name)

const lucy = new Dog('Lucy');
console.log('lucy: ', lucy);

function printFnReturnValue(fn) { 
    console.log('arguments>>', arguments); // arguments : 전달한 값
    console.log('xx =', fn.name, fn()); 
}
const ret = printFnReturnValue(hello);
console.log(ret);

function showAge({ age }){
    console.log('age= ', age);
}

const user = {
    id: 1,
    age: 33,
}
showAge(user);