const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu1");
hamburger.addEventListener("click", function () {
  menu.classList.toggle("active");
});
window.addEventListener("resize", function () {
  if (window.innerWidth > 782) {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  }
});

// splide

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",

    perPage: 3,

    perMove: 1,

    gap: "1rem",

    autoplay: true,

    pauseOnHover: false,

    breakpoints: {
      1024: {
        perPage: 1,
      },
    },
  }).mount();
});

// hamburger

