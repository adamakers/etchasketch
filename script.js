const applyChangesButton = document.querySelector('.apply-changes-btn');
const gridSlider = document.querySelector('#grid-size-input');

function getGridElements(gridSize) {
  let gridStr = '';
  
  //loop to get number of rows
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
  const tileContainer = document.querySelector('.tile-container');

  tileContainer.innerHTML = '';
  tileContainer.insertAdjacentHTML('afterbegin', gridStr);
}

//changes the values of the p when slider value changes
function sliderValueChange(e) {
  const gridOutput = document.querySelector('.grid-output');
  const gridSliderVal = gridSlider.value;

  gridOutput.textContent = `${gridSliderVal} X ${gridSliderVal}`;

}

function applyChangesButtonHandler(e) {
  const gridSliderVal = gridSlider.value;

  console.log(gridSliderVal);
  // drawGrids
}


gridSlider.addEventListener('input', sliderValueChange);
applyChangesButton.addEventListener('click', applyChangesButtonHandler);



