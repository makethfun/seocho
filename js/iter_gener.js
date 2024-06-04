const obj = {
    values: [1, 2, 3, 4, 5],
    iterator(){

        return {
            next(){
                value:1 ,
                done: false
            }
        }
    }
};

console.log('obj: ', obj.values);

const it = obj.iterator();

console.log('obj.iterator: ', obj.valu);