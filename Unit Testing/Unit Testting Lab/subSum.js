function subSum(arr,indx1,indx2){
    let sum = 0;

    if(!Array.isArray(arr)){
        return NaN;
    }

    if(indx1 <  0 ){
        indx1 = 0;
    }

    if(indx2 > arr.length - 1){
        indx2 = arr.length -1;
    }

    for(let i = indx1;i <= indx2;i++){
        let num = Number(arr[i]);
        sum += num;
    }

    return sum;
    
} 



    console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
    console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
    console.log(subSum([10, 'twenty', 30, 40], 0, 2));
    console.log(subSum([], 1, 2));
    console.log(subSum('text', 0, 2))



//  150

//  3.3

//  NaN

//  0

//  NaN


