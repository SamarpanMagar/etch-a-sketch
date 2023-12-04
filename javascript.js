// DOM selector and queries
let gridContainer = document.querySelector('.grid-container');

let makeGridButton = document.querySelector('.makeGridButton');
makeGridButton.addEventListener("click", () => {
    getSize();
    clearGrid();
    makeGrid();
});

// Initialize variables
let rows = 16;
let columns = 16;
let getSizeStatus = true;

// Get Size (rows and columns)
function getSize () {
    rows = +prompt('Rows: ', 16);
    columns = +prompt('Columns: ', 16)
    if (isNaN(rows) || isNaN(columns)) {
        getSizeStatus = false;
    }
}

// Make grid
function makeGrid () {
    if (getSizeStatus == false) {
        alert('ERROS , values are NAN');
        return;
    }

    for (let i = 0; i < (rows); i++) {
        // Create grid row and Append 
        let gridrow = document.createElement('div');
        gridContainer.appendChild(gridrow);

        // Add grid row class list
        gridrow.classList.add('grid-row');

        for (let j = 0; j < columns; j++) {
        // Create grid coumn and Append 
        let gridItem = document.createElement('div');
        gridrow.appendChild(gridItem);

        // Add Class List
        gridItem.classList.add('grid-item');

        // Event listeners
        gridItem.addEventListener("mouseover", toBlack);
        }
    }
}

// Clear Grid 
function clearGrid () {
    gridContainer.innerHTML = ``;
}

function toBlack (event) {
    event.target.style.backgroundColor = `black`;
}

function toWhite (event) {
    event.target.style.backgroundColor = ``;
}