import { expect } from 'chai';
import { findNewApartment } from '../findApartament.js';

describe('Test findNewApartament',function(){
    describe('test  gooodLocation Func',function(){
        it('has city wrong val',()=>{
            expect(()=>findNewApartment.isGoodLocation(20,false)).to.throw('Invalid input!')
            expect(()=>findNewApartment.isGoodLocation([],false)).to.throw('Invalid input!')
            expect(()=>findNewApartment.isGoodLocation({},false)).to.throw('Invalid input!')
            expect(()=>findNewApartment.isGoodLocation(undefined,false)).to.throw('Invalid input!')
            expect(()=>findNewApartment.isGoodLocation(null,false)).to.throw('Invalid input!')
            expect(()=>findNewApartment.isGoodLocation(false,false)).to.throw('Invalid input!')

        })

        it('has nearPublicTransport wrong val',()=>{
            expect(()=>findNewApartment.isGoodLocation('str',[])).to.throw('Invalid input!')
            expect(()=>findNewApartment.isGoodLocation('str',{})).to.throw('Invalid input!')
            expect(()=>findNewApartment.isGoodLocation('str','str')).to.throw('Invalid input!')
            expect(()=>findNewApartment.isGoodLocation('str',20)).to.throw('Invalid input!')
            expect(()=>findNewApartment.isGoodLocation('str',undefined)).to.throw('Invalid input!')
            expect(()=>findNewApartment.isGoodLocation('str',null)).to.throw('Invalid input!')

        })

        it('has diffrent city',()=>{
            expect(findNewApartment.isGoodLocation('London',true)).to.be.equal('This location is not suitable for you.');
        })

        it('has sofia, plovdiv  or varna and true val',()=>{
            expect(findNewApartment.isGoodLocation('Sofia',true)).to.be.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Plovdiv',true)).to.be.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Varna',true)).to.be.equal('You can go on home tour!');


        })

        it('has sofia, plovdiv  or varna and false val',()=>{
            expect(findNewApartment.isGoodLocation('Sofia',false)).to.be.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Plovdiv',false)).to.be.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Varna',false)).to.be.equal('There is no public transport in area.');

        })

    })

    describe('test  isLargeEnough Func',function(){
        it('has apartaments as correct values',()=>{
            expect(()=>findNewApartment.isLargeEnough('str',100)).to.throw("Invalid input!");
            expect(()=>findNewApartment.isLargeEnough([],100)).to.throw("Invalid input!");
            expect(()=>findNewApartment.isLargeEnough({},100)).to.throw("Invalid input!");
            expect(()=>findNewApartment.isLargeEnough(undefined,100)).to.throw("Invalid input!");
            expect(()=>findNewApartment.isLargeEnough(null,100)).to.throw("Invalid input!");
            expect(()=>findNewApartment.isLargeEnough(false,100)).to.throw("Invalid input!");

        })

        it('has minimalSquare Meters as correct values',()=>{
            expect(()=>findNewApartment.isLargeEnough([1],'str')).to.throw("Invalid input!");
            expect(()=>findNewApartment.isLargeEnough([1],[])).to.throw("Invalid input!");
            expect(()=>findNewApartment.isLargeEnough([1],{})).to.throw("Invalid input!");
            expect(()=>findNewApartment.isLargeEnough([1],undefined)).to.throw("Invalid input!");
            expect(()=>findNewApartment.isLargeEnough([1],false)).to.throw("Invalid input!");
            expect(()=>findNewApartment.isLargeEnough([1],null)).to.throw("Invalid input!");

        })

        it('has apartaments >= squareMeters',()=>{
            expect(findNewApartment.isLargeEnough([40,50,60],20)).to.be.equal('40, 50, 60');
        })
    })

    describe('test  isItAffordable Func',function(){
        
        it('test price val',()=>{
            expect(()=>findNewApartment.isItAffordable('str',20)).to.throw('Invalid input!');
            expect(()=>findNewApartment.isItAffordable(-1,20)).to.throw('Invalid input!')
            expect(()=>findNewApartment.isItAffordable(0,20)).to.throw('Invalid input!')
            expect(()=>findNewApartment.isItAffordable([],20)).to.throw('Invalid input!')
            expect(()=>findNewApartment.isItAffordable({},20)).to.throw('Invalid input!')

            expect(()=>findNewApartment.isItAffordable(null,20)).to.throw('Invalid input!')
            expect(()=>findNewApartment.isItAffordable(undefined,20)).to.throw('Invalid input!')


        })

        it('test price budjet',()=>{
            expect(()=>findNewApartment.isItAffordable(20,'str')).to.throw('Invalid input!');
            expect(()=>findNewApartment.isItAffordable(20,-1)).to.throw('Invalid input!')
            expect(()=>findNewApartment.isItAffordable(20,0)).to.throw('Invalid input!')
            expect(()=>findNewApartment.isItAffordable(20,[])).to.throw('Invalid input!')
            expect(()=>findNewApartment.isItAffordable(20,{})).to.throw('Invalid input!')

            expect(()=>findNewApartment.isItAffordable(20,null)).to.throw('Invalid input!')
            expect(()=>findNewApartment.isItAffordable(20,undefined)).to.throw('Invalid input!')


        })

        it('has result < 0',()=>{
            expect(findNewApartment.isItAffordable(20,10)).to.be.equal("You don't have enough money for this house!")
        })

        it('has result > 0',()=>{
            expect(findNewApartment.isItAffordable(20,50)).to.be.equal("You can afford this home!")
        })
    })
})