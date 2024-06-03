'use strict';

const user = {
    '': 1,
    ' ': 'blank',
    123: 1, // user[123], user['123'] 가능, user.123은 에러
    12345n: 2, // user[12345] 가능, user['12345n']은 undefined
    true: 1, // user.true 가능
    id: 2,
    [`name`]: 'Hong', // user.name 가능
    [Symbol()]: 'Hong',
    [`${new Date()}`]: 356,
    'my-frineds': ['Han', 'Kim'],
    getInfo: () => `${this.id}-${this.name}`,
    getInfo() {
        return `${this.id}-${this.name}`;
    },
};

function blank() {
    // console.log(user);
    console.log(Object.keys(user), Object.keys(user).length); // key값을 배열로 return, symbol은 안나타남
    console.log(Reflect.ownKeys(user), Reflect.ownKeys(user).length); // key값을 배열로 return, symbol도 나타남
    user.addr = 'Seoul';
    console.log('addr' in user, user.hasOwnProperty('addr')); // true, true
    // addr 추가
    console.log('Ref.has>', Reflect.has(user, 'addr')); // true
    console.log('obj.getOwnPropSym>', Object.getOwnPropertySymbols(user)); // obj.getOwnPropSym> [ Symbol() ]

    Reflect.deleteProperty(user, 'addr');
    console.log('addr' in user); // false
    // delete user.addr;

    user[`${user.id}'s name`] = `Mr. ${user.name}`;
    console.log(user.id, user.name);

    console.log('user entries=', Object.entries(user));
    console.log(user[0], user['123']);
    console.log(Object.keys(user)[2]);
}

// - writeable, enumerable, configurable 볼 수 있음
// console.log(Object.getOwnPropertyDescriptor(user, 'id'));
// console.log(Object.getOwnPropertyDescriptors(user));
// Object.defineProperty(user, 'age', { value: 39, writable: false });
// console.log(Object.getOwnPropertyDescriptors(user));
// // writable: false로 정의되면 키값 조회도 안됨
// console.log(Object.keys(user));

function createObj() {
    // key, value 한쌍
    const park = Object.fromEntries([
        ['id', 7, 8], // 더 줘도 소용없음
        ['nm', 'Park'],
    ]);
    console.log(park);

    const user1 = Object.assign({ x: 100 }, user);
    console.log('user1: ', user1);
    const user2 = { x: 100, ...user };
    console.log('user2: ', user2);
    const user3 = new Object(user);
    console.log('user3: ', user3);
    // Object 생성자 함수 매개변수에 object를 주면 그대로 반환, proto에 저장?
    const user4 = Object.create(user);
    console.log('user4: ', user4);
    console.log('__proto__', user4.__proto__);
}

// preventExtensions / seal / freeze 다시 살펴볼 것
