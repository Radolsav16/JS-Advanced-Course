function validate() {
    
        // const usernamePattern = /[a-zA-Z0-9]{3,20}/gm;
        // const passwordPattern = /\w{5,15}/;
        // const confirmPasswordPattern = /\w{5,15}/;
        // const emailPattern = /^.*@.*\..*$/;
        // const companyNumberPattern = /\n{4,4}/;


        const patterns = {
            username:/[a-zA-Z0-9]{3,20}/gm,
            password:/\w{5,15}/,
            'confirm-password':/\w{5,15}/,
            email:/^.*@.*\..*$/,
            companyNumber:/\n{4,4}/,
        }
     

    const form = document.querySelector('form');
    const checkBoxInputEl  = document.querySelector('#company');
    const divValid = document.querySelector('#valid');
    const fieldset = document.querySelector('#companyInfo');
    const inputNumbers = document.querySelector('#companyNumber');
    checkBoxInputEl.addEventListener('change',(e)=>{
        const currcheckBox = e.target;
        fieldset.style.display = 'block';
        const number = inputNumbers.value;
    })

    const invalidFieldSet = [];

    
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const inputs = Array.from(document.querySelectorAll('input:not([type="number"])'));
       inputs.forEach((input)=>{
            const type = input.id;
            const value = input.value;
            if(type === 'company' && fieldset.style.display == 'none') return;

            if(!patterns[type].test(value)){
                input.style.borderColor = 'red';
                invalidFieldSet.push(input)
            }else{
                input.style.borderColor = '';
            }


       })

       invalidFieldSet.length ? divValid.style.display = 'block':divValid.style.display = 'none';

    })
    
}
