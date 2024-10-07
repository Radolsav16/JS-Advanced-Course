import { expect } from 'chai';
import { PaymentPackage } from '../paymentPackege.js';

describe('Test',function(){
    // Data set
    const test1 = new PaymentPackage('HR Services', 1500);
    const test2 =  new PaymentPackage('Consultation', 800);
    const test3 = new PaymentPackage('Partnership Fee', 7000);
    const wrongtest = new PaymentPackage('Transfer Fee', 100);

    // Hapy Path Inputs
    it('Should have properly inputs',()=>{
        expect(typeof(test1.name)).to.be.equal('string');
        expect(typeof(test1.value)).to.be.equal('number');
        expect(test1.value >= 0).to.be.equal(true);
        expect(test1.name.length >= 0).to.be.equal(true);
        expect(test1.VAT >= 0).to.be.equal(true);
        expect(typeof(test1.active)).to.be.equal('boolean');
    });

    it('Should have properly inputs',()=>{
        expect(typeof(test1.name)).to.be.equal('string');
        expect(typeof(test1.value)).to.be.equal('number');
        expect(test1.value >= 0).to.be.equal(true);
        expect(test1.name.length >= 0).to.be.equal(true);
        expect(test1.VAT >= 0).to.be.equal(true);
        expect(typeof(test1.active)).to.be.equal('boolean');
    });

    it('Should have properly inputs',()=>{
        expect(typeof(test1.name)).to.be.equal('string');
        expect(typeof(test1.value)).to.be.equal('number');
        expect(test1.value >= 0).to.be.equal(true);
        expect(test1.name.length >= 0).to.be.equal(true);
        expect(test1.VAT >= 0).to.be.equal(true);
        expect(typeof(test1.active)).to.be.equal('boolean');
    });

    it('Should have properly inputs',()=>{
        expect(typeof(test1.name)).to.be.equal('string');
        expect(typeof(test1.value)).to.be.equal('number');
        expect(test1.value >= 0).to.be.equal(true);
        expect(test1.name.length >= 0).to.be.equal(true);
        expect(test1.VAT >= 0).to.be.equal(true);
        expect(typeof(test1.active)).to.be.equal('boolean');
    });

    it('Should have properly inputs',()=>{
        expect(typeof(test1.name)).to.be.equal('string');
        expect(typeof(test1.value)).to.be.equal('number');
        expect(test1.value >= 0).to.be.equal(true);
        expect(test1.name.length >= 0).to.be.equal(true);
        expect(test1.VAT >= 0).to.be.equal(true);
        expect(typeof(test1.active)).to.be.equal('boolean');
    });

    //Wrong Inputs

   

})