document.addEventListener("DOMContentLoaded", () => {
  const scrollEl = document.querySelector("#main");
  if (!window.LocomotiveScroll) {
    console.warn("LocomotiveScroll not loaded");
    return;
  }

  const scroll = new LocomotiveScroll({
    el: scrollEl,
    smooth: true,
    smartphone: { smooth: true },
    tablet: { smooth: true },
  });

  window.addEventListener("load", () => scroll.update());
  window.addEventListener("resize", () => scroll.update());
});

var elemC = document.querySelector("#elem-container");
var fixedElem = document.querySelector("#fixed-image");

elemC.addEventListener("mouseenter", () => {
  fixedElem.style.display = "block";
});

elemC.addEventListener("mouseleave", () => {
  fixedElem.style.display = "none";
});

var elems = document.querySelectorAll(".elem");
elems.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    var img = e.getAttribute("data-image");
    fixedElem.style.backgroundImage = `url(${img})`;
  });
});
