class WineSelection{
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle (wineName, wineType, price){
        if(typeof(wineName) !== 'string'){
            throw Error('wineName should be string!')
        }

        if(typeof(wineType) !== 'string'){
            throw Error('wineType should be string!')
        }

        
        if(typeof(price) !== 'number'){
            throw Error('wineType should be number!')
        }

        if(this.wines.length === this.space){
            throw Error("Not enough space in the cellar.");
        }

        this.wines.push({wineName,wineType,price,paid:false});

        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle( wineName, price ) {
        if(typeof(wineName) !== 'string'){
            throw Error('wineName should be string!')
        }

        
        if(typeof(price) !== 'number'){
            throw Error('wineType should be number!')
        }

        let wine = this.wines.find((a)=>a.wineName === wineName);

        if(!wine){
            throw Error(`${wineName} is not in the cellar.`);
        }

        if(wine.paid){
            throw Error(`${wineName} has already been paid.`)
        }


        wine.paid = true;
        this.bill += wine.price;

        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        let wine = this.wines.find((a)=>a.wineName === wineName);

        if(!wine){
            throw Error("The wine, you're looking for, is not found.");
        }

        if(!wine.paid){
            throw Error(`${wineName} need to be paid before open the bottle.`);
        }

        let indx = this.wines.indexOf(wine);
        this.wines.splice(indx,1);

        return `You drank a bottle of ${wineName}.`
    }

    cellarRevision(wineType){

        let result = [];    

        if(wineType){
            let filtered = this.wines.filter((a)=>a.wineType === wineType);

            if(filtered.length === 0){
                throw Error(`There is no ${wineType} in the cellar.`);
            }

            filtered.forEach((item)=>{
                result.push(`${item.wineName} > ${item.wineType} - ${item.paid ? 'Has Paid':'Not Paid'}.`);
            })
            
        }else{
            result.push(`You have space for ${this.space - this.wines.length} bottles more.`)
            result.push(`You paid ${this.bill}$ for the wine.`);
            this.wines.sort((a,b)=>a.wineName[0].localeCompare(b.wineName[0])).forEach((item)=>{
                result.push(`${item.wineName} > ${item.wineType} - ${item.paid ? 'Has Paid':'Not Paid'}.`);
            })
        }

        return result.join('\n');

    }
}


const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());




