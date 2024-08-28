import { getElement, getElements } from "../variables.js"

const priceRange = getElement(".j_price_range")
const rangeHandles = getElements(".handle", priceRange)
const priceRangeValueMin = getElement(".j_price_range_value .min")
const priceRangeValueMax = getElement(".j_price_range_value .max")
const priceRangeProgress = getElement(".progress", priceRange)
const minValue = parseInt(rangeHandles[0].min)
const maxValue = parseInt(rangeHandles[1].max)
const rangeInterval = maxValue - minValue
const rangeGap = 20

rangeHandles.forEach(handle => {
    handle.addEventListener("input", (event) => {
        let min = parseInt(rangeHandles[0].value)
        let max = parseInt(rangeHandles[1].value)
        let leftOffset = ((min - minValue) * 100) / rangeInterval
        let rightOffset = ((maxValue - max) * 100) / rangeInterval

        if (max - min >= rangeGap) {
            priceRangeValueMin.innerText = min
            priceRangeValueMax.innerText = max

            priceRangeProgress.style.left = `${leftOffset}%`
            priceRangeProgress.style.right = `${rightOffset}%`
        } else {
            if (event.target.classList.contains("min")) {
                rangeHandles[0].value = max - rangeGap
            }

            if (event.target.classList.contains("max")) {
                rangeHandles[1].value = min + rangeGap
            }
        }
    })
})