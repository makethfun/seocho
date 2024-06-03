// 유사배열객체
x = Array.from([1, 2, 3]);
// console.log(x.length);

// Array(5)     // [5 empty items]
// Array.from({length: 5})  // [undefined, undefined..]
// empty와 undefined 차이
// empty는 값과 공간이 없이 length만 있고,
// undefined는 값이 없어도 공간이 있음(index 존재).

console.log(Array.from({ length: 5 }).map((v, i) => i));
console.log(
    Array.from({ length: 5 }).map(function (v, i) {
        return i;
    })
);
console.log(Array(5).map((v, i) => i));

Array.from({ length: 5 }).forEach(function (v, i) {
    return console.log(v, i);
});

Array(5)
    .fill(0)
    .forEach((v, i) => console.log(v, i));

const arr = [1, 2, 3, 4, 5];
console.log(arr.length);
arr[5] = null;
console.log(arr.length);

const arr1 = ['abc'];
Array.from(['abc']);
