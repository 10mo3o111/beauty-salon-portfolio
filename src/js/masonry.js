import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

export function initializeMasonry() {
  const grid = document.querySelector(".blog__grid");
  if (!grid) return;

  const masonry = new Masonry(grid, {
    itemSelector: ".blog__grid-item",
    columnWidth: ".blog__grid-item",
    percentPosition: true,
  });

  imagesLoaded(grid, () => {
    masonry.layout();
  });
}
