function p130() {
    const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);

    console.log(fn(1, 6));
    console.log(fn(2, 7));
    console.log(fn(3, 8));
}

function p131() {
    const dog = {
        name: 'Maxx',
        showMyName: () => {
            console.log(`My name is ${this.name}.`);
        },
        whatsYourName() {
            setTimeout(() => {
                this.showMyName();
            }, 1000);
        },
    };
    dog.whatsYourName();
}
// p131();

function p132() {
    const before = () => console.log('before....');
    const after = () => console.log('after....');
    const someFn = () => console.log('do something...1');

    const template = function (fn) {
        before();
        fn();
        return after;
    };

    const temp = template(someFn);
    temp();
}

function p133() {
    const before = () => console.log('before....');
    const after = () => console.log('after....');
    const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);

    // const template = function (fn) {
    //     before();
    //     setTimeout(() => {
    //         after();
    //     }, 500);
    //     return fn;
    // };
    const template = function newFn(fn) {
        before();
        // newFn(fn)();// unary 함수?

        return after;
    };

    const temp = template(someFn);
    temp('lnsol', 'hello');
}
p133();
