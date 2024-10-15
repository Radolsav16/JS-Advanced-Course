import { expect } from "chai";
import { planYourTrip } from "../planYourTrip.js";

describe('Test planYourTrip inner Functionality',function(){
    describe('Test choosing destination func',function(){
        it('has invalid year',()=>{
            expect(()=>planYourTrip.choosingDestination('Maldivi','Winter',1999)).to.throw('Invalid Year!');
        })

        it('has destination difrent from ski resort',()=>{
            expect(()=>planYourTrip.choosingDestination('Maldivi','Winter',2024)).to.throw('This destination is not what you are looking for.');
        })

        it('has ski resort but not winter as season',()=>{
            expect(planYourTrip.choosingDestination('Ski Resort','Spring',2024)).to.be.equal('Consider visiting during the Winter for the best experience at the Ski Resort.');
        })

        it('has ski resort but winter as season',()=>{
            expect(planYourTrip.choosingDestination('Ski Resort','Winter',2024)).to.be.equal('Great choice! The Winter is the perfect time to visit the Ski Resort.');
        })
    })

    describe('Test exploreOptions func',function(){
        it('test activities typeof',()=>{
            expect(()=>planYourTrip.exploreOptions('str',0)).to.throw('Invalid Information!');
            expect(()=>planYourTrip.exploreOptions([],0)).to.throw('Invalid Information!');
            expect(()=>planYourTrip.exploreOptions({},0)).to.throw('Invalid Information!');
            expect(()=>planYourTrip.exploreOptions(0,0)).to.throw('Invalid Information!');
            expect(()=>planYourTrip.exploreOptions(null,0)).to.throw('Invalid Information!');
        })

        it('test invalid index ',()=>{
            expect(()=>planYourTrip.exploreOptions([],-3)).to.throw('Invalid Information!');
            expect(()=>planYourTrip.exploreOptions([1,3,4],3)).to.throw('Invalid Information!');
            expect(()=>planYourTrip.exploreOptions([1,2,3],4)).to.throw('Invalid Information!');
            expect(()=>planYourTrip.exploreOptions([],[])).to.throw('Invalid Information!');
            expect(()=>planYourTrip.exploreOptions([],{})).to.throw('Invalid Information!');
            expect(()=>planYourTrip.exploreOptions([],'str')).to.throw('Invalid Information!');
            expect(()=>planYourTrip.exploreOptions([],null)).to.throw('Invalid Information!');
            expect(()=>planYourTrip.exploreOptions([],undefined)).to.throw('Invalid Information!');

        })

        it('has correct inputs',()=>{
            expect(planYourTrip.exploreOptions(['Ski','Swim','Football'],0)).to.be.equal('Swim, Football');
            expect(planYourTrip.exploreOptions(['Ski','Swim','Football'],2)).to.be.equal('Ski, Swim');

        })
    })

    describe('Test estimatesExpenses func',function(){
        it('has work distance',()=>{
            expect(()=>planYourTrip.estimateExpenses('str',3)).to.throw("Invalid Information!");
            expect(()=>planYourTrip.estimateExpenses([],3)).to.throw("Invalid Information!");
            expect(()=>planYourTrip.estimateExpenses({},3)).to.throw("Invalid Information!");
            expect(()=>planYourTrip.estimateExpenses(undefined,3)).to.throw("Invalid Information!");
            expect(()=>planYourTrip.estimateExpenses(false,3)).to.throw("Invalid Information!");
            expect(()=>planYourTrip.estimateExpenses(null,3)).to.throw("Invalid Information!");
            expect(()=>planYourTrip.estimateExpenses(0,3)).to.throw("Invalid Information!");
            expect(()=>planYourTrip.estimateExpenses(-1,3)).to.throw("Invalid Information!");
        })  

        it('has work fuelcost',()=>{
            expect(()=>planYourTrip.estimateExpenses(5,0)).to.throw("Invalid Information!");
            expect(()=>planYourTrip.estimateExpenses(5,-1)).to.throw("Invalid Information!");
            expect(()=>planYourTrip.estimateExpenses(5,false)).to.throw("Invalid Information!");
            expect(()=>planYourTrip.estimateExpenses(5,null)).to.throw("Invalid Information!");
            expect(()=>planYourTrip.estimateExpenses(5,undefined)).to.throw("Invalid Information!");
            expect(()=>planYourTrip.estimateExpenses(5,[])).to.throw("Invalid Information!");
            expect(()=>planYourTrip.estimateExpenses(5,{})).to.throw("Invalid Information!");
            
        }) 

        it('has totla cost <= 500',()=>{
            expect(planYourTrip.estimateExpenses(10,5)).to.be.equal('The trip is budget-friendly, estimated cost is $50.00.');
            expect(planYourTrip.estimateExpenses(100,5)).to.be.equal('The trip is budget-friendly, estimated cost is $500.00.');

        })

        it('has more than 500 totalcost',()=>{
            expect(planYourTrip.estimateExpenses(150,5)).to.be.equal('The estimated cost for the trip is $750.00, plan accordingly.');
        })
    })
})