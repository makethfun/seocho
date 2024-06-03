// 콜 스택 내에 동일한 식별자가 여러 개일 경우, JS엔진이 Outer Environment Reference를 활용하여 의사결정

// let wifi = false;

// function goTo2F(){
//     let wifi = true;

//     console.log(wifi);
// }

// goTo2F();

// 1. Environment Record에 wifi라는 변수와 변수에 바인딩된 값이 기록
// 2. 함수 선언문 방식이여서 완성된 객체가 Environment Record에 기록
// 3. goTo2F()가 실행되면서, Fn Execution Context 생성 - outer environment reference 
// 4. Fn Execution Context에 wifi가 Record
// 5. console.log() 실행되면서 wifi 출력, wifi의 값이 두개? 
// 식별자 결정(identifier resolution) - 콜 스택 내에 동일한 식별자가 여러개 일 때 JS 엔진이 Outer Environment Reference를 활용해서 의사결정
// 현재 Environment Record에 기록된 wifi값이 true 이므로 ture 출력


// let wifi = false;

// function goTo2F(){
//     let wifi = true;
//     console.log(wifi);
//     function goTo3F(){
//         let pet = 'puppy';
//         console.log(pet);
//         console.log(flower);
//     }
//     goTo3F();
// }

// goTo2F();

// goTo3F() 함수 호출
// 1. goTo3F() 함수가 실행, 새로운 Fn execution context 생성, pet이라는 식별자와 값이 Environment Record에 기록. 다음으로 console.log()가 실행. 현재 활성화된 실행 컨텍스트의 Environment Record에 pet이 있으므로 puppy 출력
// 2. 다음으로 flower 출력을 해야하지만 현재 Environment Record에 flower가 없음. 따라서 Outer Environment Reference가 가리키는 바깥 lexical environment로 이동. 다 없어서 global context에 lexical environment를 살펴봐도 flower가 없음
// 3. global context에도 없으므로 js엔진은 flower가 없다는 결론을 내리고 reference error 발생

// variable shadowing
// goTo2F() 함수 내부에서 wifi라는 변수를 선언하여 전역공간에 있는 동일한 이름의 wifi 라는 변수에는 접근 불가. 이렇게 동일한 식별자로 인해 상위 스코프에서 선언된 식별자의 값이 가려지는 현상을 변수 은닉화(variable shadowing)이라고 함

// function outerFunc(){
//     var x = 10;
//     var innerFunc = function (){
//         console.log(x);
//     };
//     innerFunc();
// }

// outerFunc();

// a closuer is the combination of a function and the lexical environment whithn which that function was declared. - 클로저는 함수와 그 함수가 선언되었을 때의 lexical environment의 조합이다.

// 반환된 내부함수가 자신이 선언되었을 때의 환경인 스코프를 기억하여 자신이 선언되었을 때의 환경(스코프) 밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수


// p. 72
// ** 질문) var는 함수레벨스코프가 적용, const/let은 블록레벨스코프가 적용.
// 함수, 블록이든 전역은 만들어질 때 const/let이 declarative environment record에 따로 생성되는 것 때문에 이런 결과가 발생?

// function varFn(){
//     var v = 1;
//     {
//         var v = 2, vv = 3;
//         console.log(v, vv, xx);
//     }
//     console.log(v, vv);
// }

// function letFn(){
//     let l = 1;
//     {
//         let l = 2, ll = 3;
//         console.log(l, ll);
//     }
//     console.log(l, ll); // ReferenceError: ll is not defined
// }

// var xx = 9;
// varFn();
// letFn();

// 질문) 함수/블록 둘다 static scope? dynamic scope는 뭐임?
// global object는 built-in api(prop & func) + host object(browser, node API) + host var/func 보유
// global scope와 global object는 다른 것. global scope의 const/let은 global object가 되는 것이 아니라 declarative environment record에 별도로 생성, 반면 선언없는 식별자는 global object에 생성

var gg = 1;
let bb = 2;

function f1(x, y){
    var gg = 11;
    let bb = 22;
    console.log('f1>', gg, bb, zz, f2, f2.length);
    f2('first');
    {
        const xx = 99;
        f2('nest-first');
        var zz = 88;
        function f2(t) { console.log(t, 'nested', xx, zz, lll); }           //  'lll' before initialization
        let lll = 0;
    }
    function f2(t, u) { console.log(t, 'inner', xx, zz) }
    var zz = 800;
    f2('second');
}
function f2(g){
    console.log(g, 'global f2>', gg, bb, xx, kk);
}

let xx = 9;
if(gg > 0){ var kk = 33; const yy = 9; }
f1(1,2);
f2('third');