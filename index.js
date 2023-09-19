const GRID_HEIGHT = 16
const GRID_WIDTH = 16

// Create the grid area
const contentDiv = document.querySelector('#etch-area');

for (let i = 0; i < GRID_WIDTH ; i++ ) {
    let rowDiv = document.createElement('div');
    rowDiv.id = `etchRow${i}`
    rowDiv.classList.add(`etchRow`)
    contentDiv.appendChild(rowDiv)

    for(let j = 0; j < GRID_WIDTH; j ++) {
        let iDiv = document.createElement('div');
        iDiv.id = 'block';
        iDiv.setAttribute(`id`,`block${i}-${j}`);
        iDiv.classList.add(`block`);
        iDiv.classList.add(`debug-border`);
        rowDiv.appendChild(iDiv);
        iDiv.addEventListener("click", e => (e.target.classList.add(`fill`)));
    }
}

// Create the clear screen effect for etch 
let etchClearButton = document.querySelector(`#etch-clear`);
etchClearButton.addEventListener("click", clearScreen);

function clearScreen (e) {
    const filledItem = document.querySelectorAll(`.fill`);
    filledItem.forEach(e => e.classList.remove("fill"));
}

// this section track the state of the mouse button, used for hover effect
let isMouseButtonDown = false;
window.addEventListener( "mousedown", event => isMouseButtonDown = true);
window.addEventListener( "mouseup", event =>  isMouseButtonDown = false);