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
makeGrid();

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

// Hover to colors
function toBlack (event) {
    event.target.style.backgroundColor = `black`;
}

function toRandom (event) {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let a = 1;
    event.target.style.backgroundColor = `rgba(${r},${g},${b},${a})`
}



// Extra functionalities //

// Randomize DOM button and variables
let randomStatus = false;
let randomButton = document.querySelector('.randomButton');
randomButton.addEventListener("click", () => {
    if (!randomStatus) {
        randomColors();
        randomStatus = true;
    }
    else {
        randomColorsRemove();
        randomStatus = false;
    }
});

// Randomize Colors
function randomColors () {
    let gridItems = document.querySelectorAll('.grid-item');
    for (item of gridItems) {
        item.addEventListener("mouseover", toRandom);
    }
}

function randomColorsRemove () {
    let gridItems = document.querySelectorAll('.grid-item');
    for (item of gridItems) {
        item.removeEventListener("mouseover", toRandom);
    }
}