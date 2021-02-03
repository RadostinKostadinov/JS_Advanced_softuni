
function add(num){
    let internalSum = 0;
    internalSum += num;


    function add2(b){
        internalSum += b;
        return add2;
    };

    add2.toString = () => internalSum;
    return add2;
}
console.log(add(1)(6)(-3).toString());
// Write a function that adds a number passed to it to an internal sum and
// returns itself with its internal sum set to the new value,
//     so it can be chained in a functional manner.