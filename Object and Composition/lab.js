function factoryFunc(name, population, treasury) {
  return { name, population, treasury };
}
factoryFunc("Tortuga", 7000, 15000);

function townPopulation(input) {
  const obj = {};
  for (let inputStr of input) {
    const [city, population] = inputStr.split(" <-> ");
    if (obj[city]) {
      obj[city] += Number(population);
    } else {
      obj[city] = Number(population);
    }
  }
  Object.keys(obj).forEach((k) => console.log(`${k} : ${obj[k]}`));
}
//
// townPopulation([
//     'Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000'
// ]);

townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);

function cityTaxes(name, population, treasury) {
  const city = {
    name,
    population,
    treasury,
    collectTaxes,
    applyGrowth,
    applyRecession,
  };
  city.taxRate = 10;

  function collectTaxes() {
    this.treasury += this.population * this.taxRate;
  }

  function applyGrowth(percentage) {
    this.population += Math.floor(this.population * (percentage / 100));
  }

  function applyRecession(percentage) {
    this.treasury -= Math.floor(this.treasury * (percentage / 100));
  }

  return city;
}

const city = cityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

function factory(library, orders) {
  const resultArr = [];
  for (let obj of orders) {
    const currObj = {};
    const { name } = obj.template;
    const arrOfFuncs = obj.parts;
    currObj.name = name;

    for (const func of arrOfFuncs) {
      currObj[func] = library[func];
    }

    resultArr.push(currObj);
  }

  return resultArr;
}

const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};
const orders = [
  {
    template: { name: "ACME Printer" },
    parts: ["print"],
  },
  {
    template: { name: "Initech Scanner" },
    parts: ["scan"],
  },
  {
    template: { name: "ComTron Copier" },
    parts: ["scan", "print"],
  },
  {
    template: { name: "BoomBox Stereo" },
    parts: ["play"],
  },
];
const products = factory(library, orders);

for (let obj of products) {
  console.log(obj);
}

function createAssemblyLine() {
  const obj = {
    hasClima: (obj) => {
      obj.temp = 21;
      obj.tempSettings = 21;
      obj.adjustTemp = () => {
        if (obj.temp < obj.tempSettings) {
          obj.temp++;
        } else if (obj.temp > obj.tempSettings) {
          obj.temp--;
        }
      };
    },
    hasAudio: (obj) => {
      obj.currentTrack = { name: null, artist: null };
      obj.nowPlaying = () => {
        if (currentTrack.name !== null || currentTrack.artist !== null) {
          console.log(
            `Now playing '${currentTrack.name}' by ${currentTrack.artist}`
          );
        }
      };
    },
    hasParktronic: (obj) => {
      obj.checkDistance = (distance) => {
        if (distance < 0.1) {
          console.log(`Beep! Beep! Beep!`);
        } else if (distance >= 0.1 && distance < 0.25) {
          console.log(`Beep! Beep!`);
        } else if (distance >= 0.25 && distance < 0.5) {
          console.log(`Beep!`);
        } else {
          console.log("");
        }
      };
    },
  };

  return obj;
}

const assemblyLine = createAssemblyLine();

const myCar = {
  make: "Toyota",
  model: "Avensis",
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
