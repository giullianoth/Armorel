import { getElements } from "../variables.js"

const starsToRate = getElements(".j_star_rate")

starsToRate.forEach((star, index, arr) => {
    star.addEventListener("mouseenter", () => {
        star.classList.replace("fa-regular", "fa-solid")
        arr.forEach((item, i) => i < index && item.classList.replace("fa-regular", "fa-solid"))
    })

    star.addEventListener("mouseleave", () => {
        arr.forEach(item => item.classList.replace("fa-solid", "fa-regular"))
    })
})