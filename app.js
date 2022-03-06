const log = console.log;

log("Hello World");



const quadrant = document.querySelectorAll(".quadrant");




function addPlayerChoice() {
    log();
}


quadrant.forEach(selection => {
    selection.addEventListener("click", addPlayerChoice);
});