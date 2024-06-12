// https://jsonplaceholder.typicode.com
// user의 이름을 구하는 함수를 작성하시오.

const URL = 'https://jsonplaceholder.typicode.com';

// async function getUserName (){}
const getUserName = async (userId) => {
    const res = await fetch(`${URL}/users/${userId}`);

    // console.log('🚀 res:', res);
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('OK');
        }, 2000);
    }); // 생성자, 약속을 어떤 상황에서는 지킬지, 아니면 못지킬지 정하는 것
    const data = await res.json(); // 데이터를 모아줌?
    // console.log('🚀 data:', data);
    return data?.name;
};

console.log('1번 유저명: ', await getUserName(1));
