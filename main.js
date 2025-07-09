// grid setup: loop which creates number of squares set by user, default 16 
function createGrid(userInput) {
    let gridSize = userInput ** 2;
    let boxSize = (960 / userInput);
    for (let index = 0; index < gridSize; index++) {
        let newSquare = document.createElement('div');
        newSquare.setAttribute('class', 'box');
        container.appendChild(newSquare);
        newSquare.style.width = `${boxSize}px`;
        newSquare.style.height = `${boxSize}px`;
    }
} 

let container = document.querySelector('#container');
let userInput = 16 // attch to button 

createGrid(userInput);
