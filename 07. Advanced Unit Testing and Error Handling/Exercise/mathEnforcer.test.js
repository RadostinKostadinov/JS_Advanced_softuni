const {expect} = require('chai');
const mathEnforcer = require('./mathEnforcer');

describe('math Enforcer object test', () => {
    it('typeof arguments === number ? PASS : FAIL', () => {
        expect(mathEnforcer.addFive(undefined)).to.be.undefined;
        expect(mathEnforcer.addFive(true)).to.be.undefined;
        expect(mathEnforcer.addFive('a')).to.be.undefined;
        expect(mathEnforcer.addFive('')).to.be.undefined; 
        expect(mathEnforcer.addFive({ 'a': 1 })).to.be.undefined;
        expect(mathEnforcer.addFive(mathEnforcer.addFive())).to.be.undefined;
        expect(mathEnforcer.addFive(null)).to.be.undefined;
        expect(mathEnforcer.addFive([])).to.be.undefined;
        expect(mathEnforcer.addFive('1')).to.be.undefined;

        expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
        expect(mathEnforcer.subtractTen(true)).to.be.undefined;
        expect(mathEnforcer.subtractTen('a')).to.be.undefined;
        expect(mathEnforcer.subtractTen('')).to.be.undefined;
        expect(mathEnforcer.subtractTen({ 'a': 1 })).to.be.undefined;
        expect(mathEnforcer.subtractTen(mathEnforcer.addFive())).to.be.undefined;
        expect(mathEnforcer.subtractTen(null)).to.be.undefined;
        expect(mathEnforcer.subtractTen([])).to.be.undefined;
        expect(mathEnforcer.subtractTen('1')).to.be.undefined;

        expect(mathEnforcer.sum(1, undefined)).to.be.undefined;
        expect(mathEnforcer.sum(1, true)).to.be.undefined;
        expect(mathEnforcer.sum(1, 'a')).to.be.undefined;
        expect(mathEnforcer.sum(1, '')).to.be.undefined;
        expect(mathEnforcer.sum(1, { 'a': 1 })).to.be.undefined;
        expect(mathEnforcer.sum(1, mathEnforcer.addFive())).to.be.undefined;
        expect(mathEnforcer.sum(1, null)).to.be.undefined;
        expect(mathEnforcer.sum(1, [])).to.be.undefined;
        expect(mathEnforcer.sum(1, '1')).to.be.undefined;

        expect(mathEnforcer.sum(undefined, 1)).to.be.undefined;
        expect(mathEnforcer.sum(true, 1)).to.be.undefined;
        expect(mathEnforcer.sum('a', 1)).to.be.undefined;
        expect(mathEnforcer.sum('', 1)).to.be.undefined; 
        expect(mathEnforcer.sum({ 'a': 1 }, 1)).to.be.undefined;
        expect(mathEnforcer.sum(mathEnforcer.addFive(), 1)).to.be.undefined;
        expect(mathEnforcer.sum(null, 1)).to.be.undefined;
        expect(mathEnforcer.sum([], 1)).to.be.undefined;
        expect(mathEnforcer.sum('1', 1)).to.be.undefined;

        expect(mathEnforcer.sum('1', '1')).to.be.undefined;
    });
    it('is addFive works properly', () => {
        expect(mathEnforcer.addFive(-6)).to.equal(-1);
        expect(mathEnforcer.addFive(-5)).to.equal(0);
        expect(mathEnforcer.addFive(-4)).to.equal(1);
        expect(mathEnforcer.addFive(-3.5)).closeTo(1.5, 0.1);
        expect(mathEnforcer.addFive(0)).to.equal(5);
        expect(mathEnforcer.addFive(1)).to.equal(6);
        expect(mathEnforcer.addFive(1.5)).closeTo(6.5, 0.1);
        expect(mathEnforcer.addFive(10)).to.equal(15);
        expect(mathEnforcer.addFive(NaN)).to.be.NaN;
    });
    it('is subtractTen works properly', () => {
        expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        expect(mathEnforcer.subtractTen(-0.5)).closeTo(-10.5, 0.1);
        expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        expect(mathEnforcer.subtractTen(1)).to.equal(-9);
        expect(mathEnforcer.subtractTen(10)).to.equal(0);
        expect(mathEnforcer.subtractTen(10.5)).closeTo(0.5, 0.1);
        expect(mathEnforcer.subtractTen(11)).to.equal(1);
        expect(mathEnforcer.subtractTen(5.5)).closeTo(-4.5, 0.1);
        expect(mathEnforcer.subtractTen(NaN)).to.be.NaN;
    });
    it('is sum works properly', () => {
        expect(mathEnforcer.sum(-1, 0.5)).closeTo(-0.5, 0.1);
        expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
        expect(mathEnforcer.sum(-1, -0.5)).closeTo(-1.5, 0.1);
        expect(mathEnforcer.sum(-1, 0)).to.equal(-1);
        expect(mathEnforcer.sum(0, -1)).to.equal(-1);
        expect(mathEnforcer.sum(-1, 1)).to.equal(0);
        expect(mathEnforcer.sum(-1, 1.5)).closeTo(0.5, 0.1);
        expect(mathEnforcer.sum(-1, 2)).to.equal(1);
        expect(mathEnforcer.sum(1, 0.5)).closeTo(1.5, 0.1);
        expect(mathEnforcer.sum(1, 1)).to.equal(2);
        expect(mathEnforcer.sum(1, 2)).to.equal(3);
        expect(mathEnforcer.sum(1, 0)).to.equal(1);
        expect(mathEnforcer.sum(1.5, 1.5)).to.equal(3);
        expect(mathEnforcer.sum(-1.5, -1.5)).to.equal(-3);
        expect(mathEnforcer.sum(NaN, 2)).to.be.NaN;
        expect(mathEnforcer.sum(2, NaN)).to.be.NaN;
    });
});