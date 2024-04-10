let menuBtn = document.querySelector("#menu-btn"),
  navbar = document.querySelector("header .navbar");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
