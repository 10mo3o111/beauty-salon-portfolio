import { gsap } from "gsap";

function animateHeaderTitle() {
  gsap.to(".header__title-letter", {
    duration: 0.5,
    ease: "power1.in",
    opacity: 1,
    stagger: 0.1,
  });
}

function animateBlogTitle(targetElement) {
  const elelments = Array.from(targetElement);
  gsap.fromTo(
    elelments,
    {
      x: -15,
      opacity: 0,
    },
    {
      duration: 0.3,
      x: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power1.in",
    }
  );
}

export { animateHeaderTitle, animateBlogTitle };
