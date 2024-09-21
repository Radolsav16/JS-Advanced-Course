function colorize() {
    const table = Array.from(document.querySelectorAll("tr")).slice(1,-1);

   for(let i = 0; i < table.length;i++){
        const row = table[i];
        const arrayOfChildrens = Array.from(row.children);
        if(i % 2 === 0){
                for(let el of arrayOfChildrens){
                    el.style.backgroundColor = 'teal';
                }
        }
   }

}