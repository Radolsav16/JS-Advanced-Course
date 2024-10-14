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
        it('has wrong shipping Input',()=>{
            expect(()=>foodDelivery.calculateOrderCost({},[],false)).to.throw("Invalid Information!");
            expect(()=>foodDelivery.calculateOrderCost('str',[],false)).to.throw("Invalid Information!");
            expect(()=>foodDelivery.calculateOrderCost(1,[],false)).to.throw("Invalid Information!");
            expect(()=>foodDelivery.calculateOrderCost(null,[],false)).to.throw("Invalid Information!");
            expect(()=>foodDelivery.calculateOrderCost(undefined,[],false)).to.throw("Invalid Information!");
        })

        it('has wrong addons Input',()=>{
            expect(()=>foodDelivery.calculateOrderCost([],'str',false)).to.throw("Invalid Information!");
            expect(()=>foodDelivery.calculateOrderCost([],{},false)).to.throw("Invalid Information!");
            expect(()=>foodDelivery.calculateOrderCost([],undefined,false)).to.throw("Invalid Information!");
            expect(()=>foodDelivery.calculateOrderCost([],false,false)).to.throw("Invalid Information!");
            expect(()=>foodDelivery.calculateOrderCost([],2,false)).to.throw("Invalid Information!");
        })

        it('has wrong discount Input',()=>{
            expect(()=>foodDelivery.calculateOrderCost([],[],'str')).to.throw("Invalid Information!");
            expect(()=>foodDelivery.calculateOrderCost([],[],1)).to.throw("Invalid Information!");
            expect(()=>foodDelivery.calculateOrderCost([],[],null)).to.throw("Invalid Information!");
            expect(()=>foodDelivery.calculateOrderCost([],[],undefined)).to.throw("Invalid Information!");
            expect(()=>foodDelivery.calculateOrderCost([],[],{})).to.throw("Invalid Information!");
        })

        it('has discount',()=>{
            const shipping = ["standard","standard",'express'];
            const addons = ['sauce','sauce','sauce','sauce'];
            expect(foodDelivery.calculateOrderCost(shipping,addons,true)).to.be.equal('You spend $12.75 for shipping and addons with a 15% discount!');  
        })

        it('hasnt have discount',()=>{
            const shipping = ["standard","standard",'express'];
            const addons = ['sauce','sauce','sauce'];
            expect(foodDelivery.calculateOrderCost(shipping,addons,false)).to.be.equal('You spend $14.00 for shipping and addons!');  
        })

        it('has test if dont have somethink in arrays',()=>{
            expect(foodDelivery.calculateOrderCost([],[],false)).to.be.equal('You spend $0.00 for shipping and addons!');  
            expect(foodDelivery.calculateOrderCost([],[],true)).to.be.equal('You spend $0.00 for shipping and addons with a 15% discount!');  

        })
    })
})