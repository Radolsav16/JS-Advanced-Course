function evenPositions(arr) {
  console.log(arr.filter((el, i, arr) => i % 2 === 0).join(" "));
}
evenPositions(["20", "30", "40", "50", "60"]);

// function lastKnumbers(n, k) {
//   const arr = [1];
//   let shifter = 0;
//   for (let i = 1; i < n; i++) {
//     if (i === 1) {
//       arr.push(1);
//     } else if (i === 2) {
//       arr.push(arr.slice(0, 1 + 1).reduce((acc, val) => acc + val));
//     } else {
//       arr.push(arr.slice(i - k, k + shifter).reduce((acc, val) => acc + val));
//       shifter++;
//     }

// }

//   return arr;
// }

// // console.log(lastKnumbers(6, 3));
// console.log(lastKnumbers(8,2));

function sumFisrtAndLast(arr) {
  arr = arr.map(Number);
  let first = arr.shift();
  let last = arr.pop();
  let sum = first + last;

  return sum;
}
sumFisrtAndLast(["20", "30", "40"]);

function negativePositive(arr) {
  const newArr = [];
  for (const num of arr) {
    if (num < 0) {
      newArr.unshift(num);
    } else {
      newArr.push(num);
    }
  }
  newArr.join("\n");
}
negativePositive([7, -2, 8, 9]);

function smallestTwoNums(arr) {
  const smallestNums = [];
  function smallestNumInArr(arr) {
    let smallestNum = arr[0];
    for (const num of arr) {
      if (num < smallestNum) {
        smallestNum = num;
      }
    }
    let indxOfSmallestNum = arr.indexOf(smallestNum);
    arr.splice(indxOfSmallestNum, 1);
    return smallestNum;
  }
  for (let i = 0; i < 2; i++) {
    smallestNums.push(smallestNumInArr(arr));
  }

  return smallestNums.join(" ");
}
console.log(smallestTwoNums([30, 15, 50, 5]));


function biggerHalf(arr){
    let sortedArr = arr.sort((a,b) => a - b);
    let halfIndex =  Math.ceil(arr.length / 2);
    let slicedPart = sortedArr.slice(-halfIndex);

    return slicedPart;

}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));

function pieceOfPai(flavors,fisrtStr,secondStr){
    const arr = [];
    const indxOne = flavors.indexOf(fisrtStr);
    const indxTwo = flavors.indexOf(secondStr) + 1;

    for(let i = indxOne; i < indxTwo;i++){
        arr.push(flavors[i]);
    }   
    
    return arr;

}
pieceOfPai(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
   'Key Lime Pie',
   'Lemon Meringue Pie');

   function proceedPosition(arr){
    let result = arr.filter((el,i,arr) => i % 2 !== 0).map(el=> el * 2).reverse().join(" ");
    return result;
   }
   console.log(proceedPosition([10, 15, 20, 25]));

   function biggestEl(matrix){

    let biggestNum = Number.MIN_SAFE_INTEGER;
        
    for(let row of matrix ){
        for(let col of row){
            if(col > biggestNum){
                biggestNum = col;
            };
        }
        
    }

    return biggestNum;
        
   }
   biggestEl([
    [20, 50, 10],
    [8, 33,145]
]);


function diagonalSum (matrix){
    function mainDiagonalSum(matrix){
        let sum = 0;
        const fisrtNum = matrix[0][0];
        const secondNum = matrix[1][];
        const thirhtNum = matrix[2][2]
    }

    function secondaryDiagonal(matrix){

    }
}
diagonalSum([
    [20, 40],
    [10, 60]
]);

function equalSum(matrix){
    let count = 0;
    for(let i = 0; i < matrix.length;i++){
        
        for(let k = 0; k < matrix[i];k++){
            
        }
    }
}
equalSum([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);