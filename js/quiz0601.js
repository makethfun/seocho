const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);

console.log(fn(1, 6));
console.log(fn(2, 7));
console.log(fn(3, 8));

// const dog = {
//     name: 'Maxx',
//     showMyName: () => {
//         console.log(`My name is ${this.name}.`);
//     },
//     whatsYourName() {
//         setTimeout(() => {
//             this.showMyName();
//         }, 1000);
//     },
// };

// dog.whatsYourName();
