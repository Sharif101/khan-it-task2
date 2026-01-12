// script.js

// Mobile menu toggle
const menuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  // Toggle icon between menu (☰) and X
  if (mobileMenu.classList.contains("hidden")) {
    menuIcon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
  } else {
    menuIcon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
  }
});
