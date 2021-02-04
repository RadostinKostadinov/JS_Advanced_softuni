const { expect } = require('chai');
const isSymmetric = require('./checkForSymmetry');

describe('isSymmetric test', () => {
    describe('CHECK INPUT', () => {
        it('input -> array, expect TRUE', () => {
            expect(isSymmetric([])).to.be.true;
        });
        it('input -> string, expect FALSE', () => {
            expect(isSymmetric('a')).to.be.false;
        });
        it('input -> number, expect FALSE', () => {
            expect(isSymmetric(1)).to.be.false;
        });
        it('input -> undefined, expect FALSE', () => {
            expect(isSymmetric(undefined)).to.be.false;
        });
        it('input -> true, expect FALSE', () => {
            expect(isSymmetric(true)).to.be.false;
        });
        it('input -> object, expect FALSE', () => {
            expect(isSymmetric({ asd: 2 })).to.be.false;
        });
        it('input -> function, expect FALSE', () => {
            expect(isSymmetric(isSymmetric())).to.be.false;
        });
        it('input -> null, expect FALSE', () => {
            expect(isSymmetric(null)).to.be.false;
        });

    });
    describe('CHECK FUNCTIONALITY', () => {
        it('empty array, expect TRUE', () => {
            expect(isSymmetric([])).to.be.true;
        });
        it('array that contains only one element, expect TRUE', () => {
            expect(isSymmetric(['a'])).to.be.true;
        });
        it('array that contains two equal elements(numbers), expect TRUE', () => {
            expect(isSymmetric([1, 1])).to.be.true;
        });
        it('array that contains two equal elements(strings)(even array), expect TRUE', () => {
            expect(isSymmetric(['a', 'a'])).to.be.true;
        });
        it('array that contains three equal elements[a,a,a](odd array), expect TRUE', () => {
            expect(isSymmetric(['a', 'a', 'a'])).to.be.true;
        });
        it('array that contains three elements[a,b,a], expect TRUE', () => {
            expect(isSymmetric(['a', 'b', 'a'])).to.be.true;
        });
        it('array that contains two NON equal elements, expect FALSE', () => {
            expect(isSymmetric(['a', 'b'])).to.be.false;
        });
        it('array that contains two NON equal elements(number,string), expect FALSE', () => {
            expect(isSymmetric([1, '1'])).to.be.false;
        });
        it('array that contains three NON equal elements, expect FALSE', () => {
            expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
        });
    });
});