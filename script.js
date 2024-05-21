const container = document.querySelector(".container");
const GRID_DEFAULT = 16;
const slider = document.querySelector("#slider");
const slider_dimension = document.querySelector('#slider-dimension');
let grid = []; // Updated this line to be an empty array to store grid elements.

let createGrid = (num) => {
    const gridSize = num ** 2;

    for (let i = 0; i < gridSize; i++) {
        const grid_item = document.createElement('div');
        grid_item.className = 'grid';
        grid_item.style.flexBasis = `calc(100% / ${num})`;
        container.appendChild(grid_item);
        grid.push(grid_item); // Push the created grid item into the grid array.
    }
}

let dimensionChange = () => {
    slider_dimension.innerText = `${slider.value} x ${slider.value}`;
    container.innerHTML = '';
    createGrid(slider.value);
    console.log("Slider change");
    gridManipulation();
}

let gridManipulation = () => {
    let isMouseDown = false;
    let activeGrid = null;

    grid.forEach((gridItem) => {
        gridItem.addEventListener('mousedown', (event) => {
            isMouseDown = true;
            activeGrid = event.target;
            activeGrid.classList.add('active');
        });

        gridItem.addEventListener('mousemove', (event) => {
            if (isMouseDown) {
                event.target.classList.add('active');
            }
        });

        gridItem.addEventListener('mouseup', () => {
            isMouseDown = false;
        });

    });
};

document.addEventListener('DOMContentLoaded', () => {
    createGrid(GRID_DEFAULT);
    slider_dimension.innerText = `${slider.value} x ${slider.value}`;
    slider.addEventListener('change', dimensionChange);
    gridManipulation();
});
