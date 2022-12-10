let canvas = document.getElementById("matrix-canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let cw = canvas.offsetWidth;
let ch = canvas.offsetHeight;

let gridSize = cw / 60;

ctx.font = gridSize + "px courier";

let cols = cw / gridSize;

let chars = [];

ctx.fillStyle = "black";
ctx.fillRect(0, 0, cw, ch);

function randomInt(max) {
  return Math.floor(Math.random() * max + 0.5);
}

function spawnChar(col) {
  let newChar = {};
  newChar.x = randomInt(cols) * gridSize;
  newChar.y = 0;

  chars.push(newChar);
}

function render() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, cw, ch);

  chars.forEach((char, index) => {
    ctx.fillStyle = "rgba(0, 254, 0, 0.5)";
    ctx.fillText(String.fromCharCode(randomInt(128)), char.x, char.y);

    char.y += gridSize;

    if (char.y > ch) {
      chars.splice(index, index);
    }
  });
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  cw = canvas.offsetWidth;
  ch = canvas.offsetHeight;

  gridSize = cw / 60;

  cols = cw / gridSize;
  ctx.font = gridSize + "px courier";

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cw, ch);

  chars = [];
});

setInterval(spawnChar, 10);
setInterval(render, 50);
