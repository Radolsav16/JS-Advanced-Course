import { expect } from 'chai';
import { ChristmasMovies } from '../Resources.js';

let obj;

beforeEach(()=>{
    obj = new ChristmasMovies();
})

describe("Tests …", function() {
    describe("Test buyMovie func", function() {
        it('test for movie Name input', function() {
            expect(obj.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby'])).to.be.equal('You just got Last Christmas to your collection in which Madison Ingoldsby, Emma Thompson, Boris Isakovic are taking part!');
        });
     });

     describe("TODO …", function() {
        it("TODO …", function() {
            
        });
     });
    

     describe("TODO …", function() {
        it("TODO …", function() {
            
        });
     });
    
    
});