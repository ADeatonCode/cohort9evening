// Exercises Level 1
// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animals {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
}
// Create a Dog and Cat child class from the Animal Class.


// Create a Dog class that extends the Animal class. The Dog class should have a bark method.
class Dog extends Animals {};
Dog.prototype.bark = function() {
    console.log(`${this.name} is barking!`);
}

// Create a Cat class that extends the Animal class. The Cat class should have a meow method.

class Cat extends Animals {};
Cat.prototype.meow = function() {
    console.log(`${this.name} is meowing!`);
}


// Exercises Level 2
// Override the method you create in Animal class

