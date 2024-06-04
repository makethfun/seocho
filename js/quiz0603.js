const assert = require('assert');

function p155() {
    // 몰라요
    // const reduce = (arr, fn, initValue) => {
    //     // console.log('start');
    //     initValue === true
    //         ? console.log('restart')
    //         : (i in arr) {
    //             console.log (i)

    //         };
    //     return arr;
    // };

    console.log(reduce([1, 2, 3], (a, b) => a + b, 0));

    console.log([1, 2, 3].map((a, b) => a + b));
    console.log([1, 2, 3].reduce((a, b) => a + b));
}

function p156() {
    // reduce 함수를 만들라는 거?
    // reduce는 하나의 결과값을 가지는 게 아님? 각 자리에 대한 거? map이랑 차이가 뭥?
    // 이것도 모르겠네, 문해력..ㅠ
    const arr = [1, 2, 3, 4, 5];
    const square = (n) => n ** 2;
    const sqrt = (n) => Math.sqrt(n);
    const square3 = (n) => n ** 3;

    console.log(
        arr
            .reduce((acc, currentValue, init) => (acc += square(currentValue)))
            .reduce((acc, currentValue, init) => (acc += sqrt(currentValue)))
    );
}

function p158() {
    const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];

    const rangeSum = (...args) =>
        args.length === 2
            ? [...arr.slice(args[0], args[1] + 1)].reduce(
                  (start, end) => start + end
              )
            : args.length === 1
            ? [...arr.slice(args[0])].reduce((start, end) => start + end)
            : arr.reduce((start, end) => start + end);

    assert.deepStrictEqual(rangeSum(2, 5), 19);
    assert.deepStrictEqual(rangeSum(3, 5), 15);
    assert.deepStrictEqual(rangeSum(1, 4), 14);
    assert.deepStrictEqual(rangeSum(0, 4), 15);
    assert.deepStrictEqual(rangeSum(5, 8), 30);
    assert.deepStrictEqual(rangeSum(6, 8), 22);
    assert.deepStrictEqual(rangeSum(2, 8), 41);
    assert.deepStrictEqual(rangeSum(4, 4), 5);
    assert.deepStrictEqual(rangeSum(5), 30);
    assert.deepStrictEqual(rangeSum(2), 41);
    assert.deepStrictEqual(rangeSum(), 45);
}

p158();

function p159() {
    // 결과값 비교하려고 했음
    // test = function (n) {
    //     let pairs = [];
    //     for (let i = 1; n > i; i++) {
    //         let j = 0;
    //         j = n - i;
    //         pairs.push([i, j]);
    //     }
    //     console.log(pairs);
    // };

    const keyPair = function (arr, sum) {
        let temp = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (sum == arr[i] + arr[j]) {
                    return [i, j];
                }
            }
        }
    };

    assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
    assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
    assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
    // assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);
}
