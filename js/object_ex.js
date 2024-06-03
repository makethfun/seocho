const arr = [100, 200, 300, 400, 500, 600, 700];

// 1. index(key) 출력

console.log('1. index(key) 출력');
for (const i in arr) {
    console.log(Number(i))
};


console.log('2. element(value) 출력');
for (const k in arr) { 
    console.log(Number(arr[k]))
};

const obj = {
    name: 'lim',
    addr: 'Yongsan',
    level: 1,
    role: 9,
    receive: false,
}

console.log('\n3. for-in을 사용하여 key 출력');
for (const i in obj) { 
    console.log(i);
};

console.log('\n4. for-in을 사용하여 value 출력');
for (const i in obj) { 
    console.log(obj[i]);
};

console.log('\n5. for-of을 사용하여 value 출력');
for (const i of Object.values(obj)) { 
    console.log(i);
};

console.log('\n6. level 프로퍼티를 노출 안되게');
Object.defineProperty(obj, 'level', { enumerable: false });
Object.entries(obj);

console.log('\n7. role 프로퍼티를 읽기전용 ');
Object.freeze(obj, 'role');
obj.role = 99;
console.log('\n7. role 프로퍼티를 읽기전용 ', Object.entries(obj));

// p. 113
function makeObjectFromArray(arr){
    // 구현 (of로 받아와서 destructuring)
    // const [k, ...v] => {k: v}
    const obj = {};
    for(const [k, ...v] of arr){
        // const k = a[0]
        console.log(k, v);
        obj[k] = v;
    }
    return obj;
}

const obj1 = makeObjectFromArray([
    ['A', 10, 20],
    ['B', 30, 40],
    ['C', 50, 60, 70],
]);
console.log(obj1);

function makeArrayFromObject(o){
    // Object.keys() => obj[k] => [k, ...obj[k]], Object.values
    const arr = [];
    for(const k in obj){
        console.log(k)
        arr.push([k, ...obj[k]]);
    }

    return arr;
}

const arrobj = makeArrayFromObject(obj)

// 복사
function copyObject1(o){
    // const newObj = {};
    // for (const k in obj){
    //     newObj[k] = obj[k];
    // }

    return {...o}
}

function copyObject(o){
    const newObj = {};
    for (const k in obj){
        newObj[k] = obj[k];
    }
    return newObj;
}

const kim = { nid:3, nm: 'Hong', addr: 'Pusan' };
