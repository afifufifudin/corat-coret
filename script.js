const container = document.querySelector(".container")
const GRID_DEFAULT = 16

let createGrid = (num)=>{
    const container = document.querySelector(".container")
    const gridSize = num**2

    for(let i=0; i<gridSize; i++){
        const grid_item = document.createElement('div');
        grid_item.className = 'grid'
        grid_item.style.flexBasis = `calc(100%/${num})`;
        // grid_item.textContent = i
        container.appendChild(grid_item)
    }
}


createGrid(GRID_DEFAULT)