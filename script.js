const container = document.querySelector(".container");
const btn = document.querySelector("#reset");
const range = document.querySelector("#sizeSlider");
const label = document.querySelector("#rangeValue");


const row = [];
const col = [];



//nested for loop for creating grid of div boxes
//need to make into a function that is called so after range is changed
//need to reset etch everytime updated
function createEtch(size = 16) {
    for (let i = 0; i < size; i++) {
        row[i] = document.createElement('div');
        row[i].classList.add('row');
        container.appendChild(row[i]);
        for (let j = 0; j < size; j++) {
            col[j] = document.createElement('div');
            col[j].classList.add('box');
            row[i].appendChild(col[j]);
            
        }
    }
}


const box = document.querySelectorAll(".box");
//turn div boxes black on mouseover
box.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
                item.style.cssText= "background-color:black;";
            });
})

//button click to set all boxes to white
btn.addEventListener('click', () => {
    box.forEach((item) => {
        item.style.cssText = "background-color:white;";
    })
})


range.addEventListener('input', () => {
    label.innerHTML = range.value + " x " + range.value;
})
