class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(bud) {
        bud = Number(bud);
        if (bud < 0) {
            throw Error('The budget cannot be a negative number');
        }

        this._budget = bud;
    }

    shopping([type, price]) {
        price = Number(price);
        if (this.budget < price) {
            throw Error('Not enough money to buy this product');
        }

        this.budget -= price;
        this.products.push(type);
        return `You have successfully bought ${type}!`;
    }

    recipes({ recipeName, productsList }) {
        if (productsList.some(product => this.products.includes(product) == false)) {
            throw Error('We do not have this product');
        }

        this.dishes.push({ recipeName, productsList });
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, guestdish) {
        if (this.dishes.some(dish => dish.recipeName == guestdish) == false) {
            throw Error('We do not have this dish');
        }

        if (Object.keys(this.guests).includes(name)) {
            throw Error('This guest has already been invited');
        }

        this.guests[name] = guestdish;
        return `You have successfully invited ${name}!`; 
    }

    showAttendance() {
        return Object.entries(this.guests)
            .map(([name, dish2]) => `${name} will eat ${dish2}, which consists of ${this.dishes.reduce((acc, dish) => {
                if (dish.recipeName == dish2) {
                    acc.push(dish.productsList);
                } return acc;
            }, [])[0].join(', ')}`)
            .join('\n');
    }
}
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 5]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Stivun', 'Makaroni');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
