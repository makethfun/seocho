function arrFun() {
    var stack = [];
    var queue = [];

    // stack : FILO
    stack.push(1);
    stack.push(2);
    stack.push(3);

    var stackOutput = stack.pop();
    stack.unshift(9);

    // queue : FIFO

    queue.push(10);
    queue.push(20);
    queue.push(30);

    var queueOutput = queue.shift();

    console.log('🚀 ~ stack:', stack, stackOutput);
    console.log('🚀 ~ queue:', queue, queueOutput);

    const list = ['글3', '글2', '글1'];

    console.log(list);

    function addArticle(article) {
        list.unshift(article);
    }

    function removeOld() {
        list.pop();
    }

    addArticle('글4');
    addArticle('글4');
    removeOld();

    console.log(list);

    console.log(list.indexOf('글4'));
    console.log(list.lastIndexOf('글4')); // 뒤쪽부터 마지막 index
}

function userFunction() {
    const hong = { id: 1, name: 'hong' };
    const kim = { id: 2, name: 'kim' };
    const park = { id: 3, name: 'park' };
    const choi = { id: 4, name: 'choi' };

    const users = [park, kim, hong, choi];

    // const id2user = users.findIndex(function (v, i){

    // })

    // 배열 안 객체 index 찾기
    // const id2user = users.findIndex((v, i) => {
    //     return v.id === 2;
    // });

    // 만약 없으면 return으로 -1을 줌
    const id2userIndex = users.findIndex((v, i) => v.id === 2);
    console.log('🚀 ~ id2userIndex:', id2userIndex);

    const id2user = users.find((v) => v.id === 2);
    console.log('🚀 ~ id2user:', id2user);

    for (const user of users) {
        console.log(user.id, user.name);
    }

    console.log('-------');
    users.forEach((v) => console.log(v.id, v.name));

    console.log('-------');
    // 항상 return은 배열로 해줌
    const userIds = users.map((v) => v.id);
    console.log('🚀 ~ userIds:', userIds);

    const evenUsers = users.filter((v) => v.id % 2 === 0);
    console.log('🚀 ~ evenUsers:', evenUsers);

    // 모든 조건이 만족해야함
    const isEveryLess5 = users.every((v) => v.id < 5);
    console.log('🚀 ~ isEveryLess5:', isEveryLess5);

    // return이 boolean인 함수 값 이름 정하기: is-, has-, did-
    // 조건이 하나라도 있으면 true
    // 함수형 프로그램의 배열은 linkedList임 (주소값을 찾아감) : sparse / 객체지향 프로그램의 배열은 dense
    const has3 = users.some((v) => v.id === 3);
    console.log('🚀 ~ has3:', has3);

    const last = (arr) => arr[arr.length - 1];
    const beforeLast = (arr) => arr[arr.length - 2];

    console.log(beforeLast(users));

    const beforeEnd = (arr) => arr.at(-2);
    console.log(beforeEnd(users));
}

function distruct() {
    const arr1 = [1, 2];
    const arr2 = [3, 4];

    const arr3 = arr1.concat(arr2);
    // 요즘에 많이 씀
    const arr4 = [...arr1, ...arr2];
    console.log(arr1, arr2, arr3, arr4);

    // arr3 바꾸지 않고 새로 배열 만들기 destructing 사용
    const [s, ...r] = arr3;
    console.log(r);
    const [f] = arr3;
    console.log(f);
    const [, ...sss] = arr3;
    console.log(sss);
    const [l1] = [...arr3].reverse();
    console.log(l1);
    console.log(arr3);

    const arr5 = [3, 2, 1, 4];
    const sortArr5 = [...arr5].sort();
    console.log(arr5);
    console.log(sortArr5);
}

const arr = [3, 4, 1, 2];
// ascending
arr.sort((a, b) => (a > b ? 1 : -1));
// descending
arr.sort((a, b) => (a > b ? -1 : 1));
arr.sort((a, b) => a - b); // 문자열은 안됨

const name = ['김', '최', '이', '박', '양'];
// console.log(name.slice(1, 3));
console.log(name.splice(1, 3));
console.log(name);
console.log(name.splice(1, 0, 2, 3, 4));
