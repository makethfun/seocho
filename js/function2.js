const f2 = 
    f => 
        (...args) => 
            console.log(f.name, f(...args));

const fx = f2(Math.max);
fx(1, 3, 5, 7);

function samef2(f){
    return function (...args){
        console.log(f.name, f(...args));
    };
}

const fns = [Math.max, Math.min, parseInt];
for (const f of fns){
    console.log(f.name, f( 1, 3, 5 ));
}


// 상위 스코프의 argument(f)에 접근하는 closure
function desc(){

    function f2(f) {
        return function(...args) {
            console.log(f.name, f(...args));
        }
    }
    
    const af1 = function (...args) {
        console.log(f.name, f(...args));
    };
    
    const af2 = (...args) => {
        console.log(f.name, f(...args));
    };
    
    const f22 = function (f) {
        return af2;
    }
    
    f2(Math.max)(1, 3, 2, 5, 4);
    
    // curring
    const f = () => () => {};
    
    // const af = () => { };
    // function af() { }
    
    // const ff = () => af;
    
    // function ff() {
    //     return af;
    // }
    
    function ff() {
        let count = 0;
        return function () { 
            return ++count; 
        } // closure
    }
    
    
    // f(식당) {
    //     return 식당.메뉴판
    // }
}

console.log('---------------------------');

const arr = [1, 2, 3, 4, 5];

Array.prototype.first = function () {
    return this[0];
}
Array.prototype.last = function () {
    return this[this.length - 1];
}

console.log(arr.first(), arr.last());

// unary 함수

// [1, 2, 3].map( (a, idx, org) => console.log(a, idx, org) )
['1', '2', '3'].map( (a, idx, org) => console.log(parseInt(a)) );

const arr2 = [1, 2, 3]