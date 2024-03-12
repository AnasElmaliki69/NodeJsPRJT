class person {
    constructor(city, age) {
        this.city = city;
        this.age = age;
    }
    makeSound() {
        console.log(`${this.city} has ${this.age}`);
    }
}


const anas = new person('el jadida', '21');

anas.makeSound()