const assert = require('assert');

function p145() {
    const arr2 = [1, 2, 3, 4, 5];

    console.log('ex1) [2,3]을 추출');
    console.log(arr2.slice(1, 3));

    console.log('ex2) [3]부터 모두 다 추출');
    console.log([...arr2.slice(2)]);

    console.log('ex3) [2,3,4] 제거하기');
    console.log('제거 :', arr2.splice(1, 3));
    console.log('현재 arr2 : ', arr2);

    console.log('ex4) 복원하기');
    console.log('현재 arr2 : ', arr2);
    console.log('복구 :', arr2.splice(1, 0, 2, 3, 4));
    console.log('현재 arr2 : ', arr2);

    console.log('ex5) [3] 부터 끝까지 제거하기');
    console.log('현재 arr2 : ', arr2);
    console.log('제거 :', arr2.splice(2, arr2.length));
    console.log('현재 arr2 : ', arr2);

    console.log(`ex6) 복원하기`);
    console.log('현재 arr2 : ', arr2);
    console.log('복구 :', arr2.splice(2, 0, 3, 4, 5));
    console.log('현재 arr2 : ', arr2);

    console.log(`ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기`);
    console.log('현재 arr2 : ', arr2);
    console.log('복구 :', arr2.splice(2, 0, 'X', 'Y', 'Z'));
    console.log('복구 :', arr2.splice(5, 1));
    console.log('현재 arr2 : ', arr2);

    console.log(`ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.`);
    console.log('복원: ', arr2.splice(2, 3), arr2.splice(2, 0, 3), arr2);
    console.log([
        ...arr2.slice(0, 2),
        'X',
        'Y',
        'Z',
        ...arr2.slice(3, arr2.length),
    ]);
}

// p145();

function p147() {
    const arr = [1, 2, 3, 4];

    function push(a, ...agrs) {
        return [...a, ...agrs];
    }

    function pop(a, idx) {
        return idx !== null
            ? [...a.slice(0, idx)]
            : [...a.slice(0, a.length - 1)]; // 이 부분 Error?
    }

    function unshift(a, ...args) {
        return [...args, ...a];
    }

    function shift(a, idx) {
        return idx != null
            ? [...a.slice(idx, a.length)]
            : [...a.slice(1, a.length)];
    }

    assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
    assert.deepStrictEqual(pop(arr), [1, 2, 3]); // 왜 [1, 2, 3,4] ? null이 안먹음
    assert.deepStrictEqual(pop(arr, 2), [1, 2]); // 2개 팝!
    assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
    assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
    assert.deepStrictEqual(shift(arr), [2, 3, 4]);
    assert.deepStrictEqual(shift(arr, 2), [3, 4]);
    assert.deepStrictEqual(arr, [1, 2, 3, 4]);
}

// p147();

function p148() {
    let arr = [1, 2, 3, 4];

    function deleteArray(a, ...args) {
        let startNum = args[0];
        let endNum = args[1];
        endNum !== undefined
            ? (a = [...a.slice(0, startNum), ...a.slice(endNum, a.length)])
            : (a = [...a.slice(0, startNum)]);
        return a;
    }

    assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]); // 2부터 몽땅 지워!
    assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]); // 1부터 3 앞까지 지워!
    assert.deepStrictEqual(arr, [1, 2, 3, 4]);

    const Hong = { id: 1, name: 'Hong' };
    const Kim = { id: 2, name: 'Kim' };
    const Lee = { id: 3, name: 'Lee' };
    var users = [Hong, Kim, Lee];

    function deleteObjectArray(a, ...args) {
        // console.log(args.length);
        // console.log(typeof args);
        typeof args === 'number'
            ? args.length < 2?
            console.log(args[0]) : console.log('what')
            //     ? (a = [...a.slice(0, args[0] - 1)])
            //     : (a = [...a.slice(args[0] - 1, args[1])])
            // : console.log(args);
        // fn === number ? a = [...a.slice] :
        // console.log(Object.getOwnPropertyNames(a));
        // return a;
    }

    console.log(deleteObjectArray(users, 2));
    // console.log(deleteObjectArray(users, 1, 2));
    // console.log(deleteObjectArray(users, 'id', 2));
    // console.log(deleteObjectArray(users, 'name', 'Lee'));

    // console.log(users);
}

p148();
