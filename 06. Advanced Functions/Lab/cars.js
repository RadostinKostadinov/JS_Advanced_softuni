function cars(array) {
    const [...myArr] = array;


    function hadProperty(object, property) {
        for (const keyC of Object.keys(object)) {
            if (object[keyC].hasOwnProperty(property)) {
                return true;
            }
        }
    }
    function createCarCollection() {
        const cars = {};

        function create(name, _isChild, parentName) {
            if (parentName === undefined) {
                cars[name] = {};
            } else {
                cars[name] = Object.create(cars[parentName]);
            }
        };
        function set(name, key, value) {
                cars[name][key] = value;
        };
        function print(name) {
            console.log(cars);
        };

        return {
            create,
            set,
            print,
        };
    };

    const myCollection = createCarCollection();

    myArr.forEach(input => {
        const [command, p1, p2, p3] = input.split(' ');
        myCollection[command](p1, p2, p3);
    });
    console.log(myCollection);
}

//трябва да имаме функция за създаване на обект и да му закача свойства .set.print.createChild и функция да можем да го закачим към друг обект.

//Обхождаме масива

//За всеки ред изпълняваме функцията

console.log(cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
));

