function a() {
    console.log('세종대왕'.indexOf('대')); // 2
    console.log('세종대왕'.indexOf('황')); // -1

    console.log('세종대왕'.search('대')); // 2
    console.log('세종대왕'.search('황')); // -1

    console.log('세종대왕'.includes('대')); // true
    console.log('세종대왕'.includes('황')); // false

    console.log('세종대왕'.substring(1, 3)); // 종대
    console.log('세종대왕'.substring(2)); // 대왕

    console.log('세종대왕'.slice(1, 3)); // 종대

    const holiday = '한글날';
    const month = 10,
        day = 9;

    function f(txts, a, b, c) {
        console.log('txts>>', txts);
        console.log('a>>', a);
        console.log('b>>', b);
        console.log('c>>', c);
    }

    `${holiday}은 ${month}월 ${day}일 입니다.`;
    f`${holiday}은 ${month}월 ${day}일 입니다.`;
}

// pattern, flag, common character

const str = `
010-1234-5678
the7632@gmail.com
http://www.omdbapi.com/?apikey=218id79b&s=frozen
The quick brown fox jumps over the lazy dog.
abbbc.ccccdddd
`;

const regexp1 = /the/;
console.log(str.match(regexp1));
const regexp2 = /the/g;
console.log(str.match(regexp2));
const regexp3 = /the/gi;
console.log(str.match(regexp3));

console.log(str.match(/\./gi));
console.log(str.match(/\.$/gim));
console.log(str.match(/\.$/gi));
