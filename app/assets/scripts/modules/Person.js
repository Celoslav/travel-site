class Person {
    constructor(name, favColor){
        this.name = name;
        this.favoriteColor = favColor;
    }
    
    greet() {
        console.log("Hi there, my name is " + this.name + " and favorite color is " + this.favoriteColor + ",");
    }
}

export default Person;