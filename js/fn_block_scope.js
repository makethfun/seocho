function varFn(){
    var v = 1;
    {
        var v = 2, vv = 3;
        console.log(v, vv, xx);
    }
    console.log(v, vv);
}

letFn();

const c = 0;

function letFn(){
    let l = 1;
    {
        let l = 2, ll = 3;
        console.log(l, ll);
    }
    console.log(l, ll);
}

var xx = 9;
varFn();
letFn();