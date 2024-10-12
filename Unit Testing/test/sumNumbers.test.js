import { expect } from "chai";
import { sum } from "./sumNumbers.js";

describe('Add/Subtract',function (){

    it('has valid positive number in array',()=>{
        expect(sum([10,20,30,40]).to.equal(100));
    })
})