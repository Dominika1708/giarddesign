const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu")

console.log(menuBtn.firstElementChild)
console.log(menuBtn.lastElementChild)

menuBtn.addEventListener("click", () => {
    menuBtn.firstElementChild.classList.toggle("translate-y-2")

    menuBtn.lastElementChild.classList.toggle("-translate-y-2")
    menuBtn.lastElementChild.classList.toggle("rotate-90")

    menuBtn.classList.toggle("rotate-45")
    menuBtn.classList.toggle("fixed")
    menuBtn.classList.toggle("right-6")

    menu.classList.toggle("hidden")

})