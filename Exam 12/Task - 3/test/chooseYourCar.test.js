import { expect } from 'chai';
import { motorcycleRider } from '../chooseYourCar.js';

describe('Test motorcycleRider object',function(){
    describe('test licenseRestriction function',function(){
        it('test category wrong input',()=>{
            expect(()=>motorcycleRider.licenseRestriction('str')).to.throw('Invalid Information!');
            expect(()=>motorcycleRider.licenseRestriction({})).to.throw('Invalid Information!');
            expect(()=>motorcycleRider.licenseRestriction([])).to.throw('Invalid Information!');
            expect(()=>motorcycleRider.licenseRestriction(10)).to.throw('Invalid Information!');
            expect(()=>motorcycleRider.licenseRestriction(undefined)).to.throw('Invalid Information!');
            expect(()=>motorcycleRider.licenseRestriction(false)).to.throw('Invalid Information!');
            expect(()=>motorcycleRider.licenseRestriction(null)).to.throw('Invalid Information!');

        })

        it('has AM category',()=>{
            expect(motorcycleRider.licenseRestriction('AM')).to.be.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");

        })

        it('has A1 category',()=>{
            expect(motorcycleRider.licenseRestriction('A1')).to.be.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
        })

        it('has A2 category',()=>{
            expect(motorcycleRider.licenseRestriction('A2')).to.be.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.");
        })

        it('has A category',()=>{
            expect(motorcycleRider.licenseRestriction('A')).to.be.equal("No motorcycle restrictions, and the minimum age is 24.");
        })
    })




    describe('test motorcycleShowroom function',function(){
            it('has wrong engineVolume',()=>{
                expect(()=>motorcycleRider.motorcycleShowroom('str',100)).to.throw("Invalid Information!");
                expect(()=>motorcycleRider.motorcycleShowroom([],100)).to.throw("Invalid Information!");
                expect(()=>motorcycleRider.motorcycleShowroom(undefined,100)).to.throw("Invalid Information!");
                expect(()=>motorcycleRider.motorcycleShowroom({},100)).to.throw("Invalid Information!");
                expect(()=>motorcycleRider.motorcycleShowroom(null,100)).to.throw("Invalid Information!");
                expect(()=>motorcycleRider.motorcycleShowroom(false,100)).to.throw("Invalid Information!");
            })

            it('has wrong maximumVolume',()=>{
                expect(()=>motorcycleRider.motorcycleShowroom([1,2],40)).to.throw("Invalid Information!");
                expect(()=>motorcycleRider.motorcycleShowroom([1,2],'str')).to.throw("Invalid Information!");
                expect(()=>motorcycleRider.motorcycleShowroom([1,2],[])).to.throw("Invalid Information!");
                expect(()=>motorcycleRider.motorcycleShowroom([1,2],{})).to.throw("Invalid Information!");
                expect(()=>motorcycleRider.motorcycleShowroom([1,2],undefined)).to.throw("Invalid Information!");
                expect(()=>motorcycleRider.motorcycleShowroom([1,2],null)).to.throw("Invalid Information!");
            })

            it('has correct inputs',()=>{
                expect(motorcycleRider.motorcycleShowroom([125,250,600],700)).to.be.equal('There are 3 available motorcycles matching your criteria!');
            })
    })

    describe('test otherSpendings function',function(){
        it('test equipment',()=>{
            expect(()=>motorcycleRider.otherSpendings('str',[],false)).to.throw("Invalid Information!");
            expect(()=>motorcycleRider.otherSpendings(undefined,[],false)).to.throw("Invalid Information!");
            expect(()=>motorcycleRider.otherSpendings(null,[],false)).to.throw("Invalid Information!");
            expect(()=>motorcycleRider.otherSpendings({},[],false)).to.throw("Invalid Information!");
            expect(()=>motorcycleRider.otherSpendings(20,[],false)).to.throw("Invalid Information!");
        })


        it('test consumbles',()=>{
            expect(()=>motorcycleRider.otherSpendings([],'str',false)).to.throw("Invalid Information!");
            expect(()=>motorcycleRider.otherSpendings([],{},false)).to.throw("Invalid Information!");
            expect(()=>motorcycleRider.otherSpendings([],undefined,false)).to.throw("Invalid Information!");
            expect(()=>motorcycleRider.otherSpendings([],false,false)).to.throw("Invalid Information!");
            expect(()=>motorcycleRider.otherSpendings([],null,false)).to.throw("Invalid Information!");
        })

        it('test discount',()=>{
            expect(()=>motorcycleRider.otherSpendings([],[],'str')).to.throw("Invalid Information!");
            expect(()=>motorcycleRider.otherSpendings([],[],undefined)).to.throw("Invalid Information!");
            expect(()=>motorcycleRider.otherSpendings([],[],null)).to.throw("Invalid Information!");
            expect(()=>motorcycleRider.otherSpendings([],[],[])).to.throw("Invalid Information!");
            expect(()=>motorcycleRider.otherSpendings([],[],{})).to.throw("Invalid Information!");
        })

        it('has discount',()=>{
            expect(motorcycleRider.otherSpendings(['helmet','jacked'],['engine oil','oil filter'],true)).to.be.equal(`You spend $540.00 for equipment and consumables with 10% discount!`)
        })

        it('not has discount',()=>{
            expect(motorcycleRider.otherSpendings(['helmet','jacked'],['engine oil','oil filter'],false)).to.be.equal(`You spend $600.00 for equipment and consumables!`);
        })
    })
})