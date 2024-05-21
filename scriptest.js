const container = document.querySelector(".container")
const GRID_DEFAULT = 16
const slider = document.querySelector("#slider")
const slider_dimension = document.querySelector('#slider-dimension') //text dibawah slider
const grid = document.querySelectorAll(".grid")

let createGrid = (num)=>{
    const container = document.querySelector(".container")
    const gridSize = num**2
    
    for(let i=0; i<gridSize; i++){
        const grid_item = document.createElement('div');
        grid_item.className = 'grid'
        grid_item.style.flexBasis = `calc(100%/${num})`;
        container.appendChild(grid_item)
    }
}

let dimensionChange = () =>{
    slider_dimension.innerText = `${slider.value} x ${slider.value}`
    container.innerHTML = ''
    createGrid(slider.value)
    console.log("Slider change")
    gridManipulation();
}

let gridManipulation =()=>{
    let isMouseDown = false
    let activeGrid = null
    grid.forEach((grid)=>{
        grid.addEventListener('mousedown', (event)=>{
            isMouseDown = true
            activeGrid = event.target
            activeGrid.classList.add('active')
        })
        grid.addEventListener('mousemove', ()=>{
            if(isMouseDown){
                activeGrid.classList.add('active')
            }
        })
        grid.addEventListener('mouseup', ()=>{
            // activeGrid.classList.add('active')
            isMouseDown = false
        })
    })
}

document.addEventListener('DOMContentLoaded', ()=>{
    createGrid(GRID_DEFAULT)
    slider_dimension.innerText = `${slider.value} x ${slider.value}`
    slider.addEventListener('change', dimensionChange)
    gridManipulation();
    
})
// document.addEventListener('DOMContentLoaded', ()=>{
//     createGrid(GRID_DEFAULT)
//     slider_dimension.innerText = `${slider.value} x ${slider.value}`
//     slider.addEventListener('change', ()=>{
//         slider_dimension.innerText = `${slider.value} x ${slider.value}`
//         container.innerHTML = ''
//         createGrid(slider.value)
//         console.log("Slider change")
//     })
    
//     const grid = document.querySelectorAll(".grid")
//     grid.forEach((grid) => {
//         grid.addEventListener("mousedown", ()=>{
//             grid.style.backgroundColor = 'black';
//         });
//         grid.addEventListener("mouseup", ()=>{
//             grid.style.backgroundColor = 'bisque'; // Reset background color to bisque
//         });
//         grid.addEventListener("mousemove", ()=>{
//             grid.style.backgroundColor = 'black';
//         });
//     });
// })




// slider.addEventListener('change', ()=>{
//     slider_dimension.innerText = `${slider.value} x ${slider.value}`
//     container.innerHTML = ''
//     createGrid(slider.value)
//     console.log("Slider change")
// })

// grid.forEach((grid) => {
//     grid.addEventListener("mousedown", ()=>{
//                 grid.style.backgroundColor = 'black';
//     });
//     grid.addEventListener("mouseup", ()=>{
//             grid.style.backgroundColor = 'bisque'; // Reset background color to bisque
//     });
//     grid.addEventListener("mousemove", ()=>{
//         grid.style.backgroundColor = 'black';
//     });
// });


