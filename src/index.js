const menu = document.querySelector("#menu");
const menuBtn = document.querySelector("#menu-btn");

const sliders = document.querySelectorAll(".slider");
const sliderBtn = document.querySelector("#hero-btn");

const search = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");

const offerMenu = document.querySelector("#offer-menu");
const offerBtn = document.querySelector("#offer-btn");
const mobileOfferMenu = document.querySelector("#mobile-offer-menu");
const mobileOfferBtn = document.querySelector("#mobile-offer-btn");

const gallery = document.querySelector(".gallery");
const galleryDropdown = document.querySelector("#gallery-dropdown");
const galleryBtn = document.querySelector("#gallery-btn");

const modalBackdrop = document.querySelector("#backdrop");
const modal = document.querySelector("#modal-img");

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

// Sliders in Hero section

let nextSliderIndex = 0;
let currenrtSliderIndex = 0;
const sliderAnimations = [
  "slideFromNext",
  "slideToNext",
  "slideFromPrev",
  "slideToPrev",
];

const nextSlide = (current, next) => {
  sliders[current].classList.remove(...sliderAnimations, "invisible");
  sliders[next].classList.remove(...sliderAnimations);
  classToggle(sliders[current], ["slideFromNext"]);
  classToggle(sliders[next], ["slideToNext"]);
};
const prevSlide = (current, next) => {
  sliders[current].classList.remove(...sliderAnimations, "invisible");
  sliders[next].classList.remove(...sliderAnimations);
  classToggle(sliders[current], ["slideFromPrev"]);
  classToggle(sliders[next], ["slideToPrev"]);
};

sliderBtn.addEventListener("click", (e) => {
  currenrtSliderIndex = nextSliderIndex;
  if (e.target.id === "btn-prev") {
    nextSliderIndex === 0
      ? (nextSliderIndex = sliders.length - 1)
      : (nextSliderIndex -= 1);
    prevSlide(currenrtSliderIndex, nextSliderIndex);
  }
  if (e.target.id === "btn-next") {
    nextSliderIndex === sliders.length - 1
      ? (nextSliderIndex = 0)
      : (nextSliderIndex += 1);
    nextSlide(currenrtSliderIndex, nextSliderIndex);
  }
});

// Shows all project's photos

galleryBtn.addEventListener("click", () => {
  classToggle(galleryBtn, ["hidden"]);
  classToggle(galleryDropdown, ["opacity-0"]);
});

// Open modal with ptoject's photos

let nextImg = 0;

gallery.addEventListener("click", (e) => {
  if (modalBackdrop.classList.contains("hidden")) {
    if (e.target.alt === undefined) return;
    modal.src = `./src/images/projects/Photo-${e.target.alt}.jpg`;
    nextImg = Number(e.target.alt);
  }
  modalBackdrop.classList.remove("hidden");

  if (e.target.id === "backdrop") {
    classToggle(modalBackdrop, ["hidden"]);
  }
  if (e.target.id === "modal-prev") {
    nextImg === 0 ? (nextImg = gallery.children.length - 2) : (nextImg -= 1);
  }
  if (e.target.id === "modal-next") {
    nextImg === gallery.children.length - 2 ? (nextImg = 0) : (nextImg += 1);
  }
  modal.src = `./src/images/projects/Photo-${nextImg}.jpg`;
});
