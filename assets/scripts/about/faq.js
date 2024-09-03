import { getElement} from "../variables.js"

const collapseIcon = (collapseBtn) => getElement("i", collapseBtn)

export function faqCollapse(button) {
    collapseIcon(button).classList.toggle("fa-minus")
    collapseIcon(button).classList.toggle("fa-plus")
}