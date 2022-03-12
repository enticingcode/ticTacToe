const log = console.log;

const quadrant = document.querySelectorAll(".quadrant");
let playerChoice = document.querySelectorAll(".playerChoice");
const reset = document.querySelector("#resetbtn");



// GAMEBOARD APPEARANCE //
const appearance = (() => {

    const startBtn = document.querySelector("#startBtn");
    const header = document.querySelector("#header");
    const gameContainer = document.querySelector("#gameContainer");


    function startGame() {
        log(startBtn);
        startBtn.addEventListener("click", designStart);
    }
    function startDelete() {
        startBtn.style.display = "none";
    }

    function displayGrid() {
        gameContainer.classList.add("displayContainer");

        playerChoice.forEach((button) => {
            button.classList.add("displayButtons")

        })
    }

    function designStart() {
        header.classList.add("transitionStart");
        startBtn.classList.add("deleteStart");
        startBtn.addEventListener('transitionend', startDelete);
        header.addEventListener('transitionend', displayGrid);
    };

    startGame();

})();


// GAME LOGIC //
const gameBoard = (() => {
    // CREATE PLAYERS AND CHOICES // 
    const playerFactory = (name, mark, turn) => {
        return { name, mark, turn };
    }
    let player1 = playerFactory('player1', null, false);
    let player2 = playerFactory('player2', null, false);

    let xMoves = [];
    let oMoves = [];
    let winner = null;


    // DISPLAYING PLAYER MARKS // 
    function displayChoice() {
        document.querySelector("#choiceDisplay").innerText = `Player 1: ${player1.mark} || Player 2: ${player2.mark}`;
    }


    // CHECK WINNER // 
    function checkWinner(mark) {
        let winningCombos = [
            //ROWS//
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            //COLUMNS//
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            //DIAGONALS//
            [0, 4, 8],
            [6, 4, 2]
        ]


        let checker = (combos, arr) => {
            // loops through winning combos arrays //
            for (let i = 0; i < combos.length; i++) {
                if (combos[i].every(e => arr.includes(e))) {
                    return gameBoard.winner = mark;
                }
            }
        }

        checker(winningCombos, xMoves);
        checker(winningCombos, oMoves);
        delcareWinner(gameBoard.winner);
    }


    function delcareWinner(winner) {
        if (winner != null) {
            quadrant.forEach(cell => {
                cell.removeEventListener("click", placeMark)
            });
            return alert(`Congrats, ${winner} wins`);

        }
    }



    // MARKING THE GAMEBOARD //
    function placeMark() {
        let cellNumber = this.dataset.cellIndex;
        if (player1.turn == true && this.lastChild == null) {
            this.innerText = player1.mark;
            player1.turn = false;
            player2.turn = true;
            xMoves.push(cellNumber = Number(cellNumber));
            checkWinner(player1.mark);
        }
        else if (player2.turn == true && this.lastChild == null) {
            this.innerText = player2.mark;
            player2.turn = false;
            player1.turn = true;
            oMoves.push(cellNumber = Number(cellNumber));
            checkWinner(player2.mark);
        }
        buttonListener();
    }


    function markingListener(winner) {
        if (winner == null) {
            quadrant.forEach(cell => {
                cell.addEventListener("click", placeMark)
            });
        }
        // else if (winner != null) {
        //     // quadrant.forEach(cell => {
        //     //     cell.removeEventListener("click", placeMark)
        //     // });
        // }
    }

    // PLAYER SELECTION //
    const assignPlayer = function () {
        player1.mark = this.value;
        player1.turn = true;
        if (player1.mark == "X") {
            player2.mark = "O"
        }
        else player2.mark = "X"
        log(gameBoard);
        displayChoice();

    }

    let buttonListener = () => {
        if (player1.mark == null) {
            playerChoice.forEach(button => {
                button.addEventListener("click", assignPlayer);
            })
        }
        else if (player1.mark != null) {
            playerChoice.forEach(button => {
                button.removeEventListener("click", assignPlayer);
            })
        }

    };


    let resetGame = function () {
        quadrant.forEach(cell => {
            log(cell.innerText = "");
        });
        xMoves = [];
        oMoves = [];
        document.querySelector("#choiceDisplay").innerText = ``;
        player1.mark = null;
        player2.mark = null;
        buttonListener();
        markingListener();
        gameBoard.winner = null;
        log('hi');
    }


    reset.addEventListener("click", resetGame);
    buttonListener();
    markingListener();




    return { winner }
    // return { player1, player2, xMoves, winner }
})();






// ======================= TEST GROUNDS ================== //

// let sayHello = function (name) {
//     let text = "Hello, " + name;
//     return function () {
//         console.log(text);
//     }
// }




// let winningCombos = [
//     //ROWS//
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [6, 4, 2]
// ]

// let xMoves = [0, 1, 3]
// let winner;


// // PROTECT THIS CODE WITH YOUR LIFE AND MEMORIZE IT FOOL //

// let checker = (combos, arr) => {
//     // loops through winning combos arrays //
//     for (let i = 0; i < combos.length; i++) {
//         if (combos[i].every(e => arr.includes(e))) {
//             return "winner";
//         }
//         else return false;
//     }
// }

// log(checker(winningCombos, xMoves))



// let testArray = [3, 2, 17]

// log(xMoves.includes(3));
// log(xMoves.some(e => testArray.includes(3)))

// let checker = function (arr, search) {
//     arr.some(function (row) {
//         row.includes(search)
//     });
// }

// log(winningCombos)
// log(xMoves)
//========================================================//


