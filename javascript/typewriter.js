let header = document.getElementById("matrix__header");
let subheader = document.getElementById("matrix__subheader");

let headerText = header.innerHTML;
let subheaderText = subheader.innerHTML;

header.innerHTML = "";
subheader.innerHTML = "";

function typewriterEffect(tag, input, delay) {
  let letters = input.split("");

  letters.forEach((letter, index) => {
    setTimeout(() => {
      tag.innerHTML += letter;
    }, index * delay);
  });
}

setTimeout(() => {
  typewriterEffect(header, headerText, 100);
}, 500);

setTimeout(() => {
  typewriterEffect(subheader, subheaderText, 75);
}, 2500);
