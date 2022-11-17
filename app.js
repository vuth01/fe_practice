var openMobileMenu = document.querySelector(".mobile-menu-btn");
var mobileMenu = document.querySelector(".mobile-menu-container");

openMobileMenu.addEventListener("click", function (e) {
  e.stopPropagation();
  mobileMenu.classList.add("show-mobile-menu");
});

mobileMenu.addEventListener("click", function (e) {
  e.stopPropagation();
  var target = e.target;
  if (target.matches(".close-menu-btn") || target.matches("a")) {
    mobileMenu.classList.remove("show-mobile-menu");
  }
});

document.addEventListener("click", function (e) {
  mobileMenu.classList.remove("show-mobile-menu");
});
