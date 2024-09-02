import { slideDown, slideUp } from "../effects.js";
import { getElement, getElements, isVisible } from "../variables.js";

const contentsToCollapse = getElements(".j_payment_collapse")
const contentToCollapse = (collapse) => getElement(".j_collapse_content", collapse)
const collapseButton = (collapse) => getElement(".j_collapse_clickable", collapse)

export function paymentCollapse(collapseContent, button) {
    contentsToCollapse.forEach(collapse => {
        if (contentToCollapse(collapse) !== collapseContent) {
            slideUp(contentToCollapse(collapse))
            collapseButton(collapse).classList.remove("active")
        }
    })

    if (!isVisible(collapseContent)) {
        slideDown(collapseContent)
        button.classList.add("active")
    }
}