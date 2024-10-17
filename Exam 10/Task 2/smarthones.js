class RefurbishedSmartphones{
    constructor(retailer){
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone (model, storage, price, condition){
        if(model === '' || storage < 0 || price < 0 || condition === ''){
            throw Error('Invalid smartphone!');
        }

        this.availableSmartphones.push({model,storage,price,condition});

        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone (model, desiredStorage){
        let smartphone = this.availableSmartphones.find((a)=>a.model === model);
        let index = this.availableSmartphones.findIndex((a)=>a.model === model);


        if(!smartphone){
            throw Error(`${model} was not found!`);
        }

        let currStorage = smartphone.storage;
        let currPrice = smartphone.price

        if(currStorage >= desiredStorage){
            currStorage = desiredStorage
        }else if(Math.abs(currStorage - desiredStorage) <= 128){
            currPrice -= (currPrice * 0.10);
        }else if(Math.abs(currStorage - desiredStorage) > 128){
            currPrice -= (currPrice * 0.20);
        }

        this.revenue += currPrice


        this.availableSmartphones.splice(index,1);
        this.soldSmartphones.push({model,storage:currStorage,price:currPrice});

        return  `${model} was sold for ${currPrice.toFixed(2)}$`
        
    }

    upgradePhones () {
        if(this.availableSmartphones.length === 0){
            throw Error("There are no available smartphones!")
        }

        let result = [];
        result.push('Upgraded Smartphones:');

        this.availableSmartphones = this.availableSmartphones.map((obj)=>obj.storage * 2);

        this.availableSmartphones.forEach((obj)=>{
            result.push(`${obj.model} / ${obj.storage} GB / ${obj.condition} condition / ${obj.price.toFixed(2)}$`);  
        })

        return result.join('\n');
    }


    salesJournal (criteria) {
        let result = [];
        let sorted;
        if(criteria === 'storage'){
            sorted = this.soldSmartphones.sort((a,b)=>b.storage - a.storage);
        }else if(criteria === 'model'){
            sorted = this.soldSmartphones.sort((a,b)=>a.model[0].localeCompare(b.model[0]));

        }else{
            throw Error('Invalid criteria!');
        }

        result.push(`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`);
        result.push(`${this.soldSmartphones.length} smartphones sold:`);

        sorted.forEach((obj)=>{
            result.push(`${obj.model} / ${obj.storage} GB / ${obj.price.toFixed(2)}$`);

        })
    }


}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));
