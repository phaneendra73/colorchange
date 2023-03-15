const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['AQUA', 'GRAY', 'RED', 'YELLOW', 'BLUE', "BROWN", "PURPLE", "ORANGE", "VIOLET"];

button.addEventListener('click', chgcol)

function chgcol() {
    colindex = parseInt(Math.floor(Math.random() * color.length));
    body.style.backgroundColor = color[colindex];
    console.log(colindex);
}
