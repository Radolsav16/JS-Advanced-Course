class OnlineShop{
    constructor(warehouseSpace){
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired){
        if(typeof(product) !== 'string'){
            throw Error('Product should be string');
        }

        if(typeof(quantity) !== 'number'){
            throw Error('Quantity should be number');
        }

        if(typeof(spaceRequired) !== 'number'){
            throw Error('SpaceRequired should be number');
        }

        if(this.warehouseSpace < spaceRequired){
            throw Error("Not enough space in the warehouse.");
        }

        this.products.push({product,quantity});
        this.warehouseSpace -= spaceRequired;

       return  `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity){
        if(typeof(minimalQuantity) !== 'number'){
            throw Error('minimalQuantity should be number');
        } 
        
        let specialProduct = this.products.find((a)=>a.product === product);

        if(!specialProduct){
            throw Error(`There is no ${product} in the warehouse.`)
        }

        if(minimalQuantity <= 0){
            throw Error('The quantity cannot be zero or negative.')
        }

        if(minimalQuantity <= specialProduct.quantity){
            return `You have enough from product ${product}.`
        }

        let difference = minimalQuantity - specialProduct.quantity;

        specialProduct.quantity = minimalQuantity;

        return `You added ${difference} more from the ${product} products.`;



    }

    sellProduct(product) {
        let specialProduct = this.products.find((a)=>a.product === product);

        if(!specialProduct){
            throw Error(`There is no ${product} in the warehouse.`);

        }

        specialProduct.quantity--;

        this.sales.push({product,quantity:1});

        return `The ${product} has been successfully sold.`


    }

    revision(){
        if(this.sales.length === 0){
            throw Error('There are no sales today!');
        }

        let result = [];

        result.push(`You sold ${this.sales.length} products today!`);

        result.push("Products in the warehouse:");

        this.products.forEach((product)=>{
            result.push(`${product.product}-${product.quantity} more left`);
        })

        return result.join('\n');
    }


}


const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());
 
