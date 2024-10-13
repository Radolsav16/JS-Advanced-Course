import { expect } from 'chai';
import { foodDelivery } from "../foodDelivery.js";

describe('Test food delivery object functionality',function(){
    describe('test getCategory functionality',function(){
        it('has vegan category',()=>{
            expect(foodDelivery.getCategory('Vegan')).to.be.equal("Dishes that contain no animal products.");
        })

        it('has Vegetarian category',()=>{
            expect(foodDelivery.getCategory('Vegetarian')).to.be.equal("Dishes that contain no meat or fish.");
        })

        it('has Gluten-Free category',()=>{
            expect(foodDelivery.getCategory('Gluten-Free')).to.be.equal("Dishes that contain no gluten.");
        })

        it('has all category',()=>{
            expect(foodDelivery.getCategory('All')).to.be.equal("All available dishes.");
        })
        
        it('has wrong category',()=>{
            expect(()=>foodDelivery.getCategory('str')).to.throw("Invalid Category!");
        })
    })

    describe('test addMenuItem functionality',function(){
        it('has wrong menuItem val',()=>{
            expect(()=>foodDelivery.addMenuItem('str',4)).to.throw("Invalid Information!");
            expect(()=>foodDelivery.addMenuItem({},4)).to.throw("Invalid Information!");
            expect(()=>foodDelivery.addMenuItem(false,4)).to.throw("Invalid Information!");
            expect(()=>foodDelivery.addMenuItem(4,4)).to.throw("Invalid Information!");
            expect(()=>foodDelivery.addMenuItem([],4)).to.throw("Invalid Information!");

        })  

        it('has wrong maxPrice val',()=>{
            expect(()=>foodDelivery.addMenuItem([1,2,3],1)).to.throw("Invalid Information!");
            expect(()=>foodDelivery.addMenuItem([1,2,3],4)).to.throw("Invalid Information!");
            expect(()=>foodDelivery.addMenuItem([1,2,3],'str')).to.throw("Invalid Information!");
            expect(()=>foodDelivery.addMenuItem([1,2,3],[])).to.throw("Invalid Information!");
            expect(()=>foodDelivery.addMenuItem([1,2,3],{})).to.throw("Invalid Information!");
            expect(()=>foodDelivery.addMenuItem([1,2,3],undefined)).to.throw("Invalid Information!");
        })  

        it('has available items in array',()=>{
            const arr =[
            {name: 'Pizza' , price: 20 },
            {name: 'Burger' , price: 15 },
            {name: 'Salad' , price: 10 },
            {name: 'Taraitell' , price: 25 }
            ];
            expect(foodDelivery.addMenuItem(arr,30)).to.be.equal("There are 4 available menu items matching your criteria!")
            expect(foodDelivery.addMenuItem(arr,20)).to.be.equal("There are 3 available menu items matching your criteria!")
        })
    })

    describe('test calculateOrderCost functionality',function(){
        
    })
})