import { expect } from "chai";
import { isSymmetric } from "../Unit Testting Lab/checkSymmetry.js";

describe('IsSymetric',function(){
    it('argument is array',()=>{
        expect(isSymmetric([]).to.equal(false));
    });
    it('happy path with input',()=>{
        expect(isSymmetric([1,2,1]).to.equal(true));
    });n 
})