const arr = [1, 2, 3, 4, 5];
const square = (n) => n ** 2;
const sqrt = (n) => Math.sqrt(n);
const cube = (n) => n ** 3;

const ret2 = arr.reduce((acc, v) => [...acc, cube(sqrt(square(v)))], []);
console.log(ret2);

// console.log(arr.reduce((acc, v) => [...acc, cube(sqrt(square(v)))], []));

// console.log([square, sqrt, cube].reduce((acc, f) => acc.map(f), arr));

const ret3 = [square, sqrt, cube].reduce((acc, f) => acc.map((v) => f(v)), arr);
console.log(ret3);

const ret4 = [cube, sqrt, square].reduce((acc, f) => acc.map((v) => f(v)), arr);
console.log(ret4);

function calc(values, fns) {
    return fns.reduce((results, f) => results.map((v) => f(v)), values);
}

const ret5 = calc([2, 3, 5], [sqrt, cube, square]);

console.log(ret5);
