/*
    Type Queries

    Type queries allow you to check if a value is of a specific type or not. This can be useful when you want to perform different actions based on the type of a value.
*/

type Person = {
    name: string;
    age: number;
};
type Isabelle = Person & { isBeautiful: boolean };

// keyof<T> returns the keys of a type T
type IsabelleKeys = keyof Isabelle;

let isabelle: Isabelle = { name: "Isabelle", age: 25, isBeautiful: true };

// typeof T returns the type of a value
type Jpedrin = typeof isabelle;
