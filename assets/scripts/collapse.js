import { paymentCollapse } from "./checkout/payment-collapse.js"
import { slideDown, slideUp } from "./effects.js"
import { menuDropdown } from "./menu.js"
import { filterCollapse } from "./store/filter-collapse.js"
import { getElement, getElements, isVisible } from "./variables.js"

const contentsToCollapse = getElements(".j_collapse")
const contentToCollapse = (collapse) => getElement(".j_collapse_content", collapse)
const collapseButton = (collapse) => getElement(".j_collapse_clickable", collapse)

export default function Collapse() {
    contentsToCollapse.forEach(collapse => {
        collapseButton(collapse).addEventListener("click", event => {
            event.preventDefault()
            let content = contentToCollapse(collapse)

            if (collapse.classList.contains("j_payment_collapse")) {
                paymentCollapse(content, collapseButton(collapse))
                return
            }

            if (!isVisible(content)) {
                slideDown(content)
            } else {
                slideUp(content)
            }

            if (collapse.classList.contains("j_dropdown")) {
                menuDropdown(collapseButton(collapse))
            }

            if (collapse.classList.contains("j_collapse_filter_by")) {
                filterCollapse(collapseButton(collapse))                
            }
        })        
    })
}