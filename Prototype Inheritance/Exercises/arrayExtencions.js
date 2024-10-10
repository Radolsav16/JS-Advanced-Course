(function solve(){
    Array.prototype.last = function(){
        return this[this.length - 1];
    }
    Array.prototype.skip = function(n){
        if( n < 0 || n > this.length - 1) return;
        return this.slice(n);
    }

    Array.prototype.take = function(n){
        if( n < 0 || n > this.length - 1) return;

        return this.slice(0,n);
    }

    Array.prototype.sum = function(){
        return this.reduce((acc,val)=> acc + val,0);
    }

    Array.prototype.average = function() {
        return this.sum() / this.length;
    }
})();


let arr = [1,2,3,4,5,6,6,7,10];

let sum  = arr.sum();
let skipArr = arr.skip(3);
console.log(skipArr);


