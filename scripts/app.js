const openBar = document.querySelector(".open");
const closeBar = document.querySelector(".side-bar__close");
const sideBar = document.querySelector(".side-bar");
openBar.addEventListener("click", (event) => {
  sideBar.classList.remove("closed");
  sideBar.classList.add("opened");
});

closeBar.addEventListener("click", (event) => {
  sideBar.classList.remove("opened");
  sideBar.classList.add("closed");
});

const slides = document.querySelectorAll(".fade-slider__item");
let index = 0;
const visible = "fade-slider__item--visible";
setInterval(() => {
  slides[index].classList.remove(visible);
  index++;
  if (index === slides.length - 1) {
    index = 0;
  }
  slides[index].classList.add(visible);
}, 2500);
