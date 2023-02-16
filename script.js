

const container = document.querySelector(".container");
const row = [];
const col = [];

//nested for loop for creating grid of div boxes
for (let i = 0; i < 16; i++) {
    row[i] = document.createElement('div');
    row[i].classList.add('row');
    container.appendChild(row[i]);
    for (let j = 0; j < 16; j++) {
        col[j] = document.createElement('div');
        col[j].classList.add('box');
        row[i].appendChild(col[j]);
        
    }
}

//turn div boxes black on mouseover
const box = document.querySelectorAll(".box");
box.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
                item.style.cssText= "background-color:black;";
            });
})

//button click to set all boxes to white
const btn = document.querySelector("#reset");
btn.addEventListener('click', () => {
    box.forEach((item) => {
        item.style.cssText = "background-color:white;";
    })
})

const range = document.querySelector("#sizeSlider");
range.addEventListener('input', () => {
    range.innerHTML = range.value;
})
