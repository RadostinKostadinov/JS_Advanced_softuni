const expect = require('chai').expect;
const createCalculator = require('./addSubtract.js');

describe('createCalculator function test', () => {
    it('return object with properties: add, subtract, get', () => {
        expect(createCalculator()).to.have.ownProperty('add');
        expect(createCalculator()).to.have.ownProperty('subtract');
        expect(createCalculator()).to.have.ownProperty('get');
    });
    it('keep an internal sum', () => {
        expect(createCalculator().get()).to.equal(0);
        const createdObject = createCalculator();
        createdObject.add(2);
        expect(createdObject.get()).to.equal(2);
        createdObject.add(2);
        expect(createdObject.get()).to.equal(4);
    });
    it('add and substract working', () => {
        const createdObject = createCalculator();
        createdObject.add(2);
        createdObject.add('2');
        expect(createdObject.get()).to.equal(4);
        createdObject.subtract(1);
        expect(createdObject.get()).to.equal(3);
        createdObject.subtract('1');
        expect(createdObject.get()).to.equal(2);
    });
});