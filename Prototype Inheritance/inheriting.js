function inheriting(){
    class Person{
        constructor(name,email){
            this.name = name;
            this.email = email;
        }
    }

    Person.prototype.toString = function(){
        return  `Person (name: ${this.name}, email: ${this.email})`;
    }
    
    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email,toString);
            this.subject = subject;
        }

        toString () {
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
        }
    }

    class Student extends Person{
        constructor(name,email,course){
            super(name,email);
            this.course = course;
        }

        toString(){
            return `Student (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

const Teacher =  inheriting().Teacher;
const fisrtTeacher = new Teacher('Radoslav','Todorov','Math');
console.log(fisrtTeacher.toString());
