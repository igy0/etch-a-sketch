const container = document.querySelector(".container");
const row = [];
const col = [];
for (let i = 0; i < 16; i++) {
    row[i] = document.createElement('div');
    row[i].classList.add('row');
    container.appendChild(row[i]);
    for (let j = 0; j < 16; j++) {
        col[i] = document.createElement('div');
        row[i].appendChild(col[i]);
    }
}

