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


    // DISPLAYING PLAYER MARKS // 
    function displayChoice() {
        document.querySelector("#choiceDisplay").innerText = `Player 1: ${player1.mark} || Player 2: ${player2.mark}`;
    }


    // CHECK WINNER // 
    function checkWinner() {
        let winner;
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

        // EXAMPLES OF MOVES TO CHECK // 
        // xMoves:  
        // Array(4) [ 0, 4, 6, 3 ]

        // oMoves:  
        // Array(3) [ 2, 8, 1 ]

        // LOOPS THROUGH ALL NUMBERS IN ARRAY OF WINNERS //
        // winningCombos.forEach(e => e.forEach(num => log(num)));


        let checker = function (arr, target) {
            for (let i = 0; i < target.length; i++) {
                if (target[i].every(e => arr.includes(e)) == true) {
                    return winner
                }
            }
        }

        checker(xMoves, winningCombos);
        checker(oMoves, winningCombos);

    }


    // MARKING THE GAMEBOARD //
    function placeMark() {
        let cellNumber = this.dataset.cellIndex;
        // log(cellNumber)
        if (player1.turn == true && this.lastChild == null) {
            this.innerText = player1.mark;
            player1.turn = false;
            player2.turn = true;
            xMoves.push(this.cellNumber = Number(cellNumber));
        }
        else if (player2.turn == true && this.lastChild == null) {
            this.innerText = player2.mark;
            player2.turn = false;
            player1.turn = true;
            oMoves.push(this.cellNumber = Number(cellNumber));
        }
        buttonListener();
        checkWinner();
        log("xMoves: ", xMoves);
        log("oMoves: ", oMoves);
    }


    quadrant.forEach(cell => {
        cell.addEventListener("click", placeMark)
    });


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






    return { player1, player2, xMoves }
})();






// ======================= TEST GROUNDS ================== //

// function EmployeeDetails() {
//     var name = "Mayank";
//     var age = 30;
//     var designation = "Developer";
//     var salary = 10000;

//     var calculateBonus = function (amount) {
//         return salary = salary + amount;
//     }

//     return {
//         name: name,
//         age: age,
//         designation: designation,
//         calculateBonus: calculateBonus,
//         salary
//     }
// }

// var newEmployee = EmployeeDetails()

// var userName = newEmployee.calculateBonus(1000);

//========================================================//