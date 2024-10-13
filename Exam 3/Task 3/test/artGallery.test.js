import { expect } from 'chai';
import { artGallery } from '../artGallery.js';

describe('test artGallery Object Functionality',function(){
    describe('test addArtWork inner Function',function(){
        it('has wrong input for title',()=>{
            expect(()=>artGallery.addArtwork(1,'30 x 20','str')).to.throw('Invalid Information!');
            expect(()=>artGallery.addArtwork([],'30 x 20','str')).to.throw('Invalid Information!');
            expect(()=>artGallery.addArtwork({},'30 x 20','str')).to.throw('Invalid Information!');
            expect(()=>artGallery.addArtwork(undefined,'30 x 20','str')).to.throw('Invalid Information!');
            expect(()=>artGallery.addArtwork(null,'30 x 20','str')).to.throw('Invalid Information!');
            expect(()=>artGallery.addArtwork(false,'30 x 20','str')).to.throw('Invalid Information!');
        })

        it('has wrong input for artist',()=>{
            expect(()=>artGallery.addArtwork('str','30 x 20',1)).to.throw('Invalid Information!');
            expect(()=>artGallery.addArtwork('str','30 x 20',[])).to.throw('Invalid Information!');
            expect(()=>artGallery.addArtwork('str','30 x 20',{})).to.throw('Invalid Information!');
            expect(()=>artGallery.addArtwork('str','30 x 20',undefined)).to.throw('Invalid Information!');
            expect(()=>artGallery.addArtwork('str', '30 x 20',null)).to.throw('Invalid Information!');
            expect(()=>artGallery.addArtwork('str','30 x 20',false)).to.throw('Invalid Information!');
        })

        it('has wrong  invalid dimension',()=>{
            expect(()=>artGallery.addArtwork('str',[], 'str')).to.throw('Invalid Dimensions!');
            expect(()=>artGallery.addArtwork('str',{},'str')).to.throw('Invalid Dimensions!');
            expect(()=>artGallery.addArtwork('str',20,'str')).to.throw('Invalid Dimensions!');
            expect(()=>artGallery.addArtwork('str',undefined,'str')).to.throw('Invalid Dimensions!');
            expect(()=>artGallery.addArtwork('str',false,'str')).to.throw('Invalid Dimensions!');
            expect(()=>artGallery.addArtwork('str',null,'str')).to.throw('Invalid Dimensions!');
        })

        const validArtists = ["Van Gogh", "Picasso", "Monet"];

        it('artist dont exist in validArtist Array',()=>{
            let result = validArtists.includes('Pesho');
            let result2 = validArtists.includes('Gosho');
            let result3 = validArtists.includes('Radko');

            expect(result).to.be.equal(false);
            expect(result2).to.be.equal(false);
            expect(result3).to.be.equal(false);

        })

        it('has our happy path',()=>{
            expect(artGallery.addArtwork('Explore Nature','20 x 70','Picasso')).to.be.equal("Artwork added successfully: 'Explore Nature' by Picasso with dimensions 20 x 70.");
            expect(artGallery.addArtwork('Livin in America','50 x 70','Monet')).to.be.equal("Artwork added successfully: 'Livin in America' by Monet with dimensions 50 x 70.");
            expect(artGallery.addArtwork('Cold City','30 x 100','Van Gogh')).to.be.equal("Artwork added successfully: 'Cold City' by Van Gogh with dimensions 30 x 100.");

        });
       
    })

    describe('test calculateCost inner Functonlity',function(){
        it('has invalid insurence cost',()=>{
            expect(()=>artGallery.calculateCosts('str',1,false)).to.throw("Invalid Information!");
            expect(()=>artGallery.calculateCosts([],1,false)).to.throw("Invalid Information!")
            expect(()=>artGallery.calculateCosts(undefined,1,false)).to.throw("Invalid Information!")
            expect(()=>artGallery.calculateCosts(false,1,false)).to.throw("Invalid Information!")
            expect(()=>artGallery.calculateCosts(null,1,false)).to.throw("Invalid Information!")
            expect(()=>artGallery.calculateCosts({},1,false)).to.throw("Invalid Information!")

            expect(()=>artGallery.calculateCosts(null,-1,false)).to.throw("Invalid Information!")
            expect(()=>artGallery.calculateCosts({},-1,false)).to.throw("Invalid Information!")

        })

        it('has wrong exhibition Cost',()=>{
            expect(()=>artGallery.calculateCosts(1,'str',false)).to.throw("Invalid Information!");
            expect(()=>artGallery.calculateCosts(1,[],false)).to.throw("Invalid Information!")
            expect(()=>artGallery.calculateCosts(1,{},false)).to.throw("Invalid Information!")
            expect(()=>artGallery.calculateCosts(1,undefined,false)).to.throw("Invalid Information!")
            expect(()=>artGallery.calculateCosts(1,null,false)).to.throw("Invalid Information!")
            expect(()=>artGallery.calculateCosts(1,false,false)).to.throw("Invalid Information!")

            expect(()=>artGallery.calculateCosts(-1,20,false)).to.throw("Invalid Information!")
            expect(()=>artGallery.calculateCosts(-1,20,false)).to.throw("Invalid Information!")
        })

        it('has wrong spnsor value',()=>{
            expect(()=>artGallery.calculateCosts(1,2,'str')).to.throw("Invalid Information!");
            expect(()=>artGallery.calculateCosts(1,3,[])).to.throw("Invalid Information!")
            expect(()=>artGallery.calculateCosts(1,2,{})).to.throw("Invalid Information!")
            expect(()=>artGallery.calculateCosts(1,2,1)).to.throw("Invalid Information!")
            expect(()=>artGallery.calculateCosts(1,3,undefined)).to.throw("Invalid Information!")
            expect(()=>artGallery.calculateCosts(1,4,null)).to.throw("Invalid Information!")
        })

        it('test happy path',()=>{
            expect(artGallery.calculateCosts(10,40,true)).to.be.equal('Exhibition and insurance costs are 45$, reduced by 10% with the help of a donation from your sponsor.')
            expect(artGallery.calculateCosts(100,100,true)).to.be.equal('Exhibition and insurance costs are 180$, reduced by 10% with the help of a donation from your sponsor.')
            expect(artGallery.calculateCosts(10,50,true)).to.be.equal('Exhibition and insurance costs are 54$, reduced by 10% with the help of a donation from your sponsor.')
            
        })

        it('has false value for sposnor',()=>{
            expect(artGallery.calculateCosts(10,40,false)).to.be.equal('Exhibition and insurance costs are 50$.')
            expect(artGallery.calculateCosts(100,100,false)).to.be.equal('Exhibition and insurance costs are 200$.')
            expect(artGallery.calculateCosts(10,50,false)).to.be.equal('Exhibition and insurance costs are 60$.')
        })
    })

    describe('test orginizeExhibits inner Functionality',function(){
        it('has artworkCount wrong value',()=>{
            expect(()=>artGallery.organizeExhibits('str',1)).to.throw("Invalid Information!");
            expect(()=>artGallery.organizeExhibits([],1)).to.throw("Invalid Information!");
            expect(()=>artGallery.organizeExhibits({},1)).to.throw("Invalid Information!");
            expect(()=>artGallery.organizeExhibits(undefined,1)).to.throw("Invalid Information!");
            expect(()=>artGallery.organizeExhibits(null,1)).to.throw("Invalid Information!");

            expect(()=>artGallery.organizeExhibits(-2,1)).to.throw("Invalid Information!");
            expect(()=>artGallery.organizeExhibits(0,1)).to.throw("Invalid Information!");
        })

        it('has displaySpace wrong value',()=>{
            expect(()=>artGallery.organizeExhibits(1,'str')).to.throw("Invalid Information!");
            expect(()=>artGallery.organizeExhibits(1,{})).to.throw("Invalid Information!");
            expect(()=>artGallery.organizeExhibits(1,undefined)).to.throw("Invalid Information!");
            expect(()=>artGallery.organizeExhibits(1,false)).to.throw("Invalid Information!");
            expect(()=>artGallery.organizeExhibits(1,null)).to.throw("Invalid Information!");
            expect(()=>artGallery.organizeExhibits(1,[])).to.throw("Invalid Information!");


            expect(()=>artGallery.organizeExhibits(1,-1)).to.throw("Invalid Information!");
            expect(()=>artGallery.organizeExhibits(1,0)).to.throw("Invalid Information!");
        })

        it('has less than 5 workers',()=>{
            expect(artGallery.organizeExhibits(30,20)).to.be.equal('There are only 1 artworks in each display space, you can add more artworks.');
        })

        it('has more than 5 workesrs',()=>{
            expect(artGallery.organizeExhibits(120,20)).to.be.equal('You have 20 display spaces with 6 artworks in each space.');
        })
    })
})