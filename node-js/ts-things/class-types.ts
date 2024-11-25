/*
    Class Types

    Class types allow you to define a type that can be an instance of a class. This can be useful when you want to represent a value that can be an instance of a class, such as a person or a car.
*/

class Car {
    // readonly keyword is used to declare a property as read-only
    readonly #serialNumber: number = Car.serializeNumber();

    // static keyword is used to declare a property as static
    static #serializedNumber: number = 100;
    static serializeNumber(): number {
        return this.#serializedNumber++;
    }

    constructor(
        // automatically assigns the value of the property to the parameter
        public make: string,
        public model: string,
        public year: number
    ) {}

    getSerialNumber(): number {
        return this.#serialNumber;
    }
}

class Truck extends Car {
    constructor(
        public make: string,
        public model: string,
        public year: number
    ) {
        super(make, model, year);
    }

    // override keyword is used to override a method in a child class
    override getSerialNumber(): number {
        return 1;
    }
}

const car = new Car("Toyota", "Camry", 2022);
const car2 = new Car("Honda", "Civic", 2021);

console.log(car.getSerialNumber()); // 100
console.log(car2.getSerialNumber()); // 101
