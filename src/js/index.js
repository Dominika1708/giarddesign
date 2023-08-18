const menu = document.querySelector("#menu");
const menuBtn = document.querySelector("#menu-btn");

const search = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");

const offerMenu = document.querySelector("#offer-menu");
const offerBtn = document.querySelector("#offer-btn");
const mobileOfferMenu = document.querySelector("#mobile-offer-menu");
const mobileOfferBtn = document.querySelector("#mobile-offer-btn");

//  Opens the menu on mobile

menuBtn.addEventListener("click", () => {
  menuBtn.firstElementChild.classList.toggle("translate-y-2");
  menuBtn.firstElementChild.classList.toggle("bg-white");

  menuBtn.lastElementChild.classList.toggle("-translate-y-2");
  menuBtn.lastElementChild.classList.toggle("rotate-90");
  menuBtn.lastElementChild.classList.toggle("bg-white");

  menuBtn.classList.toggle("rotate-45");
  menuBtn.classList.toggle("fixed");
  menuBtn.classList.toggle("right-0");

  menu.classList.toggle("translate-x-full");
});

// Opens search input

const setBtnType = () => {
  search.classList.contains("border")
    ? searchBtn.setAttribute("type", "submit")
    : searchBtn.setAttribute("type", "button");
};

searchBtn.addEventListener("click", () => {
  search.classList.toggle("border");
  search.classList.toggle("w-[26px]");
  search.focus();
  setTimeout(setBtnType, 500);
});

// Opens offer menu

offerBtn.addEventListener("click", () => {
  offerMenu.classList.toggle("opacity-0");
  offerMenu.classList.toggle("-translate-y-full");
  offerMenu.classList.toggle("pointer-events-none");
});

mobileOfferBtn.addEventListener("click", () => {
  mobileOfferMenu.classList.toggle("opacity-0");
  mobileOfferMenu.classList.toggle("-translate-y-full");
  mobileOfferMenu.classList.toggle("pointer-events-none");
  mobileOfferMenu.classList.toggle("pt-4");
  mobileOfferMenu.classList.toggle("h-0");
});