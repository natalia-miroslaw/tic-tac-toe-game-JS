const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const cellElements = document.querySelectorAll('[data-cell]');
let circleTurn;

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  //Check for win
  //check for draw
  //switch turns
  swapTurns();
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

cellElements.forEach(cell => {cell.addEventListener('click', handleClick, {once: true})});
