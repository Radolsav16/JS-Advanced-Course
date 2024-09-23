function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
     const tdList  = Array.from(document.querySelectorAll('td')).slice(1);
     const inputEl = document.querySelector('#searchField');
     const inputText = inputEl.value.toLowerCase()

     if(!inputText) return;

     tdList.forEach(el => {
         const parentEl = el.parentElement;
         parentEl.classList.remove();
   })

      
     
      tdList.forEach(el => {
         if(el.textContent.indexOf(inputText) >= 0){
            const parentEl = el.parentElement;
            parentEl.classList.toggle('select');
         }
      });


      inputEl.value = '';

     

     

   }
}