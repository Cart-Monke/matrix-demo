const root = document.querySelector(":root");

const shutoffWhite = document.getElementById("shutoff--white");

document.cookie = "fadein=true";

shutoffWhite.addEventListener("click", () => {
  root.style.setProperty("--opacity", 1);
  shutoffWhite.classList.add("shutoff--animate");
  shutoffWhite.addEventListener("animationend", () => {
    setTimeout(() => {
      window.location.replace("/index.html");
    }, 500);
  });
});
