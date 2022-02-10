const gridSlider = document.querySelector('#grid-size-input');
const tileContainer = document.querySelector('.tile-container');
const applyChangesButton = document.querySelector('.apply-changes-btn');
const resetButton = document.querySelector('.reset-btn');

// creates string of gridElemnts to be added to grid container
function getGridElements(gridSize) {
  let gridStr = '';

  for (let row = 0; row < gridSize; row++) {
    let boxStr = '';
    
    gridStr += `<div class="grid-row">`;

    for (let box = 0; box < gridSize; box++) {
      boxStr += `<div class="grid-box"></div>`;
    }

    gridStr += `${boxStr}</div>`
  }

  return gridStr;
}


function drawGrids(gridStr) {
  tileContainer.innerHTML = '';
  tileContainer.insertAdjacentHTML('afterbegin', gridStr);
}

//changes the values of the p when slider value changes
function sliderValueChange(e) {
  const gridOutput = document.querySelector('.grid-output');
  const gridSliderVal = gridSlider.value;

  gridOutput.textContent = `${gridSliderVal} X ${gridSliderVal}`;

}

//hoveroverhandler
function hoverOverBoxHandler(e) {
  const target = e.target
  if ( !target.classList.contains('grid-box') ) return;
  
  target.classList.add('hovered');
}

function applyChangesButtonHandler(e) {
  const gridSliderVal = gridSlider.value;

  const gridStr = getGridElements(gridSliderVal);
  drawGrids(gridStr);
}

// resets the drawn tiles
function resetButtonHandler() {
  const allBoxDivs = document.querySelectorAll('.grid-box');

  allBoxDivs.forEach( boxDiv => boxDiv.classList.remove('hovered'));
}




gridSlider.addEventListener('input', sliderValueChange);
applyChangesButton.addEventListener('click', applyChangesButtonHandler);
tileContainer.addEventListener('mouseover', hoverOverBoxHandler);
resetButton.addEventListener('click', resetButtonHandler);


// load grid on page loading
window.onload = function() {
  const gridStr = getGridElements(gridSlider.value);
  drawGrids(gridStr);
}



