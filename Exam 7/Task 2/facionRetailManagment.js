class FashionRetailInventory{
    constructor(storehouse,location){
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct (productName, size, quantity, price){
        if(typeof(productName) !== 'string'){
            throw Error('Product name should be string!')
        }

        if(typeof(size) !== 'string'){
            throw Error('Product size should be string!')
        }

        if(typeof(quantity) !== 'number'){
            throw Error('Product quantity should be number!')
        }

        if(typeof(price) !== 'number'){
            throw Error('Product price should be number!')
        }

        let product = this.productStock.find((a)=>a.name === productName && a.size === size);

        if(product){
            product.quantity += quantity;

            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        }else{
            this.productStock.push({name:productName, size, quantity, price});

            return `The product ${productName}, size ${size} was successfully added to the inventory`
        }


    }

    sendProduct (productName, size) {
        if(typeof(productName) !== 'string'){
            throw Error('Product name should be string!')
        }

        if(typeof(size) !== 'string'){
            throw Error('Product size should be string!')
        }
        
        let product = this.productStock.find((a)=>a.name === productName && a.size === size);

        if(!product){
            throw Error(`The product ${productName}, size ${size} is not in the inventory`)
        }else{
            let index = this.productStock.indexOf(product);
            this.productStock.splice(index,1);

            return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        }
    }

    findProductsBySize(size){
        if(typeof(size) !== 'string'){
            throw Error('Product size should be string!')
        }

        let result = [];

        let filtered = this.productStock.filter((a)=>a.size === size);

        if(filtered.length === 0){
            return `There are no products available in that size`
        }

        filtered.forEach((obj)=>{
            result.push(`${obj.name}-${obj.quantity} pieces`);
        })

        return result.join(', ');
    }

    listProducts (){
        if(this.productStock.length === 0){
            return `${this.storehouse} storehouse is empty`;
        }

        let result = [];

        result.push(`${this.storehouse} storehouse in ${this.location} available products:`);

        this.productStock
            .sort((a,b)=>a.name.localeCompare(b.name))
            .forEach(({name,size,quantity,price})=>{
                result.push(`${name}/Size:${size}/Quantity:${quantity}/Price:${price}$`);
        })

        return result.join('\n');
    }
}


const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());