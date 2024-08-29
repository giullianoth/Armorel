import { getElement, getElements, isVisible } from "../variables.js"
import { slideDown, slideUp } from "../effects.js"

const elementsToCollapse = getElements(".j_cart_collapse")
const collapseButton = (collapse) => getElement(".j_cart_collapse_clickable", collapse)
const collapseArea = (collapse) => getElement(".j_cart_collapse_content", collapse)
const icon = (button) => getElement("i", button)

elementsToCollapse.forEach(collapse => {
    let button = collapseButton(collapse)

    button.addEventListener("click", () => {
        let collapsed = collapseArea(collapse)

        if (icon(button)) {
            icon(button).classList.toggle("active")
        }

        if (!isVisible(collapsed)) {
            slideDown(collapsed, collapse.classList.contains("freight-calc") ? "flex" : "block")
        } else {
            slideUp(collapsed)
        }
    })
})