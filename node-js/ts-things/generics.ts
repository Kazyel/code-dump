/* 
    Generics

    Generics allow you to define a type that can be used with any type. This can be useful when you want to create a reusable type that can be used with different types.
*/

// Generic type parameter
type Generic<T> = {
    value: T;
};

// Generic function
function genericFunction<T>(value: T): Generic<T> {
    return { value };
}

const generic = genericFunction<number>(10);
const generic2 = genericFunction<string>("Hello");

console.log(generic.value); // 10
console.log(generic2.value); // "Hello"

// Example of using a generic type
interface PhoneInfo {
    customerId: number;
    phoneNumber: string;
    areaCode: string;
}

interface Dict<T> {
    [key: number]: T;
}

function listToDict<T>(list: T[], idGen: (arg: T) => number): Dict<T> {
    const dict: Dict<T> = {};

    for (const phoneInfo of list) {
        const dictKey = idGen(phoneInfo);
        dict[dictKey] = phoneInfo;
    }

    return dict;
}

const phoneList: PhoneInfo[] = [
    { customerId: 1, phoneNumber: "123-456-7890", areaCode: "123" },
    { customerId: 2, phoneNumber: "987-654-3210", areaCode: "987" },
];

const result = listToDict<PhoneInfo>(
    phoneList,
    (phoneInfo) => phoneInfo.customerId
);
