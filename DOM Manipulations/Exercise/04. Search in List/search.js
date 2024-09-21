function search() {
   // TODO 
   const input = document.getElementById('searchText');
   const list = Array.from(document.getElementById('towns').children);

   let needToDelete = false;

   for(let li of list){
      if(li.style.textDecoration === 'underline'){
       clear();
       break;  
      }
   }

   let matched = 0;
   const textResult = document.getElementById('result');

  

   function clear(){
      input.value = '';
      textResult.innerHTML = '';
      for(let li of list){
         li.style.fontWeight = 'normal';  
         li.style.textDecoration = 'none';
      }
      

   }

   for(let i = 0; i < list.length;i++){
      const li = list[i];
      let textOfLi = li.textContent;
      for(let char of textOfLi){
         if(input.value.startsWith(char)){
            matched++;
            li.style.fontWeight = 'bold';  
             li.style.textDecoration = 'underline';
             break;
         }
      }
     
   }

   textResult.innerHTML = `${matched} matches found`;
   // clear()
   
}
