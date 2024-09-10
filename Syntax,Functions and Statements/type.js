let a = [1,2,3,4,5];
let b = a.slice();

b.push(10);

console.log(a);
console.log(b);


function echo(param){
    console.log(param.length);
    console.log(param);
    
}

function stringLength(str1,str2,str3){
    const  fisrtLength = str1.length;
    const  secondLenght = str2.length;
    const  thirthLength = str3.length;

    const  sum = fisrtLength + secondLenght + thirthLength;
    console.log(sum);
    const avarageLength = Math.floor(sum / 3);
    console.log(avarageLength);
    
    
}
stringLength('chocolate', 'ice cream', 'cake');

function largestNumber(num1,num2,num3){
    const  arr = [num1,num2,num3];
    let largestNum = Number.MIN_SAFE_INTEGER;
    for(let num of arr){
        if(num > largestNum){
            largestNum = num;
        }
    }
    console.log(`The largest number is ${largestNum}.`);
    
}
largestNumber();

function circleArea(param){
    const type = typeof(param);
    if(type === 'number'){
        const  raduis = Number(param);
        const PI = Math.PI;
        const result = Math.pow(raduis,2) * PI;
        console.log(result.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
        
    }   
    


}
circleArea('sjsj');