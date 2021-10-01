const hamburger = document.querySelector(".mMenu");
const navLinks = document.querySelector(".navList");
const links = document.querySelectorAll(".navList li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
