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
  model: "Opel Vectra",
  power: 110,
  color: "grey",
  carriage: "coupe",
  wheelsize: 17,
};
console.log(carFactory(input).engine);

function heroicInventory(input) {
  const resultArr = [];
  for (let info of input) {
    let [name, level, items] = info.split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];
    resultArr.push({ name, level, items });
  }

  console.log(JSON.stringify(resultArr));
}
console.log(heroicInventory(["Jake / 1000 / Gauss, HolidayGrenade"]));

function lowestPriceInCities(input) {
  const obj = {};

  for (const info of input) {
    let [town, product, price] = info.split(" | ");
    price = Number(price);

    if (obj[product]) {
      const currPrice = obj[product].price;
      if (price < currPrice) {
        obj[product] = { town, price };
      }
    } else {
      obj[product] = { town, price };
    }
  }

  for (let keys in obj) {
    console.log(`${keys} -> ${obj[keys].price} (${obj[keys].town})`);
  }
}

lowestPriceInCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);

function storeCatolgue(array) {
  const obj = {};
  for (const str of array) {
    let [name, price] = str.split(" : ");
    price = Number(price);
    let mainLetter = name[0];

    if (obj[mainLetter]) {
      obj[mainLetter].push({ name, price });
    } else {
      obj[mainLetter] = [{ name, price }];
    }
  }

  Object.entries(obj)
    .sort((arrA, arrB) => arrA[0].localeCompare(arrB[0]))
    .forEach((el) => {
      const groupLetter = el[0];
      const arr = el[1];
      const sortArr = arr.sort((a, b) => a.name.localeCompare(b.name));

      console.log(groupLetter);

      for (let obj of sortArr) {
        console.log(`  ${obj.name}: ${obj.price}`);
      }
    });
}
storeCatolgue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

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

function rectangle(width, height, color) {
  // let  colorStr = color;
  // colorStr =  color[0].toUpperCase() + color.substring(1);
  return {
    width,
    height,
    color,
    calcArea: () => {
      return width * height;
    },
  };
}
rectangle();

let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

function createSortedList() {
  const obj = {
    update: () => {
      obj.size = obj._arr.length;
      obj._arr.sort((a, b) => a - b);
    },

    add: (el) => {
      obj._arr.push(el);
      obj.update();
    },
    remove: (index) => {
      obj._arr.splice(index, 1);
      obj.update();
    },
    get: (index) => {
      return obj._arr[index];
    },
    _arr: [],
    size: 0,
  };

  return obj;
}
createSortedList();

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

function solve() {
  const heroes = {
    mage: (name) => {
      const obj = {
        name,
        health: 100,
        mana: 100,
        cast: (spell) => {
          obj.mana--;
          console.log(`${obj.name} cast ${spell}`);
        },
      };
      return obj;
    },
    fighter: (name) => {
      const obj = {
        name,
        health: 100,
        stamina: 100,
        fight: () => {
          obj.stamina--;
          console.log(`${obj.name} slashes at the foe!`);
        },
      };
      return obj;
    },
  };

  return heroes;
}
solve();

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);



