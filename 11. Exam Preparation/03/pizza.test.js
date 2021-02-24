const pizzUni = require('./pizza.js');
const { expect } = require('chai');


describe('PIZZUNI TEST', () => {
    describe('makeAnOrder', () => {
        it('happy values', () => {
            const obj = {
                orderedPizza: 'pizzaName',
                orderedDrink: 'drinkName'
            };
            const obj2 = {
                orderedPizza: 'pizzaName',
            };
            expect(pizzUni.makeAnOrder(obj)).to.equal(`You just ordered ${obj.orderedPizza} and ${obj.orderedDrink}.`);
            expect(pizzUni.makeAnOrder(obj2)).to.equal(`You just ordered ${obj2.orderedPizza}`);
        });
        it('function makeAnOrder throws error while input object not have property "orderedPizza"', () => {
            const obj = {
                orderedDrink: 'drinkName'
            };
            const obj2 = {};
            expect(() => pizzUni.makeAnOrder(obj)).to.throw('You must order at least 1 Pizza to finish the order.');
            expect(() => pizzUni.makeAnOrder(obj2)).to.throw('You must order at least 1 Pizza to finish the order.');
        });
    });
    describe('getRemainingWork', () => {
        it('happy values', () => {
            const arr = [{pizzaName: 'pizza pizza', status: 'preparing'}];
            const arr2 = [{pizzaName: 'pizza pizza', status: 'preparing'}, {pizzaName: 'pizza pizza', status: 'ready'}];
            const arr3 = [{pizzaName: 'pizza pizza', status: 'preparing'}, {pizzaName: 'pizza2pizza2', status: 'preparing'}];
            const arr4 = [{pizzaName: 'pizza pizza', status: 'ready'}];

            
            expect(pizzUni.getRemainingWork(arr)).to.equal('The following pizzas are still preparing: pizza pizza.');
            expect(pizzUni.getRemainingWork(arr2)).to.equal('The following pizzas are still preparing: pizza pizza.');
            expect(pizzUni.getRemainingWork(arr3)).to.equal('The following pizzas are still preparing: pizza pizza, pizza2pizza2.');
            expect(pizzUni.getRemainingWork(arr4)).to.equal('All orders are complete!');
        });
    });
    
    describe('orderType', () => {
        it('happy values', () => {
            expect(pizzUni.orderType(20,'Carry Out')).to.equal(18);
            expect(pizzUni.orderType(20,'Delivery')).to.equal(20);
        });
    });
});
