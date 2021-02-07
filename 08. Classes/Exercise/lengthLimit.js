class Stringer {
    constructor(string, lengthOfString) {
        this.innerString = string;
        this.innerLength = lengthOfString;
    }

    increase(length) {
        this.innerLength += Number(length);
    }

    decrease(length) {
        if ((this.innerLength - Number(length)) >= 0) {
            this.innerLength -= Number(length);
        } else {
            this.innerLength = 0;
        }
    }

    toString() {
        if(this.innerLength == 0) {
            return '...';
        } else if(this.innerLength >= this.innerString.length) {
            return this.innerString;
        } else {
            return `${this.innerString.slice(0, this.innerLength)}...`;
        }
    }
}

let test = new Stringer('Test', 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test

let s = new Stringer('Viktor', 6);
s.decrease(3);
console.log(s.toString());
