class HomeRenovation {
    constructor(budget){
        this.budget = budget;
        this.tasks = [];
        this.completedTask = [];
    }   

    addTask(description, cost, priority){
        if(cost > this.budget){
            return `Not enough budget to add '${description}' task.`
        }

        this.tasks.push({description,cost,priority});
        this.budget -= cost;

        return `The task '${description}' has been successfully added to the renovation plan.`
    }

    markTaskAsCompleted(description){
        let task = this.tasks.find((a)=>a.description === description);
        
        if(!task){
            throw Error(`Task '${task.description}' not found in the renovation plan.`)
        }

        let index = this.tasks.findIndex((a)=>a.description === description);
        this.tasks.splice(1,index);

        this.completedTask.push({task});

        return `The task '${task.description}' has been successfully completed.`;
    }

    getPriorityTasksCount (minimalPriority){
        if(minimalPriority <= 0){
            return `The priority cannot be zero or negative.`;
        }

        const tasksArr = this.tasks.filter((a)=>a.priority >= minimalPriority);

        if(tasksArr.length === 0 ){
            return `No tasks found with priority ${minimalPriority} or higher.`;
        }else{
            return `You have ${this.tasks.length} tasks to prioritize.`;
        }


    }

    renovationSummary(){
        const result = [];
        if(this.completedTask.length === 0){
            throw Error("No tasks have been completed yet!");
        }

        result.push(`Budget left ${this.budget}.`);
        result.push(`You have completed ${this.completedTask.length} tasks.`);
        result.push("Pending tasks in the renovation plan:");

        this.tasks.forEach(({description,cost,priority})=>{
            result.push(`${description} - Cost: ${cost}, Priority: ${priority}`)
        })

        return result.join('\n');

    }
}