const header = document.querySelector(".header");
const menu = document.querySelector("#menu");
const drawer = document.querySelector("#drawer");
const main = document.querySelector("main");

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 150) {
    header.classList.add("bg-header");
  } else {
    header.classList.remove("bg-header");
  }
});

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

main.addEventListener("click", function () {
  drawer.classList.remove("open");
});
