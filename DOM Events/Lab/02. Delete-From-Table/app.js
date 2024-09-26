function deleteByEmail() {
    const inputEl = document.querySelector('[name="email"]');
    const tableEmailCol = Array.from(document.querySelectorAll('table tbody tr td:nth-of-type(2)'));
    const inputValue = inputEl.value.toLowerCase();
    const output =  document.querySelector('#result');

    if(!inputValue) return;

  

    let resultDivText = false;
  
   tableEmailCol.forEach((col) =>{
    const email = col.textContent.toLowerCase();
        if(email.includes(inputValue)){
            const row = col.parentElement;
            row.remove(col);
            resultDivText = true;
        }
   });


   output.textContent =resultDivText ? 'Found.':'Not found.';

   inputEl.value = '';
   
    
    

}