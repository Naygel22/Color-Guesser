const boxesFirstRow = document.querySelector('.boxesFirstRow');
const boxesSecondRow = document.querySelector('.boxesSecondRow');
const newColorsButton = document.querySelector('.newColorsButton');
const boxes = document.querySelectorAll('.box');
const colorName = document.querySelector('.colorName');




for(let i = 0; i < 3; i++){
  createSquare(boxesFirstRow);
  createSquare(boxesSecondRow);
}

newColorsButton.addEventListener('click', () => {
 const currentBoxes = document.querySelectorAll('.box')
  currentBoxes.forEach(box =>{
    box.style.backgroundColor = generateRandomColor();
  })
  const randomIndex = Math.floor(Math.random() * currentBoxes.length);
  const selectedBox = currentBoxes[randomIndex];
  
  colorName.textContent = selectedBox.style.backgroundColor;

  currentBoxes.forEach(box => {
    box.addEventListener('click', () => {
        if (colorName.textContent === box.style.backgroundColor) {
             return alert('Dobrze!');
        }
    });
});
  
});

function createSquare (row) {
  const box = document.createElement('div');
  box.className = 'box';
  row.appendChild(box);
  box.style.backgroundColor = generateRandomColor();

  return box;
}

  






function generateRandomColor(){
  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal; 
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16).toUpperCase().padStart(6, 0);
  randomColor = '#' + randomNumber;
    
  return randomColor;
}