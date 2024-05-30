// object destructuring

// const u = { 
//     id: 1,
//     name: 'hong',
//     age: 29
// }

// let ({ id, name, addr }) = u;
// let ({ id, ...info }) = u;

// class destructuring

function test(){
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

}


function oper(){

    let x, y 
    x = y= 9;
    console.log(x, y);
    
    const z = (y++, x + y); // 앞 먼저 연산 후, 뒷 자리 연산 y = 10, x = 9 result: 19
    
    console.log(x += y) // result: 19 x = 19, y = 10
    console.log(x %= y) // result: 9  x = 9, y = 10
    console.log(x &= y) // 비트AND연산 9: 1001 / 10: 1010 result: 2진수 1000 = 8, x = 8, y = 10
    console.log(x ^= y) // 비트XOR연산 8: 1000 / 10: 1010 result: 2진수 0010 = 2, x = 2, y = 10
}


function start(){

    const u = {
        id: 1,
        name: 'Hong',
        age: 29
    };
    
    // // let { id, name, addr } = u;
    // let {id, ...info} = u;
    // console.log(id, info);
    
    let id, name;
    // {id, name} = u; 사용불가
    // ({ id, name } = u); // 사용가능 왜 ????
    console.log(id, name);
    
    const arr = [1, 2, 3, 4, 5];
    let [a, b, ...c] = arr;
    console.log(a, b, c);
    
    [a, b] = [b, a];        // 배열에서 가능한 것?
    console.log([a, b]);
}

// Object Destructuring
// const { id, name } = { id: 1, name: 'Hong' };
// console.log(id, name);

// const user = {
//     id: 1,
//     name: 'Hong',
//     addr: {
//         city: 'Seoul',
//         road: '길'
//     }
// };

// // const id = user.id;
// const { id } = user;
// console.log(id);

// // 변수명 변경
// const { id: userId, name: userName } = user;
// console.log("🚀 ~ userId, userName :", userId, userName);

// 객체 속에 있는 값을 변수로 만들기
// 해당 과정
// const { id, addr } = user;
// console.log(id, addr);                   // 1 { city: 'Seoul', road: '길' }

// const { city } = addr;
// console.log(city);                       // Seoul

// 한번에 가져오기
// const { id, addr: { city } } = user;
// console.log(city);                       // Seoul

// 키값 변경해서 가져오기
// const { id, addr: { city: addrCity } } = user;
// console.log(addrCity);                  // Seoul

// 배열 값 가져오기
// const arr = [1, 2, 3, 4, 5];            // { 0: 1, 1: 2... }
// const { 1: x1, 3: x2 } = arr;
// console.log(x1, x2);                    // 2 4

// 조건문으로 값 가져오기
// const mainField = user.id > 5 ? 'name' : 'addr';
// const { [mainField]: target } = user;
// console.log(target);                    // { city: 'Seoul', road: '길' }

// user = {
//     id: 1,
//     addr: { 
//         city: 'S',
//         road: 'X'
//      }
// }

// x = user;
// y = { ...user };
// z = { ...user, addr: { ...user.addr  }}
// console.log(x, y, z)

// user.addr.city = 'P'
// console.log(x.addr.city);
// console.log(y.addr.city);
// console.log(z.addr.city); // x, y는 user의 참조값, z는 생성값?






// Array/Iterator Destructuring
// const [a, b] = [1, 2];
// console.log(a, b);

// let c, d;
// [c, d] = [1, 2];
// console.log(c, d);

// const [ , , e ] = [1, 2, 3];
// console.log(e);

const users = [ { id: 1, name: 'Hong' }, { id: 2, name: 'Kim' }, { id: 3, name: 'Lee' } ];
// const [ , { id: userId }] = users;
// console.log(userId);


// const arr = [123, 456]

// let [aa, bb] = arr;
// 변수명을 바꾸어 할당?
// let { '0': aa, '1': bb } = {...arr}    // spread





// Default Value Destructuring 
// 없는 요소들은 변수로 생성
// const { id, name, addr = 'Seoul' } = { id: 1, name: 'Hong', add: 'Pusan' }
// console.log("🚀 ~ :", id, name, addr);
// const [ a, b, c = 3 ] = [ 1, 2 ];
// console.log("🚀 ~ a, b, c:", a, b ,c);

// const [ user, ] = users;
// console.log(user);

// 이미 할당된 값은 변경 불가?
// const { id, nick = 'Hong' } = { id: 1, nick: '' };
// console.log(id, nick);

// const { id, nick = 'Hong' } = { id: 1, nick: 'Kim' };
// console.log(id, nick);

// const [  e, f, g = 3 ] = [ 1, 2, 0];
// console.log(e, f, g);

// undefined로 된 값은 변경될 수 있음
// const { id, nick = 'Hong' } = { id: 1, nick: undefined };
// console.log(id, nick);

// const [  e, f, g = 3 ] = [ 1, 2, undefined ];
// console.log(e, f, g);


// n is not defined ????
const obj = { i: 1, j: 2, l: 3, m: 4, n: 5 };
// // const { i, j, l} = obj;
// // console.log(i, j, l);

let { j, i, k = i * j * n } = obj;
// // const { k = i * 10, i, j } = obj;
// // console.log(k);
// console.log(j, i, k);

// r은 q가 할당 전이라 NaN이 됨?
// let q, s, r;
// ({ r = q * 10, q, s } = { q: 10, s: 20 });
// console.log(q, s, r);


// rest 연산자
// const arr = [1, 2, 3, 4, 5];
// const [ a1, a2, ...rest ] = arr;
// console.log(a1, a2, rest);

// const { l, m, ...restObj } = obj;
// console.log(l, m, restObj);



// Arguments Destructuring

const user = { 
    id: 1,
    name: 'Hong',
    addr: {
        city: 'Seoul'
    }
}

// function fn(arg1, {id, name}, arg2) {
//     console.log(arg1, id, name, arg2);
// }

// fn(10, user, 20);

// const [ arg1, {id, name}, arg2 ] = [ 10, user, 20 ];
// console.log(arg1, id, name, arg2);

// let un;
// // const [a] = un;             // un is not iterable
// // const [a] = un || [];  
// const a = un?.[0];
// console.log(a);

// const { name: n, age = 30 } = { name: 'Lee' };
// console.log(n, age);                         // Lee

// 안변함
// const { age2 = 30 } = { name: 'Park', age2: 20 };
// console.log(age2);                              // 20


// const { age2:age3 = 33 } = {age22: 20};
// console.log(age2);
// console.log(age3);

// const u3 = {
//     id: 3,
//     name: 'kim',
//     addr: {
//         id: 1,
//         city: 'Seoul'
//     }
// }

// let { id: idd, addr: { id: aid } } = u3;
// console.log(idd, aid);

// const arr = [ 1, 2, [3, 4], [5, 6], { ax: 7, ay: 8 }, { ax: 9 } ];
// const [ , x, [ ,y], z, , {ax}] = arr;
// console.log(x, y, z, ax);

// const { 1: p, 4: q } = arr;
// console.log(p, q);

// const [ , , , , {ay: a1}, {ax: a2} ] = arr;
// console.log(a1, a2)

// const [k, v] = Object.entries(user);
// console.log(k, v);

const kim = {nid: 3, nm: 'Hong', addr: 'Pusan'};

// const newKim = {...kim}

const newObj = {};
function copyObject(obj){
    for (const k in obj)
	newObj[k] = obj[k];
    return newObj
}

// copyObject(kim)

const newKim = copyObject(kim);        // shallow copy
console.log(newKim);
newKim.addr = 'Daegu';
console.log(kim.addr !== newKim.addr);


// Class Destructuring
// class의 constructor를 변수로 뺄 수 있음
// class A {
//     constructor(a, b){
//         this.a = a;
//         this.b = b;
//     }
// }
// const x = new A(1, 2);
// const {a , b} = x;
// console.log("🚀 ~ a, b:", a, b)

// Array to Object Destructuring
// const {'0': a1, '1': a2} = [1, 2];
// console.log(a1, a2);



