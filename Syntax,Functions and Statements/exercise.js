function fruits(fruit, grams, price) {
  const kilos = grams / 1000;
  const money = kilos * price;
  console.log(
    `I need $${money.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit}.`
  );
}
fruits("orange", 2500, 1.8);

function greatestDivosor(num1, num2) {
  let biggestDivisor = 0;

  for (let i = 1; i <= 10; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      biggestDivisor = i;
    }
  }
  console.log(biggestDivisor);
}

greatestDivosor(2154, 458);

function sameNumber(int) {
  let str = int.toString();
  let arr = str.split("").map(Number);
  let previousNum = arr[0];
  let sum = 0;
  let isSame = true;
  for (let num of arr) {
    sum += num;
    if (num !== previousNum) {
      isSame = false;
    }
    previousNum = num;
  }
  console.log(isSame);
  console.log(sum);
}
sameNumber(222222);

function previousDay(year,month,day) {
    const date = new Date(year,month - 1,day);
    date.setDate(date.getDate() - 1)
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
    
    
  
}
previousDay(2016, 9, 30);

function timeWalk(steps, footprint, speed) {
  let distance = steps * footprint;
  let breaks = 0;

  while(distance > 0){
    distance -= 500;
    breaks++;
  }

  let speedInSec = speed / 3.6;
  let timeInSeconsd;

  console.log(speedInSec);
  

  

//   console.log(`${hours}:${minutes}:${seconds}`);
  
  

  
  
}
timeWalk(4000, 0.6, 5);

// function roadRader(speed, area) {
//   function statusFinder(speed, limit) {
//     let status = "";
//     let speeding = speed - limit;
//     if (speeding <= 20) {
//       status = "speeding";
//     } else if (speeding <= 40) {
//       status = "excessive speeding";
//     } else {
//       status = "reckless driving";
//     }

//     return [status, speeding];
//   }

//   function limitFinder(area) {
//     let limit = 0;
//     if (area === "motorway") {
//       limit = 130;
//     } else if (area === "interstate") {
//       limit = 90;
//     } else if (area === "city") {
//       limit = 50;
//     } else if (area === "residential") {
//       limit = 20;
//     }

//     return limit;
//   }

//   let limit = limitFinder(area);

//   let legal = true;
//   let status = "";
//   let difrence = 0;

//   if (area === "motorway" && speed > limit) {
//     legal = false;
//     let [statusMake, difrenceMake] = statusFinder(speed, limit);
//     status = statusMake;
//     difrence = difrenceMake;
//   } else if (area === "interstate" && speed > limit) {
//     legal = false;
//     let [statusMake, difrenceMake] = statusFinder(speed, limit);
//     status = statusMake;
//     difrence = difrenceMake;
//   } else if (area === "city" && speed > limit) {
//     legal = false;
//     let [statusMake, difrenceMake] = statusFinder(speed, limit);
//     status = statusMake;
//     difrence = difrenceMake;
//   } else if (area === "residential" && speed > limit) {
//     legal = false;
//     let [statusMake, difrenceMake] = statusFinder(speed, limit);
//     status = statusMake;
//     difrence = difrenceMake;
//   }

//   if (legal) {
//     console.log(`Driving ${speed} km/h in a ${limit} zone`);
//   } else {
//     console.log(
//       `The speed is ${difrence} km/h faster than the allowed speed of ${limit} - ${status}`
//     );
//   }
// }
// roadRader(21, "residential");
// roadRader(120, "interstate");

// function cookingByNumbers(num,op1,op2,op3,op4,op5){
//     num = Number(num);
//     let arr = [op1,op2,op3,op4,op5];
//     for(let operation of arr){ 
//         if(operation === 'chop'){
//             num = num / 2;
//             console.log(num);
//         }else if(operation === 'dice'){
//             num = Math.sqrt(num)
//             console.log(num);
//         }else if(operation === 'spice'){
//             num += 1;
//             console.log(num);
//         }else if(operation === 'bake'){
//             num *= 3;
//             console.log(num);
//         }else if(operation === 'fillet'){
//             num -= num * 0.20
//             console.log(num);
            
//         }
//     }
// }
// cookingByNumbers('9','dice','spice','chop','bake','fillet');

// function validatyCharacter(x1,y1,x2,y2){
//     // const fisrtDistance = 
// }
// validatyCharacter();


// function wordCase(sentence){

//     const regEX = /\w+/gm;
//     const buffer = [...sentence.matchAll(regEX)];
//     let words = [];
//     for(let arr of buffer){
//         words.push(arr.shift());   
//     }

//     words = words.map((el)=> el.toUpperCase())
//     console.log(words.join(", "));
    

// }
// wordCase('Hi, how are you?')