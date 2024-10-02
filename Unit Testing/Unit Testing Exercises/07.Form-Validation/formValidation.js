function validate() {
    // const patterns = {
    //     username:/[]/,
    //     password: /[]/,
    //     'confirm-password':/[]/,
    //     email:/[]/
    //     companyNumber:/[]/
    // }   

    const form = document.querySelector('form');
    const checkBoxInputEl  = document.querySelector('#company');
    const divValid = document.querySelector('#valid');
    checkBoxInputEl.addEventListener('change',displayCheckBox)



    function displayCheckBox(e){
        const currcheckBox = e.target;
        const fieldset = document.querySelector('#companyInfo');
        const inputNumbers = document.querySelector('#companyNumber');
        fieldset.style.display = 'block';
        const number = inputNumbers.value;
    }
    
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const inputs = document.querySelectorAll('inputs:not([type="number"])');
        console.log

    })
    
}
