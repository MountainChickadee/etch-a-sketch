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
        newSquare.addEventListener('mouseenter', () => newSquare.style.backgroundColor = "rgb("+Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+")");
        }
}

function resetGrid() {
    let userInput = prompt("Enter new canvas size: ");
    while (userInput > 100) {
       userInput = prompt("Enter new canvas size: "); 
    } 
    container.innerHTML = '';
    createGrid(userInput);

}

let container = document.querySelector('#container');
let resetButton = document.querySelector('button');
let defaultSize = 16 // attch to button 

createGrid(defaultSize);
resetButton.addEventListener('click', resetGrid);

