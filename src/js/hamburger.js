const hamburger = document.querySelector(".hamburger");
const globalNav = document.querySelector(".global-nav");
const globalNavLink = document.querySelectorAll(".global-nav__link");

hamburger.addEventListener("click", () => {
  if (globalNav.hasAttribute("hidden")) {
    hamburger.setAttribute("aria-expanded", "true");
    globalNav.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
  } else {
    hamburger.setAttribute("aria-expanded", "false");
    globalNav.setAttribute("hidden", "");
    document.body.style.overflow = "auto";
  }
});

globalNavLink.forEach((v, i) => {
  v.addEventListener("click", () => {
    hamburger.setAttribute("aria-expanded", "false");
    globalNav.setAttribute("hidden", "");
    document.body.style.overflow = "auto";
  });
});
