class Stringer {
  innerString;
  innerLength;
  constructor(innerString, innerLength) {
    this.innerLength = Number(innerLength);
    this.innerString = innerString;
  }

  increase(length) {
    this.innerLength += length;
  }

  decrease(length) {
    if (this.innerLength - length < 0) {
      this.innerLength = 0;
      throw Error("You try below 0");
    }

    this.innerLength -= length;
  }

  toString() {
    if (this.innerString.length > this.innerLength) {
        let trimVal = this.innerString.length - this.innerLength;
        let newStr = this.innerString.slice(trimVal);
        return newStr;
    } else if (this.innerLength === 0) {
      this.innerString = "...";
      return this.innerString;
    }else{
        return this.innerString;
    }
  }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

// test.decrease(5);
// console.log(test.toString()); // ...

// test.increase(4); 
// console.log(test.toString()); // Tet