const expect = require('chai').expect;
const rgbToHex = require('./RGBtoHEX.js');

describe('RGB to HEX function test', () => {
    describe('Valid colors', () => {
        it('255,255,255 to equal #FFFFFF', () => {
            expect(rgbToHex(255, 255, 255)).to.equal('#FFFFFF');
        });
        it('0,0,0 to equal #000000', () => {
            expect(rgbToHex(255, 255, 255)).to.equal('#FFFFFF');
        });
        it('255,0,0 to equal #FF0000', () => {
            expect(rgbToHex(255, 0, 0)).to.equal('#FF0000');
        });
        it('0,255,0 to equal #00FF00', () => {
            expect(rgbToHex(0, 255, 0)).to.equal('#00FF00');
        });
        it('0,0,255 to equal #0000FF', () => {
            expect(rgbToHex(0, 0, 255)).to.equal('#0000FF');
        });
        it('32, 189, 178 to equal #20BDB2', () => {
            expect(rgbToHex(32, 189, 178)).to.equal('#20BDB2');
        });
    });
    describe('Invalid arguments', () => {
        it('out of range 0-255 red, expect undefined', () => {
            expect(rgbToHex(-1, 0, 0)).to.be.undefined;
            expect(rgbToHex(256, 0, 0)).to.be.undefined;

        });
        it('out of range 0-255 green, expect undefined', () => {
            expect(rgbToHex(0, -1, 0)).to.be.undefined;
            expect(rgbToHex(0, 256, 0)).to.be.undefined;
        });
        it('out of range 0-255 blue, expect undefined', () => {
            expect(rgbToHex(0, 0, -1)).to.be.undefined;
            expect(rgbToHex(0, 0, 256)).to.be.undefined;
        });
        it('invalid type of argument, expect undefined', () => {
            expect(rgbToHex('1', 0, 0)).to.be.undefined;
            expect(rgbToHex([1], 0, 0)).to.be.undefined;
            expect(rgbToHex(['1'], 0, 0)).to.be.undefined;
            expect(rgbToHex(undefined, 0, 0)).to.be.undefined;
            expect(rgbToHex(null, 0, 0)).to.be.undefined;
            expect(rgbToHex({ 1: 1 }, 0, 0)).to.be.undefined;
            expect(rgbToHex(true, 0, 0)).to.be.undefined;

            expect(rgbToHex(0, '1', 0)).to.be.undefined;
            expect(rgbToHex(0, [1], 0)).to.be.undefined;
            expect(rgbToHex(0, ['1'], 0)).to.be.undefined;
            expect(rgbToHex(0, undefined, 0)).to.be.undefined;
            expect(rgbToHex(0, null, 0)).to.be.undefined;
            expect(rgbToHex(0, { 1: 1 }, 0)).to.be.undefined;
            expect(rgbToHex(0, true, 0)).to.be.undefined;

            expect(rgbToHex(0, 0, '1')).to.be.undefined;
            expect(rgbToHex(0, 0, [1])).to.be.undefined;
            expect(rgbToHex(0, 0, ['1'])).to.be.undefined;
            expect(rgbToHex(0, 0, undefined)).to.be.undefined;
            expect(rgbToHex(0, 0, null)).to.be.undefined;
            expect(rgbToHex(0, 0, { 1: 1 })).to.be.undefined;
            expect(rgbToHex(0, 0, true)).to.be.undefined;
        });
    });
});