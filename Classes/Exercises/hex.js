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
        number = parseInt(number,16);
        this.value += number;
        return new Hex(this.value);
     }
     minus(number) {
        number = parseInt(number,16);
        this.value -= number;
        return new Hex(this.value);
     }
     parse(string){
        return parseInt(string,16);
     }


}
