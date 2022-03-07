const log = console.log;
const quadrant = document.querySelectorAll(".quadrant");
let playerChoice = document.querySelectorAll(".playerChoice");



const gameBoard = (() => {

    const playerMark = () => {
        return "this"
    }

    playerChoice.forEach(button => {
        button.addEventListener("click", playerMark);
    });

    const playerFactory = (name, mark, turn) => {
        return { name, mark, turn };
    }

    const player1 = playerFactory('player1', 'X', true);
    const player2 = playerFactory('player2', 'O', false);




    return { playerMark }
})();









// quadrant.forEach(selection => {
//     selection.addEventListener("click",);
// });



