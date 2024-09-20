/**
 * Observer
 * 
 * Observer is a design pattern that allows a subject to notify its observers 
 * without making any assumptions about who is observing it and what state it is in.
 * 
 * In JavaScript, the observer pattern is implemented using the Observer class.
 * 
 * The Observer class has two methods: addObserver and removeObserver. 
 * The addObserver method adds an observer to the list of observers, 
 * and the removeObserver method removes an observer from the list of observers.
 * 
 * The subject class has a method called notifyObservers, which notifies all the observers 
 * by calling their update method.
 */

let observers = [];

const observer = {
    add(observer) {
        observers.push(observer);
    },

    remove(observer) {
        observers = observers.filter((o) => o !== observer);
    },

    notify(data) {
        observers.forEach((observer) => observer(data));
    },
};

const notifyGameOver = (data) => {
    if (data === undefined) return null;

    if (data.state === "Game Over") {
        return console.log(`\nGame Over!`);
    }
};

const notifyGameWon = (data) => {
    if (data === undefined) return null;

    if (data.state !== "Game Over") {
        console.log("Game started.");
    }

    if (data.state === "Game Won") {
        setTimeout(
            () => console.log(`\nCongratulations! ${data.winner} wins!`),
            1000
        );
    }
};

const notifySpectator = (data) => {
    if (data === undefined) return null;

    if (data.state !== "Game Over") {
        console.log("[Spectating] Game started.");
    }

    if (data.state === "Game Won") {
        setTimeout(
            () => console.log(`[Spectating] Congratulations! ${data.winner} wins!`),
            1000
        );
    }

    if (data.state === "Game Over") {
        return console.log(`[Spectating] Game Over!`);
    }
};

observer.add(notifyGameOver);
observer.add(notifyGameWon);
observer.add(notifySpectator);

// observer.notify()
observer.notify({ state: "Game Won", winner: "Player 2" });
setTimeout(() => observer.notify({ state: "Game Over" }), 2000);
