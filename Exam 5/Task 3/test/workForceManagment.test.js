import { expect } from 'chai';
import { workforceManagement } from '../workForceManagment.js';

describe('Test workForceManagment object functionality',function(){
    describe('recruitStaff functionality test',function(){
        it('test has wrong role',()=>{
            expect(()=>workforceManagement.recruitStaff('Radoslav','neznam',4)).to.throw('We are not currently hiring for this role.')
        })

        it('has correct role but dont have expericance',()=>{
            expect(workforceManagement.recruitStaff('Radoslav','Developer',3)).to.be.equal('Radoslav is not suitable for this role.');
        })

        it('has correct role but dont have expericance',()=>{
            expect(workforceManagement.recruitStaff('Radoslav','Developer',5)).to.be.equal('Radoslav has been successfully recruited for the role of Developer.');
        })

        it('has correct role but  expericance is equal to four',()=>{
            expect(workforceManagement.recruitStaff('Radoslav','Developer',4)).to.be.equal('Radoslav has been successfully recruited for the role of Developer.');
        })
    })

    describe('computeWages functionality test',function(){
        it('has wrong inputs as hours Worked',()=>{
            expect(()=>workforceManagement.computeWages('str')).to.throw("Invalid hours");
            expect(()=>workforceManagement.computeWages(undefined)).to.throw("Invalid hours");
            expect(()=>workforceManagement.computeWages(false)).to.throw("Invalid hours");
            expect(()=>workforceManagement.computeWages(null)).to.throw("Invalid hours");
            expect(()=>workforceManagement.computeWages({})).to.throw("Invalid hours");
            expect(()=>workforceManagement.computeWages([])).to.throw("Invalid hours");
            expect(()=>workforceManagement.computeWages(-10)).to.throw("Invalid hours");

        });

        it('has correct input with additon',()=>{
            expect(workforceManagement.computeWages(170)).to.be.equal(4560);
        })

        it('has correct input none additon',()=>{
            expect(workforceManagement.computeWages(30)).to.be.equal(540);
        })
    })

    describe('dismissEmployee functionality test',function(){
        it('has invalid workforce input',()=>{
            expect(()=>workforceManagement.dismissEmployee('str',[])).to.throw("Invalid input");
            expect(()=>workforceManagement.dismissEmployee([],[])).to.throw("Invalid input");
            expect(()=>workforceManagement.dismissEmployee(20,[])).to.throw("Invalid input");
            expect(()=>workforceManagement.dismissEmployee(undefined,[])).to.throw("Invalid input");
            expect(()=>workforceManagement.dismissEmployee({},[])).to.throw("Invalid input");
            expect(()=>workforceManagement.dismissEmployee(false,[])).to.throw("Invalid input");
            expect(()=>workforceManagement.dismissEmployee(null,[])).to.throw("Invalid input");
        })

        it('has invalid employee index input',()=>{
            expect(()=>workforceManagement.dismissEmployee([],-1)).to.throw("Invalid input");
            expect(()=>workforceManagement.dismissEmployee([1,3,4],4)).to.throw("Invalid input");
            expect(()=>workforceManagement.dismissEmployee([1,2,3],3)).to.throw("Invalid input");
            expect(()=>workforceManagement.dismissEmployee([],'str')).to.throw("Invalid input");
            expect(()=>workforceManagement.dismissEmployee([],[])).to.throw("Invalid input");
            expect(()=>workforceManagement.dismissEmployee([],{})).to.throw("Invalid input");
            expect(()=>workforceManagement.dismissEmployee([],undefined)).to.throw("Invalid input");
            expect(()=>workforceManagement.dismissEmployee([],false)).to.throw("Invalid input");
            expect(()=>workforceManagement.dismissEmployee([],null)).to.throw("Invalid input");
            expect(()=>workforceManagement.dismissEmployee([],0)).to.throw("Invalid input");


        })

        it('has our happyPath',()=>{
            expect(workforceManagement.dismissEmployee(['Peter','Qsen','George'],0)).to.be.equal('Qsen, George');
            expect(workforceManagement.dismissEmployee(['Peter','Qsen','George'],1)).to.be.equal('Peter, George');
            expect(workforceManagement.dismissEmployee(['Peter','Qsen','George'],2)).to.be.equal('Peter, Qsen');

        })

    })
})