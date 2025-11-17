window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  const backToTopButton = document.querySelector("#back-to-top");
  if (window.pageYOffset > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }

  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav ul li");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.querySelector("a").getAttribute("href").substring(1) === current) {
      li.classList.add("active");
    }
  });
});

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const backToTopButton = document.querySelector("#back-to-top");

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const darkModeCheckbox = document.querySelector("#dark-mode-checkbox");

darkModeCheckbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

const themeColorPicker = document.querySelector("#theme-color-picker");

themeColorPicker.addEventListener("input", (e) => {
  document.documentElement.style.setProperty("--primary-color", e.target.value);
});

const printButton = document.querySelector("#print-button");

printButton.addEventListener("click", () => {
  window.print();
});
