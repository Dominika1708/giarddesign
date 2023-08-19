import Masonry from "../../node_modules/masonry-layout";

const menu = document.querySelector("#menu");
const menuBtn = document.querySelector("#menu-btn");

const search = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");

const offerMenu = document.querySelector("#offer-menu");
const offerBtn = document.querySelector("#offer-btn");
const mobileOfferMenu = document.querySelector("#mobile-offer-menu");
const mobileOfferBtn = document.querySelector("#mobile-offer-btn");

const gallery = document.querySelector("#gallery-dropdown");
const galleryBtn = document.querySelector("#gallery-btn");

const classToggle = (element, styles) => {
  for (const style of styles) {
    element.classList.toggle(style);
  }
};

//  Opens the menu on mobile

menuBtn.addEventListener("click", () => {
  classToggle(menuBtn.firstElementChild, ["translate-y-2", "bg-white"]);
  classToggle(menuBtn.lastElementChild, [
    "-translate-y-2",
    "rotate-90",
    "bg-white",
  ]);
  classToggle(menuBtn, ["rotate-45", "fixed", "right-0"]);
  classToggle(menu, ["translate-x-full"]);
});

// Opens search input

const setBtnType = () => {
  search.classList.contains("border")
    ? searchBtn.setAttribute("type", "submit")
    : searchBtn.setAttribute("type", "button");
};

searchBtn.addEventListener("click", () => {
  classToggle(search, ["border", "w-[26px]"]);
  search.focus();
  setTimeout(setBtnType, 500);
});

// Opens offer menu

offerBtn.addEventListener("click", () => {
  classToggle(offerMenu, [
    "opacity-0",
    "-translate-y-full",
    "pointer-events-none",
  ]);
});

mobileOfferBtn.addEventListener("click", () => {
  classToggle(mobileOfferMenu, [
    "opacity-0",
    "-translate-y-full",
    "pointer-events-none",
    "pt-4",
    "h-0",
  ]);
});

// Shows all project's photos

galleryBtn.addEventListener("click", () => {
  classToggle(galleryBtn, ["hidden"]);
  classToggle(gallery, ["opacity-0"]);
});

new Masonry(".grid", {
  itemSelector: ".grid-item",
  columnWidth: 10,
  fitWidth: true,
});
