const arr = [1, 2, 3, 4, 5];
const FN = {
    square: (n) => n ** 2,
    sqrt: (n) => Math.sqrt(n),
    cube: (n) => n ** 3,
};
const fns = [];
const $fnGroup = document.getElementById('fn-group');

function appendFn(f) {
    fns.push(FN[f]);
    const p = document.createElement('p');
    p.innerText = f;
    $fnGroup.appendChild(p);
    console.log(fns);
}

function run() {
    const ret = fns.reduce((acc, f) => acc.map((v) => f(v)), arr);
    document.getElementById('result').innerText = ret;
}

function paintFns() {}

function cancel() {
    fns.length = 0;
    $fnGroup.innerHTML = '';
}

// alert('JS');
console.log('this= ', this);
const $inp = document.getElementById('inp');
console.log($inp.value);
const $h3 = document.getElementsByTagName('h3')[0];
console.log($h3);

const $p = document.createElement('p');
$p.innerHTML = '<b>PPP</b>';
$p.style = 'font-size: 10px; color: green;';

$h3.appendChild($p);

// event listener
const $btn = document.getElementsByClassName('btn')[0];

if ($btn) {
    $btn.addEventListener('click', function (evt) {
        evt.stopPropagation();
        this.innerText = this.innerText === 'TTT' ? 'BTN' : 'TTT';
    });
}

// 바깥쪽 눌렀는데 안까지 영향을 받음 : captureing - 구역을 잡을 때 사용
// 안쪽을 눌렀는데 바깥까지 영향을 받음 : bubbling
const $btnGroup = document.getElementsByClassName('btn-group')[0];
$btnGroup?.addEventListener(
    'click',
    () => {
        console.log('aaaaaaaa');
    },
    true // capturing
);

function submitForm(evt) {
    evt.preventDefault();
    console.log('Submit!!!', evt);
}
