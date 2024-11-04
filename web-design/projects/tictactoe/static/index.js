import { Board } from "./board.js";

const app = document.getElementById("app");

function createSquare() {
    const square = document.createElement("div");
    square.className = "square";
    app.appendChild(square)
    return square
}

function createMarker() {
    const marker = document.createElement("p");
    marker.className = "marker";
    return marker
}

function makeMove(board, cell, square, player) {
    if (player === "X" && square.firstChild === null) {
        const x = createMarker()
        x.textContent = "X"
        square.appendChild(x)
    } else if (player === "O" && square.firstChild === null) {
        const circle = createMarker()
        circle.textContent = "O"
        square.appendChild(circle)
    }

    board.makeMove(cell, player)
}

function resetBoard(board) {
    const squares = document.querySelectorAll(".square")

    for (const square of squares) {
        square.innerHTML = ""
        square.classList.remove("clicked")
    }

    return board.reset()
}

function startGame() {
    const board = new Board()
    let currentPlayer = "X"

    for (const cell in board.cells) {
        const square = createSquare()

        square.addEventListener("click", (e) => {
            if (currentPlayer === "X" && !square.classList.contains("clicked")) {
                makeMove(board, cell, square, currentPlayer)
                square.classList.add("clicked")
                currentPlayer = "O"

            } else if (currentPlayer === "O" && !square.classList.contains("clicked")) {
                makeMove(board, cell, square, currentPlayer)
                square.classList.add("clicked")
                currentPlayer = "X"
            }

            if (board.checkWinner()) {
                window.alert("We have a winner!")

                setTimeout(() => {
                    return resetBoard(board)
                }, 500)
            }

            if (board.isFull() && board.checkWinner() === null) {
                window.alert("This is a draw!")

                setTimeout(() => {
                    return resetBoard(board)
                }, 500)
            }
        })
    }
}

window.addEventListener("DOMContentLoaded", (e) => {
    startGame()
})