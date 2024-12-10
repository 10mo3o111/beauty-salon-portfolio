import "/node_modules/normalize.css/normalize.css";
import "/node_modules/spinkit/spinkit.min.css";
import "../assets/styles/style.scss";
import { initializeMasonry } from "./masonry.js";
import { animateHeaderTitle } from "./gsap.js";
import "./observer.js";
import "./swiper.js";
import "./hamburger.js";

document.addEventListener("DOMContentLoaded", () => {
  const curtainLeft = document.querySelector(".curtain__left");
  const curtainRight = document.querySelector(".curtain__right");
  const skCircle = document.querySelector(".sk-circle");
  const hamburger = document.querySelector(".hamburger");

  window.addEventListener("load", () => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    setTimeout(() => {
      curtainLeft.classList.add("--open");
      curtainRight.classList.add("--open");
      skCircle.classList.add("--open");
      animateHeaderTitle();
      initializeMasonry();
    }, 1000);

    setTimeout(() => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      const curtain = document.querySelector(".curtain");
      curtain.style.display = "none";
    }, 1500);
  });

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("--close");
  });
});
