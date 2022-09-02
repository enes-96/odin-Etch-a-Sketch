"use strict";
//ich könnte so machen, wenn movein oder mousein ich weiss nocht nicht style background black
const container = document.querySelector(".container");
const rangeValue = document.querySelector(".grid-size");
const gridSize = document.querySelector("h2");
rangeValue.onchange = (e) => {
  clearGrid();
  gridGenerator(e.target.value);
};

//create standart grid
function gridGenerator(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  //create childs
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("child");
    container.appendChild(gridElement);
    //eventlistener on every child
    gridElement.addEventListener("mouseover", () => {
      gridElement.style.backgroundColor = "red";
    });
  }
  updateGridSize(size);
}

function clearGrid() {
  container.innerHTML = "";
}

function updateGridSize(size) {
  gridSize.innerHTML = `${size} x ${size}`;
}

gridGenerator(16);