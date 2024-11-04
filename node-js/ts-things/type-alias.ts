/* 
    Type Inheritance
    
    Type inheritance allows you to create a new type that inherits from an existing type. This can be useful when you want to create a new type that has the same properties as an existing type, but with additional properties or methods.
*/

type SpecialDate = Date & { isSpecial: boolean; getDescription: () => string };

let specialDate: SpecialDate = Object.assign(new Date(), {
    isSpecial: true,
    getDescription: () => "It's a special date!",
});

/*
  Type Indexing

  Type indexing allows you to access properties and methods of a type using a string. This can be useful when you want to access properties and methods of a type dynamically.
*/

type GameStore = {
    name: string;
    games: {
        name: string;
        rating: number;
    }[];
    users: {
        name: string;
        rating: number;
    }[];
};

const personGames: GameStore["games"] = [
    {
        name: "Chess",
        rating: 100,
    },
    {
        name: "Checkers",
        rating: 80,
    },
];

let personProperties: GameStore["users" | "games"];
