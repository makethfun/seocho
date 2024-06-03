function p154() {
    const hong = { id: 1, name: 'Hong' };
    const choi = { id: 5, name: 'Choi' };
    const kim = { id: 2, name: 'Kim' };
    const lee = { id: 3, name: 'Lee' };
    const park = { id: 4, name: 'Park' };
    const users = [kim, lee, park];

    function addUser(user) {
        return [...users, user];
    }

    const ret1 = addUser(hong);
    console.log(ret1);

    console.log('-----------------');
    function removeUser(user) {
        return users.filter((u) => u.id !== user.id);
    }

    const ret2 = removeUser(lee);
    console.log(ret2);

    console.log('-----------------');

    function changeUser(before, after) {
        return users.map((u) => {
            if (u.id === before.id) return after;
            else return u;
        });
    }

    const ret3 = changeUser(kim, choi);
    console.log(ret3);
}

function p() {}

const arr = [1, 2, 3, true];
const ret1 = arr.map((a) => a.toString());
console.log(ret1);

// const classNames = (...args) => (args == '' ? undefined : args.join(' '));
const classNames = (...args) => args.filter((a) => !!a.trim()).join(' ');

// const classNames = function (...args) {
//     if (args !== '') {
//         return args.join(' ');
//     } else {
//         return args;
//     }
// };

const ret2 = classNames('', 'a b c', 'd', ' ', 'e');
console.log(ret2);

const ret3 = classNames('', 'a b c', 'd', ' ', 'e');
console.log(ret2);
