import { expect } from 'chai';
import { petAdoptionAgency } from '../petAdoption.js';

describe ('Test functionality of petAdoption Object',function(){
    describe('test is pet is available',function(){
        it('test pet input',()=>{
            expect(()=>petAdoptionAgency.isPetAvailable(1,2,true)).to.throw("Invalid input");
            expect(()=>petAdoptionAgency.isPetAvailable([],2,true)).to.throw("Invalid input");
            expect(()=>petAdoptionAgency.isPetAvailable({},2,true)).to.throw("Invalid input");
            expect(()=>petAdoptionAgency.isPetAvailable(undefined,2,true)).to.throw("Invalid input");
            expect(()=>petAdoptionAgency.isPetAvailable(false,2,true)).to.throw("Invalid input");
            expect(()=>petAdoptionAgency.isPetAvailable(null,2,true)).to.throw("Invalid input");
        })

        it('test availible input',()=>{
            expect(()=>petAdoptionAgency.isPetAvailable('str','str',true)).to.throw("Invalid input");
            expect(()=>petAdoptionAgency.isPetAvailable('str',[],true)).to.throw("Invalid input");
            expect(()=>petAdoptionAgency.isPetAvailable('str',{},true)).to.throw("Invalid input");
            expect(()=>petAdoptionAgency.isPetAvailable('str',undefined,true)).to.throw("Invalid input");
            expect(()=>petAdoptionAgency.isPetAvailable('str',null,true)).to.throw("Invalid input");
            expect(()=>petAdoptionAgency.isPetAvailable('str',false,true)).to.throw("Invalid input");
        })

        it('test vaccinated input',()=>{
            expect(()=>petAdoptionAgency.isPetAvailable('str',2,'str')).to.throw("Invalid input");
            expect(()=>petAdoptionAgency.isPetAvailable('str',2,2)).to.throw("Invalid input");
            expect(()=>petAdoptionAgency.isPetAvailable('str',2,[])).to.throw("Invalid input");
            expect(()=>petAdoptionAgency.isPetAvailable('str',2,{})).to.throw("Invalid input");
            expect(()=>petAdoptionAgency.isPetAvailable('str',2,undefined)).to.throw("Invalid input");
            expect(()=>petAdoptionAgency.isPetAvailable('str',2,null)).to.throw("Invalid input");
        })

        it('has available count below 0 or 0',()=>{
            expect(petAdoptionAgency.isPetAvailable('Dog',-1,true)).to.be.equal('Sorry, there are no Dog(s) available for adoption at the agency.');
            expect(petAdoptionAgency.isPetAvailable('Dog',0,true)).to.be.equal('Sorry, there are no Dog(s) available for adoption at the agency.');


        })

        it('has vacinated',()=>{
            expect(petAdoptionAgency.isPetAvailable('Dog',10,true)).to.be.equal('Great! We have 10 vaccinated Dog(s) available for adoption at the agency.');
        })

        it('not be vacinated',()=>{
            expect(petAdoptionAgency.isPetAvailable('Dog',10,false)).to.be.equal('Great! We have 10 Dog(s) available for adoption, but they need vaccination.');
        })




    })

    describe('test getRecommendedPets',function(){
        it('test pet list input',()=>{
            expect(()=>petAdoptionAgency.getRecommendedPets('str','str')).to.throw('Invalid input');
            expect(()=>petAdoptionAgency.getRecommendedPets(0,'str')).to.throw('Invalid input');
            expect(()=>petAdoptionAgency.getRecommendedPets({},'str')).to.throw('Invalid input');
            expect(()=>petAdoptionAgency.getRecommendedPets(undefined,'str')).to.throw('Invalid input');
            expect(()=>petAdoptionAgency.getRecommendedPets(false,'str')).to.throw('Invalid input');
            expect(()=>petAdoptionAgency.getRecommendedPets(null,'str')).to.throw('Invalid input');
        })

        it('test desiredTraits input',()=>{
            expect(()=>petAdoptionAgency.getRecommendedPets([],[])).to.throw('Invalid input');
            expect(()=>petAdoptionAgency.getRecommendedPets([],0)).to.throw('Invalid input');
            expect(()=>petAdoptionAgency.getRecommendedPets([],null)).to.throw('Invalid input');
            expect(()=>petAdoptionAgency.getRecommendedPets([],undefined)).to.throw('Invalid input');
            expect(()=>petAdoptionAgency.getRecommendedPets([],{})).to.throw('Invalid input');
            expect(()=>petAdoptionAgency.getRecommendedPets([],false)).to.throw('Invalid input');
        })

        it('test if recomendedPets is 0',()=>{
            expect(petAdoptionAgency.getRecommendedPets([{name:"Gosho",traits:"lukanka"}],'krenvirsh')).to.be.equal('Sorry, we currently have no recommended pets with the desired traits: krenvirsh.');
        })

        it('test recomended Pets has trait',()=>{
            expect(petAdoptionAgency.getRecommendedPets([{name:"Gosho",traits:"lukanka"}],'lukanka')).to.be.equal('Recommended pets with the desired traits (lukanka): Gosho');
            expect(petAdoptionAgency.getRecommendedPets([{name:"Gosho",traits:"lukanka"},{name:"Petur",traits:"lukanka"}],'lukanka')).to.be.equal('Recommended pets with the desired traits (lukanka): Gosho, Petur');


        })
    })

    describe('test adoptPet',function(){
            it('test pet value',()=>{
                expect(()=>petAdoptionAgency.adoptPet(4,'str')).to.throw("Invalid input");
                expect(()=>petAdoptionAgency.adoptPet([],'str')).to.throw("Invalid input");
                expect(()=>petAdoptionAgency.adoptPet({},'str')).to.throw("Invalid input");
                expect(()=>petAdoptionAgency.adoptPet(null,'str')).to.throw("Invalid input");
                expect(()=>petAdoptionAgency.adoptPet(undefined,'str')).to.throw("Invalid input");

            })

            it('test adopterName value',()=>{
                expect(()=>petAdoptionAgency.adoptPet('str',{})).to.throw("Invalid input");
                expect(()=>petAdoptionAgency.adoptPet('str',false)).to.throw("Invalid input");
                expect(()=>petAdoptionAgency.adoptPet('str',undefined)).to.throw("Invalid input");
                expect(()=>petAdoptionAgency.adoptPet('str',null)).to.throw("Invalid input");
                expect(()=>petAdoptionAgency.adoptPet('str',20)).to.throw("Invalid input");

            })

            it('test happy path',()=>{
                expect(petAdoptionAgency.adoptPet('Gosho','Petur')).to.be.equal('Congratulations, Petur! You have adopted Gosho from the agency. Enjoy your time with your new furry friend!')
            })
    })
})