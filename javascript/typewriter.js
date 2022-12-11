let header = document.getElementById("matrix__header");
let subheader = document.getElementById("matrix__subheader");

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
  typewriterEffect(header, "CYBERSECURITY", 100);
}, 500);

setTimeout(() => {
  typewriterEffect(subheader, "CLICK ANYWHERE TO ENTER", 75);
}, 2500);
