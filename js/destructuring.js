// object destructuring

// const u = { 
//     id: 1,
//     name: 'hong',
//     age: 29
// }

// let ({ id, name, addr }) = u;
// let ({ id, ...info }) = u;

// class destructuring
class A {
    constructor (x, y){
        this.a = x;
        this.b = y;
    }
}

const k = new A(1, 2)
console.log(k);

const {a, b} = k
console.log(a);
console.log(b);

// array destructuring
arr = ['kim', 'hong']
const {'0':a1, '1':a2} = arr;
console.log(a1);
console.log(a2);

const user = {
    id: 101,
    name: 'Hong',
    addr: {
        city: 'Seoul',
        road: 'Street'
    }
}

// const { id }= user;
// console.log(id);

// const { id: userId, name: userName } = user;
// console.log(userId, userName);

const { id, addr } = user;
console.log(id, addr);

const { id: newId, addr: { city } } = user;
console.log(newId, city);



