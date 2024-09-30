function sortSomethink(input, order) {
  const sortedArrays = input.sort((a, b) => a - b);
  const result = order === "asc" ? sortedArrays : sortedArrays.reverse();
  return result;
}
console.log(sortSomethink([14, 7, 17, 6, 8], "desc"));

function argumentInfo(...input) {
  const tally = {};

  for (let row of input) {
    const key = typeof row;
    if (tally[key]) {
      tally[key]++;
    }else{
    tally[key] = 1;
    }
    console.log(`${key}: ${row}`);
  }
  Object.entries(tally)
    .sort((arr1, arr2) => arr2[1] - arr1[1])
    .forEach((arr) => {
      console.log(`${arr[0]} = ${arr[1]}`);
    });
}
argumentInfo(
    { name: 'bob'}, 3.333, 9.999
);

function getFibonator(){
    let a = 1
    let b = 1

        return function (){
            const next = a;
            let temp = a;
            a = b;
            b = temp + b;
            
            return next;
        }
}


let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

function solution(){

    const ingredients = {
        protein:0,
        carbohydrate:0,
        fat:0,
        flavours:0
    }
    
    return function (str){
       let [cmd,ingredientsProduct,count] = str.split(' ');
       count = Number(count);
        if(cmd === 'restock'){
            ingredients[ingredientsProduct] += count;
        }

        
    }
}
solution()

let manager = solution ();
console.log (manager('restock flavours 4'));// Success 
// console.log (manager ("prepare lemonade 4"));