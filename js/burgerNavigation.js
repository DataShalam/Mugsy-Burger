const burgerIcon = document.querySelector(".header--burger--menu");
const mobileHeader = document.querySelector(".header--bottom__mobile");

burgerIcon.addEventListener("click", function (e) {
  mobileHeader.classList.toggle("header--bottom__mobile__active");
});
