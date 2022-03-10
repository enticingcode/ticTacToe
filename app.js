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




    // DISPLAYING PLAYER MARKS // 
    function displayChoice() {
        document.querySelector("#choiceDisplay").innerText = `Player 1: ${player1.mark} || Player 2: ${player2.mark}`;
    }


    // GAME LOGIC HERE // 
    function gameBoardLogic() {

    }


    // MARKING THE GAMEBOARD //
    function placeMark() {
        if (player1.turn == true && this.lastChild == null) {
            this.innerText = player1.mark;
            player1.turn = false;
            player2.turn = true;
        }
        else if (player2.turn == true && this.lastChild == null) {
            this.innerText = player2.mark;
            player2.turn = false;
            player1.turn = true;
        }

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

    playerChoice.forEach(button => {
        button.addEventListener("click", assignPlayer);
    });


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

    return { player1, player2, winningCombos }
})();





// let winningCombos = [
//     //ROWS//
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     //COLUMNS//
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     //DIAGONALS//
//     [0, 4, 8],
//     [6, 4, 2]
// ]

// log(winningCombos);







// quadrant.forEach(selection => {
//     selection.addEventListener("click",);
// });



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