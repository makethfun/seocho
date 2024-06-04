class Animal {
    // extends Object 생략 (쓰지 않기로 했다.)
    static ID = 1;
    name;
    constructor(name) {
        this.name = name;
        console.log('Born!!', this.name);
    }
    bark() {
        console.log('bark!!!');
    }
}

const ani = new Animal('Ani');
ani.bark();

class Dog extends Animal {
    // 다른 부분만 재정의 - 상속
    // overriding
    bark() {
        console.log('Bow wow!!!');
    }
}

class Cat extends Animal {
    #age = 10; // private : 외부에서 접근할 수 없음, this로 내적으로 접근
    bark() {
        console.log('meow~~', this.#age, this.name);
    }

    getAge() {
        return this.#age;
    }

    get age() {
        return this.#age; // 받아오기
    }

    set age(_age) {
        this.#age = _age; // 설정
    }
}

const lucy = new Dog('Lucy');
lucy.bark();

const nabi = new Cat('Nabi');
nabi.bark();
console.log(nabi.age); // age()
nabi.age = 12;
console.log(nabi.getAge()); // private 변수를 함수를 통해서 접근 - 접근자
console.log(nabi.name);

// speak는 Animal만 받을 수 있다 (다형성)
function speak(animal) {
    animal.bark(); // animal : 다형성(dog, cat 다 올 수 있음)
}

// interface : 규격, 규약
// 추상클래스 : 구현만 해놓고 실체는 없는 것 (interface), 상속 받은 객체가 구현해야함

speak(nabi);
speak(lucy);
speak(ani);

console.log('------------');
console.log(ani.ID, Animal.ID, ani.toString()); // static은 class에만 있음

// ex. Animal을 상속받은 pig 클래스를 작성하시오.

class Pig extends Animal {
    bark() {
        console.log('꿀꿀~~~~');
    }
}

const gg2 = new Pig('꿀꿀이');
gg2.bark();
