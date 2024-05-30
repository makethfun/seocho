// 1. for문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오.
function p50(){
    for(let i = 0.1; i < 1; i = i + 0.1){
        if (i > 0.9) {
            console.log(1)
        } else { 
            console.log(Number(i.toFixed(1)));
        }
    }
}

// p50();


// 2. 1 ~ 10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오. 
// 무리수만 출력

function p51() {
    for(let i = 1; i < 11; i = i + 1){
        const num = +Math.sqrt(i).toFixed(3);
        if(num % 1){
            console.log(i, num)
        }
    }
}

// p51();


// 3. 오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.

const today = new Date();
switch(today.getDay()){
    case 1: 
        console.log('오늘은 월요일 입니다.');
        break;
    case 2: 
        console.log('오늘은 화요일 입니다.');
        break;
    case 3: 
        console.log('오늘은 수요일 입니다.');
        break;
    case 4: 
        console.log('오늘은 목요일 입니다.');
        break;
    case 5: 
        console.log('오늘은 금요일 입니다.');
        break;
    case 6: 
        console.log('오늘은 토요일 입니다.');
        break;
    default: 
        console.log('오늘은 일요일 입니다.');
        break;
}

arr = ['월', '화', '수', '목', '금', '토', '일']
console.log(`오늘은 ${arr[today.getDay()-1]}요일 입니다.`);

// 4. 다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오.
// (단, 소숫점 자리수는 긴쪽에 맞춘다)
console.log('----------------[4]----------------');

function compare (a, b){
    let str_a = a.toString().split('.')[1].length;
    let str_b = b.toString().split('.')[1].length;
    return str_a > str_b ? str_a : str_b;
}

function addPoints(a, b){
    return Number((a + b).toFixed(compare(a, b)));
}

console.log(addPoints(0.21354, 0.1));
console.log(addPoints(0.14, 0.28));
console.log(addPoints(0.34, 0.226));