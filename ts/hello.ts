const myName = 'Sico';
// myName = 'efg'  // Syntax Error

let s: string | number = 'abc';

s = 123;
// s = false;  // Type Error

console.log(`Hello, World!`);
console.log(`Hello, ${myName}!`);

let x: null | undefined = undefined;
let y: any;
y = 123;
y = 'abc';

function add(a: number, b: number): number {
    return a + b;
}
console.log(add(1, 2));

let rocker;
rocker = 'Alice';
console.log(rocker.toUpperCase());

rocker = 123.45;
console.log(rocker.toPrecision(1));

let firstName: string | undefined = undefined; // type annotation
// firstName?.toUpperCase();

const str: string = 'abc';
type User = { id: number; name: string; addr?: string }; // type alias
const user: User = { id: 1, name: 'Hong' };
// user.addr = 'Seoul';

type Emp = { id: number; name: string; dept: string | number };

const emp: Emp = {
    id: 1,
    name: 'Kim',
    dept: 'Sales',
};
emp.dept = 12;

const Y = 'y';
let Z: 'x' | 'y' | 'z' = 'x'; // literal type
Z = 'y';
Z = Y;
let N: 1 | 2 | 3 = 3;
N = 2;

type Member = {
    name: string;
    addr: string;
    discountRate: number;
    spend: number[];
};
type Guest = {
    name: string;
    age: number;
    spend: number;
};
type Customer = Member | Guest;

// Member type
const member: Member = {
    name: '홍길동',
    addr: '용산구',
    discountRate: 0.1,
    spend: [1000, 30000, 50000],
};

const guest: Guest = {
    name: '김길동',
    age: 28,
    spend: 5500,
};

const who = Math.random() > 0.5 ? member : guest;
who.name = 'Lee';

if ('addr' in who) console.log(who.discountRate);
// if (who.hasOwnProperty('addr')) console.log(who.discountRate); // typescript는 실행을 못시켜봄으로, 함수는 판단하지 못함

let xarr: number[] | number = Math.random() > 0.5 ? 1 : [1, 2]; // 이런 식으로 하면 둘 다 맞음
if (Array.isArray(xarr)) console.log(xarr.length); // isArray는 불규칙허용이 됨

if (typeof who.spend !== 'number') {
    console.log(who.spend);
} else {
    console.log();
}

// 만약 true 이면 string type, false이면 boolean type - false
let gildong = Math.random() > 0.5 && 'HongGilDong';

if (gildong) {
    gildong.toUpperCase();
} else {
    // '' | false
    gildong;
}

let a: string | undefined;
console.log(a?.length);

const users = [
    { id: 1, name: 'Hong' },
    { id: 1, name: 'Kim' },
];

console.log(users.find((user) => user.id === 3)?.['name']);

const hong = { id: 1, name: 'Hong', addr: 'Seoul' };
function getHong() {
    return { id: 1, name: 'Hong', addr: 'Seoul' };
}

type XUser = { id: number; name: string };
type XEmp = { id: number; name: string; addr: string };
type XUser2 = { id: number; name: string; age: number };

let xuser: XUser;
let xemp: XEmp;
let xuser2: XUser2;

const xx: XUser2 | XEmp = { id: 1, name: 'xx', addr: 'xx', age: 3 };

const introduce = (name: string, height?: number | string) => {
    console.log(`이름: ${name}`);

    if (typeof height === 'number') console.log(`키: ${height * 10}`);
    else if (height) console.log(`키: ${height || '' + 10}`);
};

// (name: string, height?: number | string ) => void

introduce('김현준');
introduce('김현준', undefined);
introduce('김현준', 170);
let hh = Math.random() > 0.5 ? 1 : 'x';

xuser = { id: 1, name: 'Hong' };
// xuser = { id: 1, name: 'Hong', addr: 'Seoul' } // freshness : 날것 그대로, 가공이 안된 것
xuser = { id: 1, name: 'Hong', addr: 'Seoul' } as { id: number; name: string }; // 한번 가공
xuser = hong; // addr이 들어가 있는데도 오류가 안남 freshness가 off됨
xuser = getHong(); // 얘도 한번 가공해서 오류가 안남

xemp = { id: 1, name: 'lee', addr: 'Pusan' };
xuser = xemp; // (id, name) <=== (id, name, addr) : covariance
// xemp = xuser; // (id, name, addr) <=== (id, name) : contravariance

function getX1(obj: XUser) {
    return obj.name;
}
function getX2(obj: XEmp) {
    return obj.name;
}

// function ff(f: typeof )

console.log('getX=', getX1(xuser));
console.log('getX=', getX1(xemp));

// console.log('getX=', getX2(xuser));
console.log('getX=', getX2(xemp));

// 표기법 - 일반 함수
function xfn1(x: number): number {
    return x ** 2;
}
// 표기법 - arrow function
var xfn2 = (x: number): number => x ** 2;

// void를 return 타입으로 명시하지 않았을 때 통과됨.
// function logSong(song: string): void {
//     console.log(`${song}`);
//     return true;
// }

type VoidReturn = () => void;
const test2: VoidReturn = () => 11;

let songLogger: (song: string) => void;
songLogger = (song) => {
    console.log(`${song}`);
    return true; // OK
};
songLogger('HeartBeat'); // OK

// 위 에러랑 무관함. return값이 void인 것이랑 상관없음
// if (songLogger('HeartBeat')) console.log('******');

// let v: void;
// v = undefined;
// v = null;

// 함수 오버로드

// 선언부 - 여러개 쓸 수 있음
function mul(a: number, b: number): number;
function mul(a: number, b: number, c: number): number;

// 구현부 - 하나만 쓸 수 있음
function mul(a: number, b: number, c?: number) {
    if (typeof c === 'number') return a * b * c;
    return a * b * 1000;
}

console.log(mul(1, 2)); // 같은 이름 함수라도 다른 함수처럼 사용
console.log(mul(1, 2, 3));

// this
// typescript는 this의 type에 대해 명확하게 명시해줘야 함
function fff(this: { x: string; y: number }) {
    console.log(this.x);
}

const fffx = fff.bind({ x: 'xxx', y: 124 });
fffx();

// 객체일 때는 추론이 됨
const yuser = {
    id: 1,
    getId() {
        return this.id;
    },
};

console.log(yuser.getId());

// HTML에서 eventlistener this는 다 명시해줘야함.
// HTMLButtoneElement - 이런거 다 외워야함
// $btn.addEventListener('click', function(this: HTMLButtonElement)){
//     this.innerText = 'ts'
// }

const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(oneToTen[400]?.toFixed(2));

type NaverKakaoUser = {
    id: number;
    // nickname?: string;
    // name: string;
    // ...
    // 여러 속성 값이 올 때, 무엇이 올 지 모를 때 다음과 같이 정의해준다. - 그래도 확실한 것들은 받아줘야함.
    // index signiture
    [k: string]: string | number;
};

const kUser: NaverKakaoUser = { id: 1, nick: 'aaa', age: 12 };

type T = {
    id: number;
    getId: () => number;
};

// type이랑 비슷함
// interface는 implements로 사용함, type은 alias 형식으로 사용
// 명시를 하기 때문해 해당 method를 반드시 구현해야함.

interface I {
    id: number;
    getId: () => number;
    bark: () => void; // 하나를 추가해도 다 구현해야함
}

class IxUser implements I {
    id = 1;
    getId() {
        return this.id;
    }
    bark() {
        console.log('Bow wow');
    }
}

interface Animal {
    id: number;
    getId: () => number;
    bark: () => void; // 하나를 추가해도 다 구현해야함
}
class Dog implements Animal {
    id = 1;
    getId() {
        return this.id;
    }
    bark() {
        console.log('Bow wow');
    }
}

const lucy = new Dog();
console.log(lucy.id, lucy.getId());

const ix1 = new IxUser();
console.log(ix1.id, ix1.getId());

const ix2: T = {
    id: 1,
    getId() {
        return this.id;
    },
};

const strings1 = ['lim', 'eun', 'ha'];
// const result2 = [...result1, ...strings1];

function frest(...args: (string | number)[]) {
    console.log('XXXX = ', args.length);
}
function frest2(
    a: string | number,
    b: string | number,
    c: string | number,
    d: string | number
) {
    console.log('XXXX2= ', a, b, c, d);
}

frest('a', 'b', 1);
const arr1 = ['a', 'b', 1];
frest(...arr1); // frest('a', 'b', 1);

// 상수 tuple
const arr2 = [1, 2, 3] as const; // array를 상수로 만듦
let arr3 = [1, 2, 3] as const; // array를 상수로 만듦

type Tup = [number, string, boolean, string];
// let tuple1: [number, string, boolean];
let tuple1: Tup;
tuple1 = [2, 'a', false, 'Seoul'];

function tf(id: number, name: string, didOut: boolean, addr: string) {
    console.log(arguments);
}

tf(1, 'a', false, 'Seoul');

function tf2(params: Tup) {
    console.log(params);
}
tf2(tuple1);

// import { v4 } from 'uuid';
// console.log(v4());
// enum Ss {
//     '국어' = v4(),
//     '영어' = v4(),
//     '수학' = v4(),
// }

// const sub: Ss = Ss.국어;
// const sub1: Ss = Ss.수학;

// enum을 사용하면 안되는 이유
// 이런 것도 통과함 - Ss.국어 = 0 이 기본값이므로
// if (sub === 0) {
// }

type TA = [string, number];
const ta1 = ['aaaa', 111];

type TB = [boolean, TA];
type TB2 = [boolean, ...TA];
// const tb1: TB = [true, ta1];

const SIZE = [
    { id: 'XS', price: 8000 },
    { id: 'S', price: 10000 },
    { id: 'M', price: 12000 },
    { id: 'L', price: 14000 },
    { id: 'XL', price: 15000 },
] as const;

const sizeOption = { XS: 1, S: 5, M: 2, L: 2, XL: 4 };

const totalPrice = SIZE.reduce(
    (currPrice, size) => currPrice + sizeOption[size.id] * size.price,
    0
);
