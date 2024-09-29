function areaVolumeCalc(area, vol, input) {
  const data = JSON.parse(input);
  const output = [];
  data.forEach((obj) => {
    const areaValue = area.call(obj);
    const volumeValue = vol.call(obj);
    output.push({ area: areaValue, volume: volumeValue });
  });

  return output;
}

areaVolumeCalc(
  area,
  vol,
  `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

function solution(a) {
  return function add(b) {
    return a + b;
  };
}

// let add5 = solution(5);
// // console.log(add5(2));
// console.log(add5(3));

// function createFormatter(separator, symbol, symbolFirst, value) {
//     let result = Math.trunc(value) + separator;
//     result += value.toFixed(2).substr(-2,2);
//     if (symbolFirst) return symbol + ' ' + result;
//     else return result + ' ' + symbol;
// }

// function currencyFormatter(value){

// }

// let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
// console.log(dollarFormatter(5345));   // $ 5345,00
// console.log(dollarFormatter(3.1429)); // $ 3,14
// console.log(dollarFormatter(2.709));  // $ 2,71

function solve(data, propertyStr) {
  data = JSON.parse(data);
  if (propertyStr === "all") {
    data.forEach((obj) => {
      console.log(
        `${obj.id - 1}. ${obj.first_name} ${obj.last_name} - ${obj.email}`
      );
    });
    return;
  }

  const [key, value] = propertyStr.split("-");

  const sortedData = data.filter((obj) => obj[key] === value);

  if (!sortedData.length) return;

  sortedData.forEach((obj) => {
    console.log(
      `${obj.id - 1}. ${obj.first_name} ${obj.last_name} - ${obj.email}`
    );
  });
}
// solve(`[{
//     "id": "1",
//     "first_name": "Ardine",
//     "last_name": "Bassam",
//     "email": "abassam0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Jost",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   },
// {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }]`,
// 'gender-Female');
solve(
  `[{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"}, {"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "kjost1@forbes.com","gender": "Female"}, {"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"},{"id": "4","first_name": "Evanne","last_name": "Maldina","email": "ev2@hostgator.com","gender": "Male"}]`,
  "last_name-Johnson"
);

function solution() {
  let str = "";

  return {
    append,
    removeStart,
    removeEnd,
    print,
  };

  function append(chars) {
    str += chars;
  }

  function removeStart(n) {
    str = str.slice(n);
  }

  function removeEnd(n) {
    str = str.slice(0, -n);
  }

  function print() {
    console.log(str);
  }
}

let firstZeroTest = solution();

firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


function solve2(input){
    
    const collection = [];

    const eventHolder =  {
        add :(str)=>{
            collection.push(str)
        },
        remove:(str)=>{
            let index = collection.indexOf(str);
            collection.splice(index,1);
        },
        print:()=>{
            console.log(collection.join(','))
        }
    }

    for(let strs of input){
        const [command,str] = strs.split(" ");
        eventHolder[command](str);
    }
}
solve2(['add hello', 'add again', 'remove hello', 'add again', 'print'])


function objInheritance(input){
    const objects = [];
    
    for(let row of input){
        const rowArr = row.split(" ");
        if(rowArr.includes('inherit')){
            const [cmd,newObjName,inheritance,ref] = rowArr;
            const obj = objects.find((obj)=> obj.name === ref);
            createInheritance({},obj,newObjName);
        }else if(rowArr.includes("set")){
            const [cmd,objName,key,value] = rowArr;
            const obj = objects.find((obj)=> obj.name === objName);
            set(obj,key,value);
        }else if(rowArr.includes('create')){
            const [cmd,name] = rowArr;
            create(name);
        }else if(rowArr.includes('print')){
            const [cmd,objName] = rowArr;
            const obj = objects.find((obj)=> obj.name === objName);
            print(obj);
        }
    }

    function create(objName){
        objects.push({name:objName});
    }
    function createInheritance(newObj,receivedObj,name){
        newObj =  receivedObj;
        newObj.name = name;
        objects.push(newObj);
    }

    function set(obj,key,value){
        obj[key] = value;
    }

    function print(obj){
       Object.keys(obj).forEach((key) =>{
        console.log(`${key}:${obj[key]}`);
       })
    }
}
objInheritance(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])