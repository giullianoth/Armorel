import { getElement, getElements } from "../variables.js"

const starsToRate = getElements(".j_star_rate")
let rated = false
// const starOutline = "<i class=\"fa-regular fa-star\"></i>"
// const starFill = "<i class=\"fa-solid fa-star\"></i>"

starsToRate.forEach((star, index, arr) => {
    star.addEventListener("mouseenter", () => {
        star.classList.replace("fa-regular", "fa-solid")
        arr.forEach((item, i) => i < index && item.classList.replace("fa-regular", "fa-solid"))
    })

    star.addEventListener("mouseleave", () => {
        arr.forEach(item => item.classList.replace("fa-solid", "fa-regular"))
    })
})