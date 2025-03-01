const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger-menu");

console.log(hamburger);
console.log(hamburgerMenu);

hamburgerMenu.addEventListener("click", function () {
  hamburger.classList.toggle("active");
});

window.addEventListener("click", function (e) {
  if (e.target !== hamburger && e.target !== hamburgerMenu) {
    hamburger.classList.remove("active");
  }
});
