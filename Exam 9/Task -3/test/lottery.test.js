import { expect } from "chai";
import { lottery } from "../lottery.js";

describe('Test',function(){
    describe('Test buyLotteryTicet function',function(){
        it('has false buy value',()=>{
            expect(()=>lottery.buyLotteryTicket(20,5,false)).to.throw('Unable to buy lottery ticket!');
        })

        it('has wrong ticket prcie value',()=>{
            expect(()=>lottery.buyLotteryTicket(-1,5,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(0,5,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket('price',5,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(false,5,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(undefined,5,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(null,5,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket([],5,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket({},5,true)).to.throw('Invalid input!');

        })

        it('has wrong ticketCount  value',()=>{
            expect(()=>lottery.buyLotteryTicket(5,-1,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(5,0,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(5,'str',true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(5,null,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(5,undefined,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(5,[],true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(5,{},true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(5,false,true)).to.throw('Invalid input!');

        })

        it('test valid info',()=>{
            expect(lottery.buyLotteryTicket(20,5,true)).to.be.equal('You bought 5 tickets for 100$.');
        })
    })

    describe('Test checkTicket function',function(){
        it('test ticket Numbers not array value',()=>{
            expect(()=>lottery.checkTicket('str',[])).to.throw('Invalid input!');
            expect(()=>lottery.checkTicket([],[])).to.throw('Invalid input!');
            expect(()=>lottery.checkTicket(null,[])).to.throw('Invalid input!');
            expect(()=>lottery.checkTicket(undefined,[])).to.throw('Invalid input!');
            expect(()=>lottery.checkTicket(false,[])).to.throw('Invalid input!');
            expect(()=>lottery.checkTicket({},[])).to.throw('Invalid input!');

        })  

        it('test lucku Numbers not array value',()=>{
            expect(()=>lottery.checkTicket([],[])).to.throw('Invalid input!');
            expect(()=>lottery.checkTicket([],{})).to.throw('Invalid input!');
            expect(()=>lottery.checkTicket([],{})).to.throw('Invalid input!');
            expect(()=>lottery.checkTicket([],'str')).to.throw('Invalid input!');
            expect(()=>lottery.checkTicket([1,2,3],[1,24,4])).to.throw('Invalid input!');
            expect(()=>lottery.checkTicket([],20)).to.throw('Invalid input!');

        })  

        it('has correct input with JackPot',()=>{
            expect(lottery.checkTicket([1,2,3,4,5,6],[1,2,3,4,5,6])).to.be.equal("You win the JACKPOT!!!");
        })

        it('has just win',()=>{
           expect(lottery.checkTicket([12,11,10,20,30,70],[30,70,10,12,1,2])).to.be.equal('Congratulations you win, check your reward!')
        })
    })

    describe('Test secondChance  function',function(){
        it('test ticket id',()=>{
            expect(()=>lottery.secondChance('str',[])).to.throw('Invalid input!');
            expect(()=>lottery.secondChance([],[])).to.throw('Invalid input!');
            expect(()=>lottery.secondChance({},[])).to.throw('Invalid input!');
            expect(()=>lottery.secondChance(null,[])).to.throw('Invalid input!');
            expect(()=>lottery.secondChance(undefined,[])).to.throw('Invalid input!');
            expect(()=>lottery.secondChance(false,[])).to.throw('Invalid input!');

        })  

        it('test secondChance array',()=>{
            expect(()=>lottery.secondChance(5,{})).to.throw('Invalid input!');
            expect(()=>lottery.secondChance(5,'str')).to.throw('Invalid input!');
            expect(()=>lottery.secondChance(5,null)).to.throw('Invalid input!');
            expect(()=>lottery.secondChance(5,undefined)).to.throw('Invalid input!');
            expect(()=>lottery.secondChance(5,4)).to.throw('Invalid input!');
            expect(()=>lottery.secondChance(5,false)).to.throw('Invalid input!');

        })  

        it('has id in array',()=>{
            expect(lottery.secondChance(5,[1,2,3,4,5])).to.be.equal("You win our second chance prize!");
        })

        it('dont have it',()=>{
            expect(lottery.secondChance(5,[1,2,3,4,7])).to.be.equal("Sorry, your ticket didn't win!");

        })
    })
})