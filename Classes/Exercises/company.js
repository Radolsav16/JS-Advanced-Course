class Company{
    constructor(){
        this.departments = {};
        this.avarageSalaryLook = {};
    }

    addEmployee(name, salary, position, department){
        if(!name || !salary || !position || !department){
            throw Error("Invalid input!");
        }

        if(salary < 0 ){
            throw Error('Invalid input!');
        }

        if(this.departments.hasOwnProperty(name)){
            name += ' ';
        }

        this.departments[name] = {salary,position,department};

        if(!this.avarageSalaryLook.hasOwnProperty(department)){
            this.avarageSalaryLook[department] = {count : 0 , allSalary:0};
        }

        this.avarageSalaryLook[department].count++;
        this.avarageSalaryLook[department].allSalary += salary;

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    showDepartmentsObject(){
        return this.departments;
    }

    bestDepartment(){
        const arr = Object.entries(this.avarageSalaryLook).sort((a,b)=> b[1].allSalary - a[1].allSalary).shift(); 
        const bestDepartment = arr[0];
        let avarageSalary = arr[1].allSalary / arr[1].count;
        const result = [
            `Best Department is: ${bestDepartment}`,
            `Average salary: ${avarageSalary.toFixed(2)}`

        ]

       
      const filteredWorkers =  Object.entries(this.departments).filter((arr) => arr[1].department === bestDepartment)
      .sort((a,b)=>b[1].salary - a[1].salary || a[0].localeCompare(b[0]));
      filteredWorkers.forEach((arr)=>{
            result.push(`${arr[0].trim()} ${arr[1].salary} ${arr[1].position}`)
        });

        return result.join('\n');
    }

}

let c= new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer","Construction");
c.addEmployee("Stan",2000,"architect","Construction");
c.addEmployee("Stanimir",100000,"digital marketing manager", "Marketing");
c.addEmployee("Pesho", 200000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());