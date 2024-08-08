function addBtnEvent () {
    colorBtn.forEach(btn => btn.addEventListener('mousedown', colorPicker));
    resetBtn.addEventListener('mousedown', resetPad);
    sizeBtn.addEventListener('mousedown', changePadSize);
}

function createGrid (squarePerSide) {
    if (!userSizeSelection) {
        squarePerSide = size;
        for (let i = 0; i < squarePerSide; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            for (let j = 0; j < squarePerSide; j++) {
                const square = document.createElement('div');
                square.classList.add('square');
                row.appendChild(square);
            }
            grid.appendChild(row);
        }
    } else {
        squarePerSide = userSizeSelection;
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
        for (let i = 0; i < squarePerSide; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            for (let j = 0; j < squarePerSide; j++) {
                const square = document.createElement('div');
                square.classList.add('square');
                row.appendChild(square);
            }
            grid.appendChild(row);
        }
        squares = Array.from(document.querySelectorAll('.square'));
    }
    
}

function changePadSize () {
    this.classList.add('btn-clicked');
    this.addEventListener('mouseup', (e) => this.classList.remove('btn-clicked'));
    this.addEventListener('mouseleave', (e) => this.classList.remove('btn-clicked'));
    
    userSizeSelection = Number(prompt('Enter the number of squares per side for the new grid:'));
    createGrid(userSizeSelection);
    addHover ();
}

function colorPicker () {
    this.classList.add('btn-clicked');
    this.addEventListener('mouseup', (e) => this.classList.remove('btn-clicked'));
    this.addEventListener('mouseleave', (e) => this.classList.remove('btn-clicked'));

    color = this.id === 'black' ? '#000'
        : this.id === 'blue' ? '#0000ff'
        : this.id === 'red' ? '#ff0000'
        : '#fff';
    //console.log(color);
}

function addHover () {
    squares.forEach(square => square.addEventListener('mouseenter', (e) => {
        square.style.backgroundColor = color;
        // console.log('hover is working');
    }));
    
}

function resetPad () {
    // console.log('Reset working');
    this.classList.add('btn-clicked');
    this.addEventListener('mouseup', (e) => this.classList.remove('btn-clicked'));
    this.addEventListener('mouseleave', (e) => this.classList.remove('btn-clicked'));
    
    squares.forEach(square => square.style.backgroundColor = '#fff');
    color = '#fff';

    userSizeSelection = size;
    createGrid (userSizeSelection);
    addHover ();
}



const etch = document.querySelector('etch');
const grid = document.querySelector('.grid');
const sizeBtn = document.querySelector('.size-btn');
const colorBtn = Array.from(document.querySelectorAll('.color-btn'));
const resetBtn = document.querySelector('.reset-btn');

let size = 50;
let userSizeSelection = 0;
let color = '';

createGrid (size);

let squares = Array.from(document.querySelectorAll('.square'));

addBtnEvent ();
addHover ();