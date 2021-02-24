class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.capacity <= 0) {
            throw Error('Not enough parking space.');
        }

        this.capacity--;
        this.vehicles.push({ carModel, carNumber, payed: false });

        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        if (this.vehicles.some(car => car.carNumber == carNumber) == false) {
            throw Error('The car, you\'re looking for, is not found.');
        }
        const car = this.vehicles.find(car => car.carNumber == carNumber);

        if (car.payed == false) {
            throw Error(`${car.carNumber} needs to pay before leaving the parking lot.`);
        }

        this.vehicles = this.vehicles.filter(car => car.carNumber != carNumber);

        this.capacity++;
        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        if (this.vehicles.some(car => car.carNumber == carNumber) == false) {
            throw Error(`${carNumber} is not in the parking lot.`);
        }

        const car = this.vehicles.find(car => car.carNumber == carNumber);

        if (car.payed == true) {
            throw Error(`${car.carNumber}'s driver has already payed his ticket.`);
        }

        car.payed = true;
        return `${car.carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        if (!carNumber) {
            let values = Object.entries(this.vehicles);
            values = values.reduce((acc, curr) => {
                return [...acc, `${curr[1].carModel} == ${curr[1].carNumber} - ${curr[1].payed}`];
            }, []);

            values.sort((a, b) => {
                return a.slice(0, a.indexOf(' ==')).localeCompare(b.slice(0, b.indexOf(' ==')));
            });

            values = values.map(car => {
                if (car.indexOf('true') != -1) {
                    car = car.slice(0, car.indexOf('true')) + 'Has payed';
                    return car;
                } else {
                    car = car.slice(0, car.indexOf('false')) + 'Not payed';
                    return car;
                }
            });
            values.unshift(`The Parking Lot has ${this.capacity} empty spots left.`);
            return values.join('\n');

        }

        const car = this.vehicles.find(car => car.carNumber == carNumber);
        if (car.payed == true) {
            return `${car.carModel} == ${car.carNumber} - Has payed`;
        }
        return `${car.carModel} == ${car.carNumber} - Not payed.`;

    }
}

const parking = new Parking(12);

console.log(parking.getStatistics());
console.log(parking.getStatistics('ABV'));

//console.log(parking.pay('TX3691CA'));
//console.log(parking.removeCar('TX3691CA'));
