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
