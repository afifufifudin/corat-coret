const container = document.querySelector(".container")
const GRID_DEFAULT = 16
const slider = document.querySelector("#grid-value")
const slider_value = document.querySelector('.slider-value')
const slider_dimension = document.querySelector('#slider-dimension')

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

document.addEventListener('DOMContentLoaded', ()=>{
    createGrid(GRID_DEFAULT)
    slider_dimension.innerText = `${slider.value} x ${slider.value}`
})

slider.addEventListener('change', ()=>{
    slider_dimension.innerText = `${slider.value} x ${slider.value}`
    container.innerHTML = ''
    createGrid(slider.value)
})

