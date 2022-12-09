let canvas = document.getElementById("matrix-canvas")
let ctx = canvas.getContext("2d");

let cw = canvas.offsetWidth;
let ch = canvas.offsetHeight;

let gridSize = 20;

ctx.font = gridSize + 'px serif';

let cols = cw / gridSize;
let rows = ch / gridSize;

let chars = [];

ctx.fillStyle = "black";
ctx.fillRect(0, 0, cw, ch);

function randomInt(max) {
    return Math.floor((Math.random() * max) + 0.5)
}

function spawnChar(col) {
    let newChar = {};
    newChar.x = randomInt(cols) * gridSize;
    newChar.y = 0;
    newChar.char = randomInt(1)

    chars.push(newChar);
}

function render() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, cw, ch)

    chars.forEach((char, index) => {
        ctx.fillStyle = "rgba(0, 254, 0, 1)";
        ctx.fillText(String.fromCharCode(randomInt(128)), char.x, char.y);

        char.y += gridSize;

        if (char.y > ch) {
            chars.splice(index, index);
        }
    })
}

setInterval(spawnChar, 10);
setInterval(render, 50)

