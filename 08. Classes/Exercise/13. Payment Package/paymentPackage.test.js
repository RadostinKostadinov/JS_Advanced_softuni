const PaymentPackage = require('./paymentPackage');
const { expect, assert } = require('chai');

describe('class Payment Package test', () => {
    it('Is input right', () => {
        expect(() => new PaymentPackage(2, 2)).to.throw(Error, 'Name must be a non-empty string');
        expect(() => new PaymentPackage('', 2)).to.throw(Error, 'Name must be a non-empty string');
        expect(() => new PaymentPackage('a', '2')).to.throw(Error, 'Value must be a non-negative number');
        expect(() => new PaymentPackage('a', -2)).to.throw(Error, 'Value must be a non-negative number');
        expect(() => new PaymentPackage('a', '')).to.throw(Error, 'Value must be a non-negative number');
        expect(new PaymentPackage('a', 1).toString()).to.equal('Package: a\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2');
    });
    it('Is name.get / .set works properly', () => {
        const instance = new PaymentPackage('test', 1);
        expect(instance.name).to.equal('test');
        instance.name = 'changed';
        expect(instance.name).to.equal('changed');
        expect(() => instance.name = 2).to.throw(Error, 'Name must be a non-empty string');
        expect(() => instance.name = '').to.throw(Error, 'Name must be a non-empty string');
    });
    it('Is value.get / .set works properly', () => {
        const instance = new PaymentPackage('test', 1);
        expect(instance.value).to.equal(1);
        instance.value = 2;
        expect(instance.value).to.equal(2);
        expect(() => instance.value = -2).to.throw(Error, 'Value must be a non-negative number');
        expect(() => instance.value = '2').to.throw(Error, 'Value must be a non-negative number');
        expect(() => instance.value = '').to.throw(Error, 'Value must be a non-negative number');
        expect(() => instance.value = 0).to.not.throw();
    });
    it('Is VAT.get / .set works properly', () => {
        const instance = new PaymentPackage('test', 1);
        expect(instance.VAT).to.equal(20);
        instance.VAT = 40;
        expect(instance.VAT).to.equal(40);
        expect(() => instance.VAT = -1).to.throw(Error, 'VAT must be a non-negative number');
        expect(() => instance.VAT = '').to.throw(Error, 'VAT must be a non-negative number');
        expect(() => instance.VAT = 'a').to.throw(Error, 'VAT must be a non-negative number');
        //expect(() => instance.VAT = 0).to.throw(Error, 'VAT must be a non-negative number'); // judge test
    });
    it('Is active.get / .set works properly', () => {
        const instance = new PaymentPackage('test', 1);
        expect(instance.active).to.be.true;
        instance.active = false;
        expect(instance.active).to.be.false;
        expect(() => instance.active = 2).to.throw(Error, 'Active status must be a boolean');
        expect(() => instance.active = 'asd').to.throw(Error, 'Active status must be a boolean');
        expect(() => instance.active = '').to.throw(Error, 'Active status must be a boolean');
    });
    it('Is method toString() works properly', () => {
        const instance = new PaymentPackage('test', 1);
        expect(instance.toString()).to.equal('Package: test\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2');
        instance.active = false;
        expect(instance.toString()).to.equal('Package: test (inactive)\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2');

    });
});