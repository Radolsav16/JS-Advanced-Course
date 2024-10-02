function validate() {
   const inputEl = document.querySelector('#email');
   const pattern = /^.*@.*\..*$/g;

   inputEl.addEventListener('change',(e)=>{
    const value = e.target.value;
    e.target.className = !pattern.test(value) ? 'error' : '';
   })
}