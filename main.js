const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn ? menuBtn.querySelector("i") : null;
const nav = document.querySelector("nav");

// =========================
// MENU MOBILE
// =========================
if (menuBtn && navLinks && menuBtnIcon) {
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });

  document.addEventListener("click", (e) => {
    const isClickInsideNav = navLinks.contains(e.target);
    const isClickOnMenuBtn = menuBtn.contains(e.target);

    if (!isClickInsideNav && !isClickOnMenuBtn && navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    }
  });
}

// =========================
// EFEITO NO MENU AO ROLAR
// =========================
if (nav) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
}

// =========================
// SLIDER DE BACKGROUND AUTOMÁTICO 🔥
// =========================
const imagens = [
  "assets/ti-1.jpg",
  "assets/ti-2.jpg",
  "assets/ti-3.jpg"
];

let index = 0;

function trocarBackground() {
  document.body.style.backgroundImage = `url('${imagens[index]}')`;
  index = (index + 1) % imagens.length;
}

// inicia imediatamente
trocarBackground();

// troca a cada 3 segundos
setInterval(trocarBackground, 3000);

// =========================
// SCROLL REVEAL
// =========================
if (typeof ScrollReveal !== "undefined") {
  const scrollRevealOption = {
    distance: "30px",
    origin: "bottom",
    duration: 800,
    reset: false,
  };

  ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".header__content .section__subheader", {
    ...scrollRevealOption,
    delay: 150,
  });

  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 250,
  });

  ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 350,
  });

  ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 450,
  });

  ScrollReveal().reveal(".service__card", {
    ...scrollRevealOption,
    interval: 150,
  });

  ScrollReveal().reveal(".destination__card", {
    ...scrollRevealOption,
    interval: 150,
  });

  ScrollReveal().reveal(".trip__image img", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".trip__content .section__subheader", {
    ...scrollRevealOption,
    delay: 150,
  });

  ScrollReveal().reveal(".trip__content .section__header", {
    ...scrollRevealOption,
    delay: 250,
  });

  ScrollReveal().reveal(".trip__list li", {
    ...scrollRevealOption,
    delay: 300,
    interval: 150,
  });

  ScrollReveal().reveal(".client__content .section__subheader", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".client__content .section__header", {
    ...scrollRevealOption,
    delay: 150,
  });
}

// =========================
// SWIPER
// =========================
if (typeof Swiper !== "undefined" && document.querySelector(".swiper")) {
  new Swiper(".swiper", {
    direction: "vertical",
    autoHeight: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });
}