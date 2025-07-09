// grid setup: loop which creates number of squares set by user, default 16 
function createGrid() {
    let numSquares = 16 ** 2; // add user input latter
    for (let index = 0; index < numSquares; index++) {
        let newSquare = document.createElement('div');
        newSquare.setAttribute('class', 'box');
        container.appendChild(newSquare);
    }
} 

let container = document.querySelector('#container');
createGrid();
