const dealership = require('./dealership.js');
const { expect } = require('chai');
const { carEquipment } = require('./dealership.js');

describe('DEALERSHIP testing', () => {
    describe('newCarCost', () => {
        it('happy values - discount', () => {
            expect(dealership.newCarCost('Audi A4 B8', 16000)).to.equal(1000, 'discounted price');
        });
        it('happy values - regular price /without discount/', () => {
            expect(dealership.newCarCost('VW Golf III', 10000)).to.equal(10000, 'regular price /without discount/');
        });
    });

    describe('carEquipment', () => {
        it('happy values', () => {
            expect(dealership.carEquipment(['a'], [0])).to.deep.equal(['a'], 'input: [\'a\'], [0]');
            expect(dealership.carEquipment(['a','b','c'], [0])).to.deep.equal(['a'], 'input: [\'a\'], [0]');
            expect(dealership.carEquipment(['a','b','c'], [1])).to.deep.equal(['b'], 'input: [\'b\'], [0]');
            expect(dealership.carEquipment(['a','b','c'], [0, 2])).to.deep.equal(['a', 'c'], 'input: [\'a\', \'c\'], [0]');
        });
    });

    describe('euroCategory', () => {
        it('happy values', () => {
            expect(dealership.euroCategory(5)).to.equal('We have added 5% discount to the final price: 14250.');
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
    });
});