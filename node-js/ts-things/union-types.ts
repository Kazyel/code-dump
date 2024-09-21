/*
    Union Types

    Union types allow you to define a type that can be one of multiple types. This can be useful when you want to represent a value that can be one of several different types, such as a number or a boolean.
*/

type Even = 0 | 2 | 4;
type Odds = 1 | 3 | 5;
type Decimals = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type DecimalsButEvenOrOdds = Exclude<Decimals, Odds | Even>;

let numberOrBool: number | boolean;
numberOrBool = 10;
numberOrBool = true;
// numberOrBool = "Hello"; -> TypeError

let evens: Even = 2;
let odds: Odds = 3;
let evensOrOdds: Odds | Even = 1;
let decimals: Decimals = 5;
let decimalsMinusEvenOrOdds: DecimalsButEvenOrOdds = 6;

/* 
    Union Type Control Flow

    You can use union types to control the flow of your code. For example, you can use a union type to check if a value is one of several different types, and then take different actions based on the type of the value.
*/

type MessageObject = {
    name: string;
    message: string;
    year: number;
};

type Message = {
    messageObject: MessageObject | Error;
};

const returnMessage = (message: Message): MessageObject | Error => {
    if (message.messageObject instanceof Error) {
        return message.messageObject;
    }
    return message.messageObject;
};

const newMessage = returnMessage({
    messageObject: { name: "Kazyel", message: "Hello!", year: 2022 },
});

const newMessage2 = returnMessage({
    messageObject: new Error("Something went wrong"),
});

/*
    Discriminated Unions

    Discriminated unions are a type of union type that allow you to define a type that can be one of multiple types, but each type has a different value. This can be useful when you want to represent a value that can be one of several different types, but each type has a different value.
*/

type SuccessMessage = {
    status: "success";
    message: string;
};

type ErrorMessage = {
    status: "error";
    message: Error;
};

type MessageDiscriminated = SuccessMessage | ErrorMessage;

const returnDiscriminatedMessage = (message: MessageDiscriminated): string => {
    if (message.status === "success") {
        return message.message;
    }

    return message.message.message;
};
