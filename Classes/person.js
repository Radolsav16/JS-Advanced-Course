
function personsObject(){
    class Person {
        constructor(firstName,lastName,age,email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
    
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    const personAnna = new Person('Anna','Simpson',22,'anna@yahoo.com');
    const personSoftUni = new Person('SoftUni');
    const personPeter = new Person('Stephan','Johnson',25);
    const personGabriel = new Person('Gabriel','Peterson',24,'g.p@gmail.com');

    const persons  = [personAnna,personSoftUni,personPeter,personGabriel];

    return persons;
}
personsObject();



