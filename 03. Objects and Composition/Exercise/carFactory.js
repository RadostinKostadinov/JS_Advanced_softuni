function carFactory(object) {
    const storage = {
        "installEngine": function (object) {
            const powerNeeded = object.power;
            delete object.power;
            if (powerNeeded <= 90) {
                object.engine = {
                    power: 90,
                    volume: 1800
                }
            } else if (powerNeeded <= 120) {
                object.engine = {
                    power: 120,
                    volume: 2400
                }
            } else {
                object.engine = {
                    power: 200,
                    volume: 3500
                }
            };
        },
        "installCarriage": function (object) {
            const type = object.carriage;
            const color = object.color;
            delete object.color;
            delete object.carriage;
            object.carriage = {
                type: type,
                color: color
            }
        },
        "installWheels": function (object) {
            const wheelsize = Math.floor(object.wheelsize) % 2 == 0 ? Math.floor(object.wheelsize) - 1 : Math.floor(object.wheelsize);
            delete object.wheelsize;
            object.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];

        }
    }

    storage.installEngine(object);
    storage.installCarriage(object);
    storage.installWheels(object);

    return object;
}

console.log(carFactory(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));
console.log(carFactory(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }

));

// { model: 'VW Golf II',
//   engine: { power: 90,
//             volume: 1800 },
//   carriage: { type: 'hatchback',
//               color: 'blue' },
//   wheels: [13, 13, 13, 13] }
