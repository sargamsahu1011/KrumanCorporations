// script.js
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle menu
  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Auto-close menu on nav-link click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("active");
      }
    });
  });
});
