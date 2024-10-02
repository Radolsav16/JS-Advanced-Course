import { expect } from 'chai';
import { isOddOrEven } from '../isOddOrEven.js';

describe('Test function EvenOrOdd',function (){
    it('Fisrt Happy Path when string has odd chars',()=>{
        expect(isOddOrEven('odd')).to.equal('odd');
    })

    it('Second Happy Path when string has even chars',()=>{
        expect(isOddOrEven('pass')).to.equal('even');
    })

    it('Input is not correct',()=>{
        expect(isOddOrEven(10)).to.undefined
        expect(isOddOrEven([])).to.undefined;
        expect(isOddOrEven({name:'Radko'})).to.undefined;
    })



    
})