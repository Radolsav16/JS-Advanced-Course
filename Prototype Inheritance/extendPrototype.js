class Person{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
}



function extendPrototype(extendedClass){
    extendedClass.prototype.species = 'Human';
    extendedClass.prototype.toSpeciesString = function(){
        return `I am a ${this.species.toString()}`;
    }
 
    console.log(extendedClass.prototype.toSpeciesString());
    
}
extendPrototype(Person);

