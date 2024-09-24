function search() {
   debugger
   const input = document.getElementById('searchText');
   const inputStr = input.value.trim().toLowerCase();
   const list = Array.from(document.getElementById('towns').children);
   let matched = 0;
   const textResult = document.getElementById('result');

   for(let li of list){
      li.style.textDecoration = 'none';
      li.style.fontWeight = 'normal';
   }

   for(let li of list){
      let str = li.textContent.toLowerCase();
      if(str.includes(inputStr)){
         li.style.textDecoration = 'underline';
         li.style.fontWeight = 'bold';
         matched++;
      }
   }

   textResult.innerHTML = `${matched} matches found`;
   input.value= " ";

}
