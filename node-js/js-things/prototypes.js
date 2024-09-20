/*
    Prototypes

    In JavaScript, objects can inherit properties and methods from other objects. This is known as inheritance. The prototype property of an object specifies the object from which it inherits properties and methods.

    The prototype property is a special property of an object that is used to link to the object from which it inherits properties and methods. It is not a property of the object itself, but rather a property of the constructor function that created the object.
*/

const createPersonPrototype = (name, age) => {
    const personMethods = {
        sayHello() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        },
        getName() {
            console.log(this.name);
        },
        getAge() {
            console.log(this.age)
        },
    }
    const personPrototype = Object.create(personMethods);

    personPrototype.name = name;
    personPrototype.age = age;

    return personPrototype;
};

const personPrototype = createPersonPrototype("John", 30);

personPrototype.getName();
personPrototype.sayHello();
personPrototype.getAge();


/*
    Inheritance

    In JavaScript, objects can inherit properties and methods from other objects. This is known as inheritance. The prototype property of an object specifies the object from which it inherits properties and methods.

    The prototype property is a special property of an object that is used to link to the object from which it inherits properties and methods. It is not a property of the object itself, but rather a property of the constructor function that created the object.
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

function Employee(name, age, salary) {
    Person.call(this, name, age);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

const employee = new Employee("John", 30, 5000);
employee.sayHello();

