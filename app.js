const log = console.log;

const quadrant = document.querySelectorAll(".quadrant");
let playerChoice = document.querySelectorAll(".playerChoice");


const gameBoard = (() => {
    // CREATE PLAYERS AND CHOICES // 
    const playerFactory = (name, mark, turn) => {
        return { name, mark, turn };
    }
    let player1 = playerFactory('player1', undefined, false);
    let player2 = playerFactory('player2', undefined, false);

    let xMoves = [];
    let oMoves = [];
    let winner;


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




        // problem here is how to stop it from running after its been proven true. // 

        // let checker = function (arr, target) {
        //     target.forEach(function (combos) {
        //         if (combos.every(number => arr.includes(number))) {
        //             log(combos.every(number => arr.includes(number)));
        //             winner = mark;
        //         }
        //     })
        // 


        // let checker = function (arr, target) {
        //     for (let i = 0; i < target.length; i++) {
        //         target.every((number) => arr.includes(number))
        //     }
        // }

        let checker = function (arr, search) {
            arr.every(row => row.includes(search))
        }
        log(checker(winningCombos, xMoves));

        delcareWinner();
        // log(winner);
    }


    function delcareWinner() {
        if (winner != null) {
            return winner;

        }
        markingListener();
    }



    // MARKING THE GAMEBOARD //
    function placeMark() {
        let cellNumber = this.dataset.cellIndex;

        if (player1.turn == true && this.lastChild == null) {
            this.innerText = player1.mark;
            player1.turn = false;
            player2.turn = true;
            xMoves.push(this.cellNumber = Number(cellNumber));
            checkWinner("X");
        }
        else if (player2.turn == true && this.lastChild == null) {
            this.innerText = player2.mark;
            player2.turn = false;
            player1.turn = true;
            oMoves.push(this.cellNumber = Number(cellNumber));
            checkWinner("O");
        }
        buttonListener();
        // log("xMoves: ", xMoves);
        // log("oMoves: ", oMoves);
    }


    function markingListener() {
        if (winner == undefined) {
            quadrant.forEach(cell => {
                cell.addEventListener("click", placeMark)
            });
        }
        else if (winner != undefined) {
            quadrant.forEach(cell => {
                cell.removeEventListener("click", placeMark)
            });
        }
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
        if (player1.mark == undefined) {
            playerChoice.forEach(button => {
                button.addEventListener("click", assignPlayer);
            })
        }
        else if (player1.mark != undefined) {
            playerChoice.forEach(button => {
                button.removeEventListener("click", assignPlayer);
            })
        }

    };

    buttonListener();
    markingListener();





    return { player1, player2, xMoves, winner }
})();






// ======================= TEST GROUNDS ================== //




// let winningCombos = [
//     [0, 3, 6]
// ]


// let xMoves = [0, 2, 3, 6]


// let checkWinner = function (arr, search) {
//     arr.index
// }

// log(checkWinner(winningCombos, xMoves))
//========================================================//


// I kinda understand what you're getting at, would that mean using indexof might be a better approach? For example I guess I'm stumped on figuring out how to check if 
// `winningCombos = [0, 3, 6]` is present within something like `xMoves = [0, 2, 3, 6]`