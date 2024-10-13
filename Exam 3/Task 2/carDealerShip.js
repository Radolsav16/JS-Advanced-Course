class ShadyCarDealership {
    constructor(dealerName){
        this.dealerName = dealerName;
        this.availableCars = [];
        this.soldCars = [];
        this.revenue = 0;
    }

    addCar (model, year, mileage, price) {
        if(model === '' || year < 1950 || mileage < 0 || price < 0){
            throw Error('Invalid car!');
        }

        this.availableCars.push({model,year,mileage,price});

        return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`;
    }

    sellCar (model, desiredYear){
        let car = this.availableCars.find((a)=>a.model === model);

        if(!car){
            return `${model} was not found!`;
        }

        const year = car.year;
        let price = car.price;
        const mileage = car.mileage;
        
        let difrence = desiredYear - year;

        if(difrence < 0){
            difrence = 0;
        }else if(difrence <= 5){
            price -= price * 0.10;
        }else{
            price  -=  price * 0.20;
        }

        let index = this.availableCars.findIndex((a)=>a.model === model);
        this.availableCars.splice(index,1);
        this.soldCars.push({model,year,mileage,price});
       
        this.revenue += price;

        return `${model} (${year}) was sold for ${price.toFixed(2)}$`;



    }
    prepareCarForSale (model){
        let car = this.availableCars.find((a)=>a.model === model);
        if(!car){
            return `${model} was not found for preparation!`
        }
        let year = car.year;
        let mileage = car.mileage;
        let price = car.price;

        mileage -= mileage * 0.50;
        price += price * 0.30;

        let index = this.availableCars.findIndex((a)=>a.model === model);
        this.availableCars.splice(index,1);
        const updatedCar = {model,year,mileage,price};
        this.availableCars.splice(index,0,updatedCar);

        return `${model} (${year}) is prepared for sale with ${mileage} km. - ${price.toFixed(2)}$`;
    }

    salesJournal (criteria){

        
        let sorted;
        const result = [];

        if(criteria === 'year'){
            sorted = this.soldCars.sort((a,b)=>b.year - a.year);

        }else if(criteria === 'model'){
            sorted = this.soldCars.sort((a,b)=>a.model.localeCompare(b.model));
        }else{
            throw Error('Invalid criteria!');
        }

        result.push(`${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$`);
        result.push(`${this.soldCars.length} cars sold:`);
       
        sorted.forEach(({model,year,mileage,price})=>{
            result.push(`${model} (${year}) / ${mileage} km. / ${price.toFixed(2)}$ `);
        })
        
        return result.join('\n');
        
    }
}

const dealership = new ShadyCarDealership('Shady Motors');
console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
console.log(dealership.addCar('Toyota Yaris', 2015, 80000, 18000));
console.log(dealership.prepareCarForSale('Honda CR-V'));
console.log(dealership.prepareCarForSale('VW Golf'));
console.log(dealership.prepareCarForSale('BMW X3'));
console.log(dealership.prepareCarForSale('Toyota Yaris'));
console.log(dealership.sellCar('Honda CR-V',2010));
console.log(dealership.sellCar('VW Golf',2011));
console.log(dealership.sellCar('BMW X3',2005));
console.log(dealership.sellCar('Toyota Yaris',2015));
console.log(dealership.salesJournal(''))




