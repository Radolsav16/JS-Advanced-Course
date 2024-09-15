function printWithSeparator(arr, separator) {
  return arr.join(separator);
}
console.log(printWithSeparator(["One", "Two", "Three", "Four", "Five"], "-"));

function printNnumbers(arr, num) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += num) {
    newArr.push(arr[i]);
  }

  return newArr;
}
printNnumbers(["5", "20", "31", "4", "20"], 2);

function addAndRemove(commands) {
  let initNum = 0;
  const arr = [];
  for (let command of commands) {
    initNum++;
    if (command === "add") {
      arr.push(initNum);
    } else {
      arr.pop();
    }
  }

  let result = arr.length > 0 ? arr.join("\n") : "Empty";

  return result;
}
console.log(addAndRemove(["add", "add", "add", "add"]));

function rotateArray(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    let el = arr.pop();
    arr.unshift(el);
  }
  return arr.join(" ");
}
console.log(rotateArray(["1", "2", "3", "4"], 2));
function extractFunc(arr) {
  // let currBiggest = Number.MIN_SAFE_INTEGER;
  // let newArr = [];
  // for(let num of arr){
  //     if(num >= currBiggest){
  //         currBiggest = num;
  //         newArr.push(currBiggest);
  //     }
  // }

  // return newArr;
  let previousVal;
  arr.reduce((acc, val, i) => {
    if (val < previousVal) {
      arr.splice(i, 1);
    }
    previousVal = val;
  });

  return arr;
}
console.log(extractFunc([1, 3, 8, 4, 10, 12, 3, 2, 24]));

function listNames(arr) {
  let result = arr
    .sort((a, b) => a.localeCompare(b))
    .map((el, i) => `${i + 1}.${el}`)
    .join("\n");
  return result;
}
console.log(listNames(["John", "Bob", "Christina", "Ema"]));

function sortingNumbers(arr) {
  let newArr = [];
  let sortedArr = arr.sort((a, b) => b - a);
  while (sortedArr.length > 0) {
    let smallNum = sortedArr.pop();
    let biggest = sortedArr.shift();
    newArr.push(smallNum, biggest);
  }

  return newArr;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

function sortingBy2Criteria(arr) {
  return arr
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .join("\n");
}
console.log(sortingBy2Criteria(["alpha", "beta", "gamma"]));
function magicMatrix(arr) {
  function isSumOfSellIsMagiacal(arr) {
    let isMagical = true;
    let previousSum = 0;
    for (let i = 0; i < arr.length; i++) {
      const currArr = arr[i];
      let sum = currArr.reduce((acc, val) => acc + val);
      if (i === 0) {
        previousSum = sum;
      }
      if (sum !== previousSum) {
        isMagical = false;
        break;
      } else {
        previousSum = sum;
      }
    }
    return isMagical;
  }
  function isSumOfColumnsIsMagical(arr) {
    let isMagical = true;
    const allSum = {
      sumOne: 0,
      sumTwo: 0,
      sumThree: 0,
    };

    for (let i = 0; i < arr.length; i++) {
      for (let k = 0; k < arr[i].length; k++) {
        if (k === 0) {
          allSum.sumOne += arr[i][k];
        } else if (k === 1) {
          allSum.sumTwo += arr[i][k];
        } else if (k === 2) {
          allSum.sumThree += arr[i][k];
        }
      }
    }

    if (
      (allSum.sumOne === allSum.sumTwo) &&
      (allSum.sumOne === allSum.sumThree) &&
      (allSum.sumThree === allSum.sumTwo)
    ) {
      isMagical = true;
    } else {
      isMagical = false;
    }

    return isMagical;
  }

  let isMagical =
    isSumOfColumnsIsMagical(arr) === isSumOfSellIsMagiacal(arr) ? true : false;

  return isMagical;
}
console.log(
  magicMatrix([
    [4, 5, 7],
    [6, 5, 4],
    [5, 5, 5],
  ])
);

function tikTakGame(arr){
    const ticToeDashboard = [
        [false,false,false],
        [false,false,false],
        [false,false,false]
    ];

    function winSituation()

   for (let i = 0; i < arr.length; i++) {
    const moovments = arr[i];
    let [row , col] = moovments.split(" ");
    if(i % 2 === 0 ){
        ticToeDashboard[row][col] = 'X'
    }else{
        ticToeDashboard[row][col] = 'O';
    }
    
   }

   console.log(ticToeDashboard);
   

}
tikTakGame([
      '0 1', '0 0', '0 2',
      '2 0', '1 0', '1 1',
      '1 2', '2 2', '2 1',
      '0 0', ''
    ]);