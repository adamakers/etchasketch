const applyChangesButton = document.querySelector('.apply-changes-btn');

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

function applyChangesButtonHandler() {
  // get value from grid slider
  const gridSlider = document.querySelector('#grid-size-input');

  const gridSliderVal = gridSlider.value;

  console.log(gridSliderVal);
  // drawGrids
}



