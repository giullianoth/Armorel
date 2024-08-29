import { getElement, getElements, isVisible } from "../variables.js"
import { slideDown, slideUp } from "../effects.js"

const elementsToCollapse = getElements(".j_cart_collapse")
const collapseButton = (collapse) => getElement(".j_cart_collapse_clickable", collapse)
const collapseArea = (collapse) => getElement(".j_cart_collapse_content", collapse)

elementsToCollapse.forEach(collapse => {
    collapseButton(collapse).addEventListener("click", () => {
        let collapsed = collapseArea(collapse)
        if (!isVisible(collapsed)) {
            slideDown(collapsed, collapse.classList.contains("freight-calc") ? "flex" : "block")
        } else {
            slideUp(collapsed)
        }
    })
})