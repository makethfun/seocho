// let a = 1, b = 2;
let a = 1;
let b = 2;

// for(let i = 0; i < 10; i = i+1){
//     console.log(i);
// }

let c = (a++, b++);
// a = a + 1;
// let c = b;
// b = b + 1;

// let c = ((a = a + 1), (b = b + 1));
// a = a + 1;
// b = b + 1;
// let c = b;
console.log('c = ', c, a, b);

let d = (a--, b + a);
console.log('d = ', d, a, b);

d = void (c = a + b);
console.log(a, b, c, d);

console.log('-------------------------')
const first = '';
const last = 'Bob';
console.log(`${first} ${last}`);

let fullName = first ? first + ' ' : '';
fullName = last;
console.log('fullName =', fullName);
console.log(`${first}${first ? first + ' ' : ''}${last}`);
// if (first) {
//     console.log(first);
// }
// console.log(last);

console.log('-------------------------')
const bit = 0b101;
const oct = 0o101;
const hex = 0x101;
console.log(bit, oct, hex)

// 문자열 n진수 바꾸기
console.log(parseInt('101', 2))

// 문자를 숫자로
console.log(parseFloat('10.100'))
console.log(Number('10.100'))

// 무한대
console.log(-Infinity);
console.log(isNaN(Infinity));
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log('-------------------------');
console.log(9007199254740991 === 9007199254740991);
console.log(9007199254740991 === 9007199254740992); // false
// MAX_SAFE_INTEGER 이상 되면 정수 비교가 어려움 
console.log(9007199254740993 === 9007199254740992);
// 숫자가 더 커지면 n을 붙여서 byte를 바꿔줌 (8byte -> 16byte)
console.log(9007199254740993n === 900719925440992n);

console.log('-------------------------');

const num = 123.456;
// 소수점 3자리에서 반올림
console.log(num, num.toFixed(2));
// to fixed : return string (문자열로 바뀜)
console.log(num, num.toFixed(2) + 9);
console.log(num, Math.trunc(Number(num.toFixed(2))) + 9);

// 소수점 연산시 뒤에 값 - 부동소수점
const three = 0.1 + 0.2;
console.log(three);
console.log(0.1 + 0.7);
console.log(0.3 + 0.2);
console.log(Math.trunc((0.1 + 0.2) * 10) / 10);

// 부동소수점 연산에 나머지 값 판단 시 Number.EPSILON 사용
console.log(three - Number.EPSILON);
const ep = Math.abs(three - 0.3) < Number.EPSILON;
console.log(' ep:', ep);

console.log(2.5 % 1);
console.log(2.4 % 1);
console.log('====')

// 연습문제

for (let i = 0.1; i < 1; i = i + 0.1){
    // if(Math.abs(i - ))
    console.log(i);
}

const user = {
    id: 1,
    name: 'bob', 
}

console.log(user.name);
console.log(user['name']);
const nm = 'name';
console.log(user[nm]);
user.hasOwnProperty('name');
user.hasOwnProperty('addr');

// n1은 object n2는 instance
n1 = Number(100);
n2 = new Number(100);

n1 == n2 // true
n1 === n2  // false

class User {}
hong = new User ();
hong instanceof User
user instanceof User

const arr = [ 1, 2, 3, 4, 5];

const [x, y] = arr;
console.log(x);
console.log(y);

// destructuring
arr2 = [1, 2, 3, 4, 5];
const [x1, y1, z1] = arr2;
console.log(x1);
console.log(y1);
console.log(z1);

const [x2, y2, ...z2] = arr2;
console.log(x2);
console.log(y2);
console.log(z2);

console.log('--------------------------------')
// 제어문
if(three === 0.3){
    console.log('OK')
} else {
    console.log('exists garbage!')
}

const xx = 3;
// 1 이면 one, 2면 two, 3이면 four, 그외 etc

// 1. if statement
if (xx == 1) {
    console.log('one');
} else if(xx == 2) {
    console.log('two');
} else if(xx == 3) {
    console.log('four');
} else {
    console.log('etc');
}

let outStr = 'etc';
if (xx == 1) {
    outStr = 'one'
} else if(xx == 2) {
    outStr = 'two'
} else if(xx == 3) {
    outStr = 'four'
} 
console.log(outStr);
// 2. switch statement
switch(xx) {
    case 1:
        outStr = 'one';
        break;
    case 2:
        outStr = 'two';
        break;
    case 3:
        outStr = 'four';
        break;
    default:
        outStr = 'etc';
}

// 3. 3항 연산자
outStr = xx === 1 ? 'one' : xx === 2 ? 'two' : xx === 3 ? 'four' : 'etc';
console.log(outStr);

// 4. or 연산자
outStr = 
    (xx === 1 ? 'one' : '') ||
    (xx === 2 ? 'two' : '') ||
    (xx === 1 ? 'three' : 'etc');

console.log(outStr);

// optional chain
// arr?.length : optional chain을 하는 이유? 만약 arr이 없다면 일반 chaining을 했을 때 node는 프로세스 방식이므로 webserver가 멈출 수 있음. 그래서 해당 error를 처리하기 위해 optional chain을 씀. 하지만 java는 multi thread 방식이라 걱정할 필요가 없음.
// arr.length

// 5. 반복문

console.log('------------------------');
let i = 5;
while(i > 0){
    console.log('i: ', i);
    i = i - 1;
}

console.log('------------------------');
i = 5;
while (i-- > 0) {
    console.log('i: ', i);
}

console.log('------------------------');
i = 5;
do { 
    console.log('i: ', i); 
} while (i-- > 1);

// 책추천 cleancode

// 1~100까지 더하기

// 1. while

i = 0
let sum = 0;
while (i++ < 100) {
    // console.log(i)
    sum = i + sum;
}

console.log(sum);

// 2. for
sum = 0;
for(i = 0; i < 101 ; i++){
    sum = i + sum;
}

console.log(sum);

// 배열 출력하기
const arr1 = [10, 20, 30, 40, 50];
for (let i = 0; i < arr1?.length; i++){
    console.log(`arr1[${i}]`, arr1[i])
}

// cursor

for (const t of arr1){
    console.log(t);
}

const userInfo = {
    id: 1,
    name: 'Hong',
}

for(const p in userInfo){
    console.log('p: ', p, userInfo[p])
}

const cart = {
    user: user,
    items: [
        { id: 100, itemName: '신라면'},
        { id: 200, itemName: '너구리'}
    ]
}

console.log('cartOwner=', cart.user.name);
// for (const cc in cart){
//     if(cc === 'user'){
//         for (const p in cart[cc]){
//             console.log('p: ', p, user[p]);
//         }
//     } else if (cc === 'items'){
//         for (const item of cart[cc]){
//             console.log('items: ', )
//         }
//     }
// }

const WEEK_NAMES = '월화수목금토';
for (const w of WEEK_NAMES){
    console.log('w: ', w);
}

let total = 0;
function add(x, y){
    total = x + y;
}

const lang = 80;
const math = 70;
add(lang, math);
console.log('total: ', total);


// return: stack에서 pop 됨

function checkScore(){
    // if (lang > 70){
    //     return 'Success';
    // } else if (math > 70) {
    //     return 'Pass';
    // } else {
    //     return 'Fail';
    // }

    if (lang > 70){
        return 'Success';
    }
    if (math > 70) {
        return 'Pass';
    } 
    return 'Fail';
}

console.log(checkScore());

console.log('-------------------');
const dt = new Date();
console.log('dt: ', dt, dt.getFullYear());
console.log('dt: ', dt, dt.getMonth());
console.log('dt: ', dt, dt.getDate());
console.log('dt: ', dt, dt.getDay());


// 마지막 문제
let aa = 0.001;
console.log(aa.toString().length);

