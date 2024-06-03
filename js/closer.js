// 클로저 함수 예
// 할인
// 외부에서는 dcRate를 알 수 없음

function discount() {
    const dcRate = 0.1;
    // 해당 return 값이 함수가 됨. 나중에 dc = discount(); 하면 return 이후 함수가 호출
    return function X(price) {
        return price * dcRate;
    };
}

const items = [
    {
        item: '상품 A',
        price: 32000,
    },
];

const dc = discount();
for (const { item, price: orgPrice } of items) {
    const salePrice = orgPrice - dc(orgPrice);
    console.log(`${item}: ${orgPrice}원 ---> ${salePrice.toLocaleString()}원`);
}

// 동시접속자 수
function currentCount() {
    let currCount = 0;
    return {
        connect() {
            currCount += 1;
        },
        disconnect() {
            currCount -= 1;
        },
        getCount() {
            return currCount;
        },
        get count() {
            return currCount;
        }, // get을 쓰면 method가 property로 바뀜
    };
}

const actions = ['입장', '입장', '입장', '퇴장', '입장', '퇴장'];

const counter = currentCount();

for (const action of actions) {
    action === '입장' ? counter.connect() : counter.disconnect();
    console.log(`${action} -> 현재 입장객: ${counter.count} 명`);
}

console.log('Current User Count=', counter.count);
console.log(counter.getCount());
