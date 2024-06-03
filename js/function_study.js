// function Dog(name) {
//     this.name = name;
// }

// const lucy = new Dog('Lucy');
// console.log(lucy.name);

function wayOfCallFn() {
    // make a function
    function hi() {
        return 'hello, kkk.';
    }

    // variable in function
    const fn = hi;

    // object in function
    obj = { fn: hi };

    // array in function
    a = [hi];

    console.log(fn());
    console.log(obj.fn());
    console.log(a[0]());

    function printFnReturnValue(fn) {
        console.log(fn.name, fn());
    }

    printFnReturnValue(hi);
}

// ------arguments(값) / parameter(변수)

function destSpread() {
    function f() {
        console.log(arguments);
    }

    f(1, 2);

    // destructuring & spread in parameter

    function ds1({ id, name }) {
        return id, name;
    }
    console.log(ds1({ id: 1, name: 'Hong' }));

    function ds2([id, name]) {
        return id, name;
    }
    console.log(ds2([1, 'k']));

    function ds3(...args) {
        return args;
    }

    console.log(ds3(1, 2));
}

function overRiding() {
    function ff(a) {
        return a + 100;
    }

    function ff(a, b) {
        return a + b;
    }

    console.log(ff(10), ff(10, 20));

    function ff(a, b = 100) {
        return a + b;
    }
    console.log(ff(10, 20), f(10));
}

function callBy() {
    function f(n) {
        if (n.hasOwnProperty('id')) n.id += 1;
        else n += 1;
    }

    let n = 10;
    let nobj = { id: 10 };
    f(n); // call by value - f(n)의 else에 return 값을 주면 n = 11이 됨 / 하지만 안주면 그냥 사라짐
    f(nobj); // call by reference

    console.log(n, nobj);
}

function statement() {
    // 선언식에 함수 명을 써주는 이유? 식별자에서 우선순위로 재귀호출 가능
    const f1 = function ff(x, isLast) {
        console.log(x);
        if (isLast) return;
        else ff('efg', true);
    };

    // f1(); // ok
    // ff(); // ReferenceError: ff is not defined
}

function iife() {
    // 즉시호출함수(immediately invoked function expression)
    // 불필요한 전역 변수와 메모리 낭비를 줄일 수 있음
    // closure / await 활용 가능
    (function () {
        console.log('a');
    })();

    // inc란 무엇?
    const counter = (function () {
        let curr = 0;
        return {
            inc(n) {
                curr += n;
            },
        };
    })();

    console.log(counter);

    // call을 즉시실행 시키면?
    const obj = {
        id: 1,
        type: 'a',
    };

    (function () {}).call(obj);
}

const expressFn = function(name){
    this.name = name;
    console.log(this, new.target, this.name, name);
}

const arrowFn = (name) => {
    this.name = name;
    console.log(this, new.target, this.name, name);
}

expressFn('expFn');
console.log('------------');
arrowFn('afn');