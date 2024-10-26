
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".navbar-burger");
  const menu = document.querySelector("#navbarMenu");
  const navbar = document.querySelector(".navbar");

  burger.addEventListener("click", () => {
    menu.classList.toggle("is-active");
    burger.classList.toggle("is-active");
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Inicializa o Swiper
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});