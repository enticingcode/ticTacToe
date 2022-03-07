const log = console.log;

log("Hello World");



const quadrant = document.querySelectorAll(".quadrant");




function addPlayerChoice() {

}




quadrant.forEach(selection => {
    selection.addEventListener("click", addPlayerChoice);
});


// const gameboard (() => {

// })();


// const Player = (name, level) => {
//     let health = level * 2;
//     const getLevel = () => level;
//     const getName = () => name;
//     const die = () => {
//         // uh oh
//         console.log('fuckbro');
//     };
//     const damage = x => {
//         health -= x;
//         if (health <= 0) {
//             die();
//         }
//     };
//     const attack = enemy => {
//         if (level < enemy.getLevel()) {
//             damage(1);
//             console.log(`${enemy.getName()} has damaged ${name}`);
//         }
//         if (level >= enemy.getLevel()) {
//             enemy.damage(1);
//             console.log(`${name} has damaged ${enemy.getName()}`);
//         }
//     };
//     return { attack, damage, getLevel, getName, health };
// };

// const jimmie = Player('jim', 10);
// const badGuy = Player('jeff', 5);
// jimmie.attack(badGuy);


const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`);
    return { sayName };
}

const Nerd = (name) => {
    // simply create a person and pull out the sayName function with destructuring assignment syntax!
    const { sayName } = Person(name);
    const { supbro } = Person(name);

    const doSomethingNerdy = () => console.log('nerd stuff');
    return { sayName, doSomethingNerdy, supbro };
}

const jeff = Nerd('jeff');

jeff.sayName(); //my name is jeff
jeff.doSomethingNerdy(); // nerd stuff


const marvin = Person("Marvin");

marvin.sayName();
marvin.doSomethingNerdy();