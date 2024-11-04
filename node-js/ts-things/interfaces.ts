/* 
  Interfaces

  Interfaces are a way to define a contract for a type. They specify the properties and methods that a type must have, but they don't provide any implementation details. This can be useful when you want to define a contract for a type, but you don't want to implement the contract right away.
*/

interface SpecialDateInterface {
    isSpecial: boolean;
    getDescription: () => string;
}

let specialDate2: SpecialDateInterface = Object.assign(new Date(), {
    isSpecial: true,
    getDescription: () => "It's a special date!",
});

/*
  Interface Inheritance

  Interface inheritance allows you to create a new interface that inherits from an existing interface. This can be useful when you want to create a new interface that has the same properties as an existing interface, but with additional properties or methods.
*/

interface GameInterface {
    name: string;
    playGame: () => this;
    exitGame: () => void;
}

interface ChessInterface extends GameInterface {
    rules: string;
    numberOfPieces: number;
}

class Chess implements ChessInterface {
    constructor(
        public name: string,
        public rules: string,
        public numberOfPieces: number = 6
    ) {
        this.name = name;
        this.rules = rules;
        this.numberOfPieces = numberOfPieces;
    }

    playGame() {
        console.log(`Playing ${this.name}`);
        return this;
    }

    exitGame() {
        console.log(`Exiting ${this.name}`);
    }

    getNumberOfPieces() {
        console.log(this.numberOfPieces);
        return this;
    }
}

const chessBoard = new Chess("Chess", "The rules of chess");
chessBoard.playGame().getNumberOfPieces().exitGame();
