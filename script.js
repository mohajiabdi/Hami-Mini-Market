// to top
const toTop = document.getElementById("toTop");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const themeToggle = document.getElementById("themeToggle");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTop.classList.add("show");
  } else {
    toTop.classList.remove("show");
  }
});

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
});
