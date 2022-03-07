const log = console.log;

const quadrant = document.querySelectorAll(".quadrant");
let playerChoice = document.querySelectorAll(".playerChoice");


const gameBoard = (() => {

    const playerFactory = (name, mark, turn) => {
        return { name, mark, turn };
    }

    let player1 = playerFactory('player1', undefined, true);
    let player2 = playerFactory('player2', undefined, false);




    // MARKING THE GAMEBOARD //
    function placeMark() {
        if (player1.mark == "X" && this.lastChild == null) {
            let newX = document.createElement("img");
            newX.setAttribute("src", "/icons/x.svg")
            this.appendChild(newX);
        }
    }

    quadrant.forEach(cell => {
        cell.addEventListener("click", placeMark)
    });


    // PLAYER SELECTION //
    const assignPlayer = function () {
        player1.mark = this.value;
        if (player1.mark == "X") {
            player2.mark = "O"
        }
        else player2.mark = "X"
        log(gameBoard);
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