class Hex {
    constructor(value){
        this.value = value;
    }

    valueOf(){
        return this.value;
    }

    toString() {
        let hexValue = this.value.toString(16);
        return '0x' + hexValue.toUpperCase();
    }

     plus(number) {
        if(typeof(number) === 'number'){
            return new Hex(this.value + number)
        }else {
            return new Hex (this.value + number.value);
        }
     }
     minus(number) {
        if(typeof(number) === 'number'){
            return new Hex(this.value - number)
        }else {
            return new Hex (this.value  - number.value);
        }
     }
     parse(string){
        return parseInt(string,16);
     }


}
