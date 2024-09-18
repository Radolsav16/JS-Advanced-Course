function calorieObject(input) {
  const obj = {};
  for (let i = 0; i < input.length; i += 2) {
    const product = input[i];
    const calories = Number(input[i + 1]);
    obj[product] = calories;
  }

  return obj;
}
calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);

function constructionCrew(obj) {
  if (!obj.hasOwnProperty("dizziness")) {
    return obj;
  }

  if (obj.dizziness) {
    obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
    obj.dizziness = false;
  }

  return obj;
}
console.log(
  constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true,
  })
);

function carFactory(car) {
  let volume = 0;
  let power = car.power;
  if (power <= 90) {
    power = 90;
    volume = 1800;
  } else if (power <= 120) {
    power = 120;
    volume = 2400;
  } else if (power <= 200) {
    power = 200;
    volume = 3500;
  }

  const wheelSize = car.wheelsize % 2 === 0 ? car.wheelsize - 1 : car.wheelsize;
  const wheelArr = new Array(4).fill(wheelSize);

  return {
    model: car.model,
    engine: { power, volume },
    carriage: { type: car.carriage, color: car.color },
    wheels: wheelArr,
  };
}

// let input = {
//   model: "VW Golf II",
//   power: 90,
//   color: "blue",
//   carriage: "hatchback",
//   wheelsize: 14,
// };

let input = {
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
};
console.log(carFactory(input).engine);

// function heroicInventic(input) {
//   const result = [];
//   for (const str of input) {
//     let [heroName, heroLevel, itemsStr] = str.split(" / ");
//     heroLevel = Number(heroLevel);
//     const itemArr = itemsStr ? itemsStr.split(", ") : [];
//     result.push({ name: heroName, level: heroLevel, items: itemArr });
//   }

//   return JSON.stringify(result);
// }
// console.log(
//   heroicInventic([
//     "Isacc / 25 / Apple, GravityGun",
//     "Derek / 12 / BarrelVest, DestructionSword",
//     "Hes / 1 / Desolator, Sentinel, Antara",
//   ])
// );

// function lowestPriceInCities(input) {
//   const result = {};
//   for (let str of input) {
//     let [town, product, productPrice] = str.split(" | ");
//     productPrice = Number(productPrice);
//     if (result[product]) {
//       result[product] =
//         productPrice < result[product].productPrice
//           ? { town, productPrice }
//           : result[product];
//     }
//     result[product] = { town, productPrice };
//   }

//   console.log(result["Sample Product"]);
// }

// lowestPriceInCities([
//   "Sample Town | Sample Product | 1000",
//   "Sample Town | Orange | 2",
//   "Sample Town | Peach | 1",
//   "Sofia | Orange | 3",
//   "Sofia | Peach | 2",
//   "New York | Sample Product | 1000.1",
//   "New York | Burger | 10",
// ]);

// function storeCatolgue(array) {
//   const obj = {};
//   for (const str of array) {
//     let [name, price] = str.split(" : ");
//     price = Number(price);
//     let mainLetter = name[0];

//     if (obj[mainLetter]) {
//       obj[mainLetter].push({ name, price });
//     } else {
//       obj[mainLetter] = [{ name, price }];
//     }
//   }

//   Object.entries(obj)
//     .sort((arrA, arrB) => arrA[0].localeCompare(arrB[0]))
//     .forEach((el) => {
//       const groupLetter = el[0];
//       const arr = el[1];
//       const sortArr = arr.sort((a, b) => a.name.localeCompare(b.name));

//       console.log(groupLetter);

//       for (let obj of sortArr) {
//         console.log(`  ${obj.name}: ${obj.price}`);
//       }
//     });
// }
// storeCatolgue([
//   "Appricot : 20.4",
//   "Fridge : 1500",
//   "TV : 1499",
//   "Deodorant : 10",
//   "Boiler : 300",
//   "Apple : 1.25",
//   "Anti-Bug Spray : 15",
//   "T-Shirt : 10",
// ]);

// function townsToJSON(input) {
//   input.shift();
//   const result = [];

//   const regex = /[|\s]+/gm;

//   class Table {
//     constructor(town, latitude, longtitude) {
//       this.Town = town;
//       this.Latitude = latitude;
//       this.Longitude = longtitude;
//     }
//   }

//   for (let str of input) {
//     const arr = str.split(regex);
//     arr.pop();
//     arr.shift();

//     let [town, latitude, longtitude] = arr;
//     latitude = Number(latitude).toFixed(2);
//     longtitude = Number(longtitude).toFixed(2);

//     latitude = Number(latitude)
//     longtitude = Number(longtitude)

//     const row = new Table(town, latitude, longtitude);
//     result.push(row);
//   }

//   return JSON.stringify(result);
// }

// // tashak reshenie pak shte trqbva da reshavam
// console.log(townsToJSON([
//   "| Town | Latitude | Longitude |",
//   "| Sofia | 42.696552 | 23.32601 |",
//   "| Beijing | 39.913818 | 116.363625 |",
// ]));
