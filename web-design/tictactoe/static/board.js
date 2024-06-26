export class Board {
    constructor() {
        this.cells = Array(9).fill(null);
    }

    makeMove(i, player) {
        if (this.cells[i] === null) {
            this.cells[i] = player;
            return true;
        }
        return false;
    }

    checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;

            if (this.cells[a] && this.cells[a] === this.cells[b] && this.cells[a] === this.cells[c]) {
                return this.cells[a];
            }
        }

        return null;
    }

    isFull() {
        return this.cells.every(cell => cell !== null);
    }

    reset() {
        this.cells = Array(9).fill(null);
        return "Board has been reset!"
    }
}