let gridLength = 16;

const gridInput = document.querySelector("#grid-size");
gridInput.addEventListener("input", (event) => {
    console.log(event.target.value);
    contentDiv.replaceChildren();
    generateGrid(event.target.value)
});

// Create the grid area
const contentDiv = document.querySelector('#etch-area');

function generateGrid (gridLength)
{
    for (let i = 0; i < gridLength ; i++ ) {
        let rowDiv = document.createElement('div');
        rowDiv.id = `etchRow${i}`
        rowDiv.classList.add(`etchRow`)
        contentDiv.appendChild(rowDiv)

        for(let j = 0; j < gridLength; j ++) {
            let iDiv = document.createElement('div');
            iDiv.id = 'block';
            iDiv.setAttribute(`id`,`block${i}-${j}`);
            iDiv.classList.add(`block`);
            iDiv.classList.add(`debug-border`);
            rowDiv.appendChild(iDiv);
            // add event for filling when mouse click and drag
            iDiv.addEventListener("mousedown", e => {
                // prevent user from grabbing element
                e.preventDefault();
                e.target.classList.add(`fill`)
            });
            iDiv.addEventListener("mouseenter", e => {
                if (isMouseButtonDown) {
                    e.target.classList.add(`fill`);
                }
            });
        }
    }
}
generateGrid(gridLength);

// Create the clear screen effect for etch 
let etchClearButton = document.querySelector(`#etch-clear`);
etchClearButton.addEventListener("click", clearScreen);

function clearScreen (e) {
    const filledItem = document.querySelectorAll(`.fill`);
    filledItem.forEach(e => e.classList.remove("fill"));
}

// this section track the state of the mouse button, used for hover effect
let isMouseButtonDown = false;
window.addEventListener( "mousedown", event => {
    // Prevent mouse from grabbing 
    // event.preventDefault();
    isMouseButtonDown = true;
});
window.addEventListener( "mouseup", event =>  isMouseButtonDown = false);