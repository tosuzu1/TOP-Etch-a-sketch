const GRID_HEIGHT = 16
const GRID_WIDTH = 16


const contentDiv = document.querySelector('#etch-area');
// contentDiv.appendChild(iDiv);

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