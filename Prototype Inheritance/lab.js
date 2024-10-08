function createPerson(firstName,lastName){
    'use strict';

    const result = {
        firstName,
        lastName
    }

    Object.defineProperty(result,'fullname',{
        

        get(){
            return `${result.firstName} ${result.lastName}`;
        },
        set(value){
            let [firstName,lastName] = value.split(" ");
            result.fullname = `${firstName} ${lastName}`;
        }
    })
   
    
    


    
  
}
let person = createPerson("Peter", "Ivanov");
console.log(person)
// console.log(person.fullName); //Peter Ivanov
// person.firstName = "George";
// console.log(person.fullName); //George Ivanov
// person.lastName = "Peterson";
// console.log(person.fullName); //George Peterson
// person.fullName = "Nikola Tesla";
// console.log(person.firstName); //Nikola
// console.log(person.lastName); //Tesla
