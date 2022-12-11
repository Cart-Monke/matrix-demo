const fadeLayer = document.getElementById("index__fade-layer");

console.log(document.cookie);

if (document.cookie === "fadein=true") {
  fadeLayer.classList.add("fade--animation");
  fadeLayer.addEventListener("animationend", () => {
    fadeLayer.classList.add("fade--hide");
  });
  document.cookie = "fadein=false";
} else {
  fadeLayer.classList.add("fade--hide");
}
