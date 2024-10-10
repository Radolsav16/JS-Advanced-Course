(function solve(){
    // • ensureStart(str) – if the current string doesn't start with the str parameter, 
    // return a new string in which str parameter appended to the beginning of the current string, 
    // otherwise returns the original string

    String.prototype.ensureStart = function (str){
        if(!this.startsWith(str)){
            return str + this;
        }else{
            return this;
        }
    }

    // • ensureEnd(str) – if the current string doesn't end with str parameter,
    //  return a new string in which str parameter appended to the end of the current string, 
    //  otherwise returns the original string

    String.prototype.ensureEnd = function (str){
        if(!this.endsWith(str)){
            return this + str;
        }else{
            return str;
        }
    }

    // • isEmpty() - return true if the string is empty and false otherwise

    String.prototype.isEmpty = function(){
        return this === '' ? true : false; 
    }

    // • truncate(n) – returns the string truncated to n characters by removing words and appends an ellipsis (three periods) to the end. 
    // If a string is less than n characters long, return the same string. If it is longer,
    //  split the string where a space occurs and append an ellipsis to it so that the total length is less than or equal to n. 
    //  If no space occurs anywhere in the string, return n - 3 characters and an ellipsis. 
    //  If n is less than 4, return n amount of periods.

    String.prototype.truncate = function(n){
        if(this.length < n ){
            return this;
        }else if(this.length > n){
           let arrStr = this.split("");
           if(n < 4){
            return '...'.repeat(n);
        }

        if(!arrStr.includes(" ")){
            return 
        }

        }
    }


    // • format(string, …params) - static method to replace placeholders with parameters.
    //  A placeholder is a number surrounded by curly braces.
    //   If parameter index cannot be found for a certain placeholder, do not modify it. 
    //   Note static methods are attached to the String object instead of its prototype. See the examples for more info.

    String.format = function(string,...params){
        let i = 0;
        while(params.length > 0){
            let index = Number(string[string.indexOf('{') + 1]);
            string =  string.replace(`{${index}}`,params[index - i]);
            params.splice(index,1);
            i++;
        }

        return string;
    } 
})()


// let str = 'my string';
// str = str.ensureStart('my');
// str = str.ensureStart('hello ');
// str = str.truncate(16);
// str = str.truncate(14);
// str = str.truncate(8);
// str = str.truncate(4);
// str = str.truncate(2);
// str = String.format('The {0} {1} fox',
//   'quick', 'brown');
// console.log(str)  
// str = String.format('jumps {0} {1}',
//   'dog');

// console.log(str)