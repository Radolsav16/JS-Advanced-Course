 import { expect } from 'chai';
 import { lookupChar } from '../charLookUp.js';

 describe('Test lookupChar Function ',function(){
   it('Invalid Inputs',()=>{
        expect(lookupChar([],1)).to.undefined;
        expect(lookupChar({},1)).to.undefined;
        expect(lookupChar(10,1)).to.undefined;
        expect(lookupChar('ahhf',[])).to.undefined;
        expect(lookupChar('ajdhjs',{})).to.undefined;
        expect(lookupChar('dkgdh','jhjkg')).to.undefined;
   });

   it ('Incorrect Indexes ',()=>{
        expect(lookupChar('jhv',100)).to.equal('Incorrect index');
        expect(lookupChar('jhv',-1)).to.equal('Incorrect index');
   });
   it('Test Happy Path',()=>{
    expect(lookupChar('jhv',1)).to.equal('h');
    expect(lookupChar('jhvfh',2)).to.equal('v');
    expect(lookupChar('jh',0)).to.equal('j');
    expect(lookupChar('jhvk',3)).to.equal('k');
   });

 });