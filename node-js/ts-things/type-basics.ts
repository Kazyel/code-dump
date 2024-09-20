/*
    Type Basics

    Types are a way to define the structure and behavior of values in your code. They allow you to specify what kind of data a variable can hold, and what operations can be performed on that data.
*/

// Simple Types
const whatever: any = "Hello?";
const nameString: string = "Kazyel";
const ageNumber: number = 30;
const isPoggers: boolean = true;

// Creating Types
type ObjectType = {
    name: string;
    age: number;
    isPoggers: boolean;
};

// Array Types
const objectArray: ObjectType[] = [
    { name: "Kazyel", age: 30, isPoggers: true },
    { name: "John", age: 25, isPoggers: false },
];

// Parameterized Types and Return Types
const createObject = (
    name: string,
    age: number,
    isPoggers: boolean
): ObjectType => {
    return { name, age, isPoggers };
};

const returnedObject = createObject("Kazyel", 30, true);
