let a = [1, 2, 3, 4, 5];
let b = a.slice();

b.push(10);

console.log(a);
console.log(b);

function echo(param) {
  console.log(param.length);
  console.log(param);
}

function stringLength(str1, str2, str3) {
  const fisrtLength = str1.length;
  const secondLenght = str2.length;
  const thirthLength = str3.length;

  const sum = fisrtLength + secondLenght + thirthLength;
  console.log(sum);
  const avarageLength = Math.floor(sum / 3);
  console.log(avarageLength);
}
stringLength("chocolate", "ice cream", "cake");

function largestNumber(num1, num2, num3) {
  const arr = [num1, num2, num3];
  let largestNum = Number.MIN_SAFE_INTEGER;
  for (let num of arr) {
    if (num > largestNum) {
      largestNum = num;
    }
  }
  console.log(`The largest number is ${largestNum}.`);
}
largestNumber();

function circleArea(param) {
  const type = typeof param;
  if (type === "number") {
    const raduis = Number(param);
    const PI = Math.PI;
    const result = Math.pow(raduis, 2) * PI;
    console.log(result.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${type}.`
    );
  }
}
circleArea("sjsj");

function mathOperations(num1, num2, operator) {
  let result = 0;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else if (operator === "%") {
    result = num1 % num2;
  } else if (operator === "**") {
    result = num1 ** num2;
  }

  console.log(result);
}
mathOperations(5, 6, "+");

function sumOfNumbers(n, m) {
  const arr = [n, m].map(Number);
  let sum = 0;

  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }

  console.log(sum);
}
sumOfNumbers("5", "9");

function dayOfTheWeek(day) {
  switch (day) {
    case "Monday":
      console.log(1);
      break;
    case "Tuesday":
      console.log(2);
      break;
    case "Wednesday":
      console.log(3);
      break;
    case "Thursday":
      console.log(4);
      break;
    case "Friday":
      console.log(5);
      break;
    case "Saturday":
      console.log(6);
      break;
    case "Sunday":
      console.log(7);
      break;

    default:
      console.log("error");
      break;
  }
}
dayOfTheWeek("invalid");


function dayInTheMohth(month,year){

   const data = new Date(year,month,0);
   let days = data.getDate();
   console.log(days);
   

   
   
   
   
   
}
dayInTheMohth(1,2012);
dayInTheMohth(2,2021)


function makeRectange(num){
    if(num){
        for(let i = 0;i < num;i++){
            console.log(`* `.repeat(num));
        }
    }else{
        for(let i = 0;i < 5 ;i++){
            console.log(`* `.repeat(5));
        }
    }
}
makeRectange(3);


function aggregateElements(arr){

    function sum(arr){
        let sum = 0;
        arr = arr.map(Number).forEach(element => {
            sum += element;
        });

        return sum;
    }

    function secondSum(arr){
        let sum = 0;
        arr = arr.map(Number).forEach((elemnt)=>{
            sum += 1 / elemnt;
        });
        return sum;
    }

    function concatination(arr){
        let string = '';
        arr.forEach((el)=>{
            string += el;
        })
        return string;
    }

    const addition = sum(arr);
    const inverse = secondSum(arr);
    const  concat = concatination(arr);

    console.log(addition);
    console.log(inverse);
    console.log(concat);
    
    
    

}
aggregateElements([1, 2, 3]);