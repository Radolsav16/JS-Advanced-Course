import { expect } from "chai";
import { streamingServiceSelector } from "../streamingServiceCollector.js";

describe('Test Streaming Service Selector',function(){
    describe('Test selectingContent function',function(){
     

        it('has thrown error by wrong type',()=>{
            expect(()=>streamingServiceSelector.selectingContent('str','platform','Action')).to.throw("We currently only support 'Movie' or 'TV Show' types.");
        })  

        it('has not inludes in supportedGenres',()=>{
            expect(()=>streamingServiceSelector.selectingContent('Movie','Netflix','Radko')).to.throw(`We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.`)
        })

        it('has correct values',()=>{
            expect(streamingServiceSelector.selectingContent('Movie','Netflix','Action')).to.be.equal('You can watch this Action Movie on Netflix. Enjoy your Action-filled experience!')
        })
    })

    describe('Test availbalePlatforms function',function(){
        it('has wrong platform value',()=>{
            expect(()=>streamingServiceSelector.availablePlatforms('str',3)).to.throw('Invalid platform selection.');
            expect(()=>streamingServiceSelector.availablePlatforms([1,2],3)).to.throw('Invalid platform selection.');
            expect(()=>streamingServiceSelector.availablePlatforms({},3)).to.throw('Invalid platform selection.');
            expect(()=>streamingServiceSelector.availablePlatforms(undefined,3)).to.throw('Invalid platform selection.');
            expect(()=>streamingServiceSelector.availablePlatforms(false,3)).to.throw('Invalid platform selection.');
            expect(()=>streamingServiceSelector.availablePlatforms(false,3)).to.throw('Invalid platform selection.');
            expect(()=>streamingServiceSelector.availablePlatforms(20,3)).to.throw('Invalid platform selection.');


        })

        it('has invalid index',()=>{
            expect(()=>streamingServiceSelector.availablePlatforms([1,2,3],4)).to.throw('Invalid platform selection.');
            expect(()=>streamingServiceSelector.availablePlatforms([1,2,3],'str')).to.throw('Invalid platform selection.');
            expect(()=>streamingServiceSelector.availablePlatforms([1,2,3],[])).to.throw('Invalid platform selection.');
            expect(()=>streamingServiceSelector.availablePlatforms([1,2,3],{})).to.throw('Invalid platform selection.');
            expect(()=>streamingServiceSelector.availablePlatforms([1,2,3],undefined)).to.throw('Invalid platform selection.');
            expect(()=>streamingServiceSelector.availablePlatforms([1,2,3],3)).to.throw('Invalid platform selection.');

            
        })

        it('has correct ouptut',()=>{
            expect(streamingServiceSelector.availablePlatforms(['Netflix','BTV Action','Btv'],2)).to.be.equal(`Other available platforms are: Netflix, BTV Action.`)
        })
    })

    describe('Test contentRating function',function(){
        it('has wrong runtimeInMinutes value',function(){
            expect(()=>streamingServiceSelector.contentRating('str',20)).to.throw("Invalid runtime or rating.")
            expect(()=>streamingServiceSelector.contentRating([],20)).to.throw("Invalid runtime or rating.")
            expect(()=>streamingServiceSelector.contentRating({},20)).to.throw("Invalid runtime or rating.")
            expect(()=>streamingServiceSelector.contentRating(-1,20)).to.throw("Invalid runtime or rating.")
            expect(()=>streamingServiceSelector.contentRating(0,20)).to.throw("Invalid runtime or rating.")


        })

        it('has wrong viewer Rating value',function(){
            expect(()=>streamingServiceSelector.contentRating(20,-1)).to.throw("Invalid runtime or rating.")
            expect(()=>streamingServiceSelector.contentRating(20,11)).to.throw("Invalid runtime or rating.")
            expect(()=>streamingServiceSelector.contentRating(20,[])).to.throw("Invalid runtime or rating.")
            expect(()=>streamingServiceSelector.contentRating(20,'str')).to.throw("Invalid runtime or rating.")
            expect(()=>streamingServiceSelector.contentRating(20,{})).to.throw("Invalid runtime or rating.")


        })

        it('has viewer rating >= 7',()=>{
            expect(streamingServiceSelector.contentRating(150,8)).to.be.equal('This content is highly rated (8/10) and has a runtime of 2.50 hours. Enjoy your watch!');
            expect(streamingServiceSelector.contentRating(190,7)).to.be.equal('This content is highly rated (7/10) and has a runtime of 3.17 hours. Enjoy your watch!');

        })

        it('has viewer rating < 7',()=>{
            expect(streamingServiceSelector.contentRating(90,5)).to.be.equal('This content has a lower rating (5/10) and runs for 1.50 hours. You might want to check reviews first.')

        })
    })
})