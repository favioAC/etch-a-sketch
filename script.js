

function createSquares(number) {
    for (let i = 0; i < (numberOfSquare**0.5); i++) {
        const row = document.createElement('div');
        row.classList.add('row', 'square');
        grid.appendChild(row);
        
        for (let j = 0; j< (numberOfSquare**0.5); j++) {
            const column = document.createElement('div');
            column.classList.add('column', 'square');
            row.appendChild(column);
        }
    }
}

function addListener () {
    btn.forEach(btn => btn.addEventListener('mousedown', mouseUp));
}

function mouseUp () {
    this.classList.add('btn-clicked');
    this.addEventListener('mouseup', (e) => this.classList.remove('btn-clicked'));
    this.addEventListener('mouseleave', (e) => this.classList.remove('btn-clicked'));
    colorPicker(this.id);
}

function colorPicker(pick) {
    color = pick === 'eraser' ? '#fff'
        : pick === 'black' ? '#000'
        : pick === 'blue' ? '#0000ff'
        : '#ff0000';
}

function addHover () {
    square.forEach(square => square.addEventListener('mouseenter', sketch));
}

function sketch (square) {
    this.style.backgroundColor = color;
}

function getPadSize () {
    
}

function resetPad () {
    square.forEach(square => square.style.backgroundColor = '#fff');
    color = '#fff';
}

let numberOfSquare = 2401;
let color = '';

const size = document.querySelector('.size-btn');
size.addEventListener('click', getPadSize)

const grid = document.querySelector('.grid');
const btn = Array.from(document.querySelectorAll('.color-btn'));

const reset = document.querySelector('.reset-btn');
reset.addEventListener('click', resetPad)

createSquares(numberOfSquare);

const square = Array.from(document.querySelectorAll('.column.square'));

addListener ();
addHover ();