const { expect } = require('chai');
const isOddOrEven = require('./evenOrOdd');

describe('isOddOrEven function test', () => {
    it('check argument type, (must be string)', () => {
        expect(isOddOrEven(undefined)).to.be.undefined;
        expect(isOddOrEven(true)).to.be.undefined;
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven(1)).to.be.undefined; //should be 1n (BigInt)
        expect(isOddOrEven({ 'a': 1 })).to.be.undefined;
        expect(isOddOrEven(isOddOrEven())).to.be.undefined;
        expect(isOddOrEven(null)).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
    });
    it('check "even" return', ()=> {
        expect(isOddOrEven('')).to.be.equal('even');
        expect(isOddOrEven('aa')).to.be.equal('even');
        expect(isOddOrEven('aaaa')).to.be.equal('even');
    });
    it('check "odd" return', ()=> {
        expect(isOddOrEven('a')).to.be.equal('odd');
        expect(isOddOrEven('aaa')).to.be.equal('odd');
        expect(isOddOrEven('aaaaa')).to.be.equal('odd');
    });
});