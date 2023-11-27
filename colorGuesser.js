const boxesFirstRow = document.querySelector('.boxesFirstRow');
const boxesSecondRow = document.querySelector('.boxesSecondRow');
const newColorsButton = document.querySelector('.newColorsButton');
const colorName = document.querySelector('.colorName');

let gameBoxes = [];
startGame();

function startGame() {
    createBoxes();
    setNamefromColor();
    clickToBox();
}

function resetGame() {
    gameBoxes.forEach(box => {
        box.style.backgroundColor = generateRandomColor();
    });
    setNamefromColor();
}

function createBoxes() {
    gameBoxes = [];
    for(let i = 0; i < 3; i++){
        gameBoxes.push(createSquare(boxesFirstRow));
        gameBoxes.push(createSquare(boxesSecondRow));
    }
}

newColorsButton.addEventListener('click', resetGame);

function clickToBox() {
    gameBoxes.forEach(box => {
        box.addEventListener('click', () => {
            if (colorName.textContent === box.style.backgroundColor) {
                resetGame();
            }
        });
    });
}

function setNamefromColor() {
    const randomIndex = Math.floor(Math.random() * gameBoxes.length);
    const selectedBox = gameBoxes[randomIndex];
    colorName.textContent = selectedBox.style.backgroundColor;
}

function createSquare(row) {
    const box = document.createElement('div');
    box.className = 'box';
    row.appendChild(box);
    box.style.backgroundColor = generateRandomColor();
    return box;
}

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.floor(Math.random() * maxVal);
    let randomColor = '#' + randomNumber.toString(16).toUpperCase().padStart(6, '0');
    return randomColor;
}
