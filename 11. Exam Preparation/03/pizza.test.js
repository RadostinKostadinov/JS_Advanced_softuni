const pizzUni = require('./pizza.js');
const { expect } = require('chai');


describe('PIZZUNI TEST', () => {
    it('makeAnOrder function testing', ()=> {

        const myObj = {
            orderedPizza: 'pizza1',
            orderedDrink: 'drink1'
        };

        expect(pizzUni.makeAnOrder(myObj)).to.equal(`You just ordered ${myObj.orderedPizza} and ${myObj.orderedDrink}.`);
    


    });
    it('makeAnOrder throw error testing', ()=> {

        const myObj2 = {};
        expect(  function() {    pizzUni.makeAnOrder(myObj2);      }   ).to.throw('rado');


    });
});
