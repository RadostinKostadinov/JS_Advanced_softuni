const { expect } = require('chai');
const lookupChar = require('./charLookup');

describe('Char Lookup function test', () => {
    it('typeof first argument === string ? PASS : FAIL', () => {
        expect(lookupChar(undefined, 0)).to.be.undefined;
        expect(lookupChar(true, 0)).to.be.undefined;
        expect(lookupChar(1, 0)).to.be.undefined;
        expect(lookupChar(1, 0)).to.be.undefined; //should be 1n (BigInt)
        expect(lookupChar({ 'a': 1 }, 0)).to.be.undefined;
        expect(lookupChar(lookupChar(), 0)).to.be.undefined;
        expect(lookupChar(null, 0)).to.be.undefined;
        expect(lookupChar([], 0)).to.be.undefined;
    });
    it('typeof second argument === number ? PASS : FAIL', () => {
        expect(lookupChar('a', undefined)).to.be.undefined;
        expect(lookupChar('a', true)).to.be.undefined;
        expect(lookupChar('a', 'a')).to.be.undefined;
        expect(lookupChar('a', '')).to.be.undefined; //should be 1n (BigInt)
        expect(lookupChar('a', { 'a': 1 })).to.be.undefined;
        expect(lookupChar('a', lookupChar())).to.be.undefined;
        expect(lookupChar('a', null)).to.be.undefined;
        expect(lookupChar('a', [])).to.be.undefined;
        expect(lookupChar('a', 2.4)).to.be.undefined;
        expect(lookupChar('a', '2.4')).to.be.undefined;
    });
    it('is the index have a correct value', () => {
        expect(lookupChar('', 0)).to.equal('Incorrect index');
        expect(lookupChar('', -1)).to.equal('Incorrect index');
        expect(lookupChar('', 1)).to.equal('Incorrect index');
        expect(lookupChar('a', -1)).to.equal('Incorrect index');
        expect(lookupChar('a', 1)).to.equal('Incorrect index');
        expect(lookupChar('a', 2)).to.equal('Incorrect index');
        expect(lookupChar('aa', -1)).to.equal('Incorrect index');
        expect(lookupChar('aa', 2)).to.equal('Incorrect index');
        expect(lookupChar('aa', 3)).to.equal('Incorrect index');
    });
    it('tests with valid parameters', () => {
        expect(lookupChar('a', 0)).to.equal('a');
        expect(lookupChar('ab', 0)).to.equal('a');
        expect(lookupChar('aa', 1)).to.equal('a');
        expect(lookupChar('ab', 1)).to.equal('b');
        expect(lookupChar('abc', 0)).to.equal('a');
        expect(lookupChar('abc', 1)).to.equal('b');
        expect(lookupChar('abc', 2)).to.equal('c');
        expect(lookupChar('abc!', 3)).to.equal('!');
        expect(lookupChar('abc!1', 4)).to.equal('1');
    });
});