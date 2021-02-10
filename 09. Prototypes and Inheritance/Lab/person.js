class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    };

    set firstName(name) {
        this._firstName = name;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(name) {
        this._lastName = name;
    }

    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }

    set fullName(name) {
        const [firstname, lastname] = name.split(' ');
        if(firstname != '' && lastname != '') {
            this._firstName = firstname;
            this._lastName = lastname;
        }
    }
}

let person = new Person('Peter', 'Ivanov');
console.log(person.fullName); //Peter Ivanov
person.firstName = 'George';
console.log(person.fullName); //George Ivanov
person.lastName = 'Peterson';
console.log(person.fullName); //George Peterson
person.fullName = 'Nikola Tesla';
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
