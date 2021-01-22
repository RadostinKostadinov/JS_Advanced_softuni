function jansNot(array) {
    const [...myArr] = array;

    let isNotEnoughOperands = false;
    let isTooManyOperands = false;
    
    const myObj = {
        "numbers": [],
        "addNumber": function (num) {
            this.numbers.push(num);
        },
        "+": function () {
            this.numbers[this.numbers.length - 2] += this.numbers[this.numbers.length - 1];
            this.numbers.splice(this.numbers.length - 1, 1);
        },
        "-": function () {
            this.numbers[this.numbers.length - 2] -= this.numbers[this.numbers.length - 1];
            this.numbers.splice(this.numbers.length - 1, 1);
        },
        "*": function () {
            this.numbers[this.numbers.length - 2] *= this.numbers[this.numbers.length - 1];
            this.numbers.splice(this.numbers.length - 1, 1);
        },
        "/": function () {
            this.numbers[this.numbers.length - 2] /= this.numbers[this.numbers.length - 1];
            this.numbers.splice(this.numbers.length - 1, 1);
        },
    };

    myArr.forEach(letsWork);

    if(isNotEnoughOperands) return `Error: not enough operands!`;
    if(myObj.numbers.length > 1) return `Error: too many operands!`
    return myObj.numbers[0];


    function letsWork(element) {
        if (isNaN(element)) {     // operator
            if (myObj.numbers.length <= 1) {
                isNotEnoughOperands = true;
            } else {
                myObj[element]();
            };
        } else {    // number
            const el = Number(element);
            myObj.addNumber(el);
        }
    };
}
console.log(jansNot([3,
    4,
    '+']
));
console.log(jansNot([15,
    '/']
));
console.log(jansNot([7,
    33,
    8,
    '-']   
));
console.log(jansNot([5,
    3,
    4,
    '*',
    '-']   
));