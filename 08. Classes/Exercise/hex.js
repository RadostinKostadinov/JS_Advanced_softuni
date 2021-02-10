//Write a class Hex, having the following functionality:
class Hex{
    //•	The constructor takes one parameter value, which is a number
    constructor(value){
        this.value = value;
    }

    //•	valueOf() This function should return the value property of the hex class.
    valueOf() {
        return this.value;
    };

    //•	toString() This function will show its hexadecimal value starting with "0x"
    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`; 
    }

    //•	plus({number}) This function should add a number or Hex object and return a new Hex object.
    plus(number) {
        if(number instanceof Hex) {
            return new Hex(this.value + number.value);
        } else {
            return new Hex(this.value + number);
        }
    }

    //•	minus({number}) This function should subtract a number or Hex object and return a new Hex object.
    minus(number) {
        if(number instanceof Hex) {
            return new Hex(this.value - number.value);
        } else {
            return new Hex(this.value - number);
        }
    }
    
    //•	parse({string}) Create a parse class method that can parse Hexidecimal numbers and convert them to standard decimal numbers.
    parse(stringHex){
        return parseInt(stringHex);
    }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
