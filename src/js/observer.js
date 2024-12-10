import { animateBlogTitle } from "./gsap.js";
const topPage = document.querySelector(".footer__topPage");

const option = {
  root: null,
  threshold: [0.2, 0, 0, 0],
};

// let lastScrollTop = 0;
let lastScrollTopBlog = 0;
let lastScrollTopMenu = 0;

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((v, i) => {
    const currentScrollTop = window.scrollY;

    if (v.target.classList.contains("blog__title")) {
      const isScrollingDownBlog = currentScrollTop > lastScrollTopBlog;
      if (v.isIntersecting && isScrollingDownBlog) {
        animateBlogTitle(v.target.children);
        topPage.classList.remove("hidden");
      }
      lastScrollTopBlog = currentScrollTop;
    } else if (v.target.classList.contains("menu__title")) {
      const isScrollingDownMenu = currentScrollTop > lastScrollTopMenu;
      if (v.isIntersecting && isScrollingDownMenu) {
        animateBlogTitle(v.target.children);
      } else if (!v.isIntersecting && !isScrollingDownMenu) {
        topPage.classList.add("hidden");
      }
      lastScrollTopMenu = currentScrollTop;
    }
  });
}, option);

observer.observe(document.querySelector(".blog__title"));
observer.observe(document.querySelector(".menu__title"));

topPage.addEventListener("click", () => {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  topPage.classList.add("hidden");
});
