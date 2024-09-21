function sumTable() {
   const tbody = document.querySelector('tbody');
   const trArray = Array.from(tbody.children).slice(1,-1);
   const output = document.getElementById("sum");

   let sum = 0;
   
   for(let row of trArray){
        const arr = Array.from(row.children);
        const priceEl = Number(arr[arr.length - 1].textContent);
        sum += priceEl;  
   }

   output.textContent = sum.toFixed(2);
    
}