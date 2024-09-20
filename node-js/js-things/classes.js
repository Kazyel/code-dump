/*
    Classes

    Classes are a fundamental part of object-oriented programming in JavaScript. They allow you to define blueprints for creating objects, which can then be instantiated (created) as actual objects.
*/

class Game {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    play() {
        console.log(`${this.name} was released in ${this.year}`);
    }
}

// Function to create instances of Game class (Factory Pattern)
const createGame = (name, year) => {
    return new Game(name, year);
};

// New instance of Game class
const game = createGame("Super Mario Bros.", 1985);
game.play(); // Super Mario Bros. was released in 1985