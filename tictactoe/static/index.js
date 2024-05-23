import { Board } from "./board.js";

const app = document.getElementById("app");

const createSquare = () => {
    const square = document.createElement("div");
    square.className = "square";
    app.appendChild(square)
    return square
}

const createMarker = () => {
    const marker = document.createElement("p");
    marker.className = "marker";
    return marker
}

const resetBoard = (board) => {
    const squares = document.querySelectorAll(".square")

    squares.forEach(square => {
        square.innerHTML = ""
        square.classList.remove("clicked")
    })

    return console.log(board.reset())
}

const makeMove = (board, cell, square, player) => {
    if (player === "X" && square.firstChild === null) {
        const x = createMarker()
        x.textContent = "X"
        square.appendChild(x)
        board.makeMove(cell, player)

    } else if (player === "O" && square.firstChild === null) {
        const circle = createMarker()
        circle.textContent = "O"
        square.appendChild(circle)
        board.makeMove(cell, player)
    }

}

const startGame = () => {
    const board = new Board()
    let player = "X"

    for (const cell in board.cells) {
        const square = createSquare()

        square.addEventListener("click", (e) => {
            if (player === "X" && !square.classList.contains("clicked")) {
                makeMove(board, cell, square, player)
                square.classList.add("clicked")
                player = "O"
            } else if (player === "O" && !square.classList.contains("clicked")) {
                makeMove(board, cell, square, player)
                square.classList.add("clicked")
                player = "X"
            }

            if (board.checkWinner()) {
                setTimeout(() => {
                    window.alert("We have a winner!")
                }, 500)

                setTimeout(() => {
                    return resetBoard(board)
                }, 500)
            }

            if (board.isFull() && board.checkWinner() === null) {
                setTimeout(() => {
                    window.alert("This is a draw!")
                }, 500)

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