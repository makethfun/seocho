// type Page = { page: number };
// type Title = { title: string };
// type PageTitle = Page | Title;

// const x1: PageTitle = { title: 'aaa' };
// const x2: PageTitle = { title: 'aaa', page: 2 };
// const x3: PageTitle = { page: 2 };

// console.log(x1.title, x3.page);
// if ('title' in x2) console.log(x2.title);

// interface Page {
//     readonly text: string;
// }
// // readonly는 수정이 안되므로 interface에서 사용시 주의. 메소드나 변경되는 값은 사용하지 말아야함.

// function read(page: Page) {
//     console.log(page.text);
//     page.text = 'Hello';
// }
// const pageIsh = {
//     text: 'Hello, world!',
// };
// pageIsh.text = 'Hello'; //OK
// read(pageIsh);

// 이미 가지고 있는 내장함수는 declare global을 하여 수정
declare global {
    interface Array<T> {
        first(): T;
        mapBy: (prop: string) => any;
        // filterBy: (prop: string, T: T) => any;
    }
}

Array.prototype.first = function () {
    return this[0];
};

Array.prototype.mapBy = function (prop: string) {
    return this.map((a) => a[prop]);
};

// Array.prototype.filterBy = function (prop: string, val: T) {
//     return this.filter((a) => a[prop] === val);
// };

console.log('---class----');

interface Animal {
    // 반드시 있어야 하는 것
    // 구현을 해도 되고 안해도 됨
    move(): void;
    // move: () => void;
}

// 여기는 string달지 말것, 왜냐하면 어짜피 string임
// const s: string = 'abc'
const s = 'abc';

class Pet implements Animal {
    // name: string;
    // name;
    protected name; // 누가봐도 string임 코드 가독성을 위해 안써줌
    // 똑같은 게 생기면 부모에게 올리면 됨
    // 만약 private 하게 만들려면?
    // private name
    // 상속만 하려면?
    // protected name
    // protected age: number = 0; // 초기화를 해줘야함. contructor에서는 무조건 초기화를 해줌
    // protected age!: number; // non null: !
    protected age?: number; // 선택적 : ?
    constructor(name: string) {
        this.name = name; // 초기화
    }
    // interface를 implements하는 것들은 다 해당 메소드를 구현해야 함
    move(): void {
        console.log('Pet is moving');
    }

    setAge(xage: number) {
        this.age = xage;
    }
    getAge() {
        return this.age;
    }
    getName() {
        // getter
        return this.name;
    }
}

// constructor가 생략되면 부모의 constructor가 타고 내려옴 -> prototype으로
class Dog extends Pet {
    constructor(name: string, age: number) {
        super(name); // 부모의 생성자.
        this.setAge(age);
    }
    name: string = '';
    bark() {
        console.log('Bow wow!', this.name);
    }

    move() {
        console.log('어슬렁 어슬렁');
    }

    hawling() {}
}
class Cat extends Pet {
    kukuki() {
        console.log('꾹!꾹!');
    }

    bark() {
        console.log('Bow wow!', this.name);
    }
}

const lucy = new Cat('Lucy');
lucy.bark();
const happy = new Dog('Happy');
happy.bark();
happy.hawling();

class WithMethod {
    myMethod() {}
}

// class WithProperty2 {
//     myProperty: () => void; // call signature constructor() {
//             this.myProperty = () => {
//                 console.log('Hello, this is myProperty!');
//     }

//     setMyProperty(fn){

//     }
//     }

// readonly 한번 설정하고 나면 변경할 수 없음
