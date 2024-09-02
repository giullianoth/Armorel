import { breakPointExtraLarge, getElement, getElements } from "../variables.js"

const filterCollapseBtn = getElements(".j_filter_collapse")
const collapseIcon = (collapseBtn) => getElement("i", collapseBtn)
const collapseContent = (collapseBtn) => getElement(".j_filter_content", collapseBtn.parentNode)

window.addEventListener("resize", () => {
    filterCollapseBtn.forEach(btn => {
        if (window.innerWidth >= breakPointExtraLarge) {
            collapseIcon(btn).classList.replace("fa-plus", "fa-minus")
            collapseContent(btn).style.display = "block"
        } else {
            collapseIcon(btn).classList.replace("fa-minus", "fa-plus")
            collapseContent(btn).style.display = "none"
        }
    })
})

filterCollapseBtn.forEach(btn => {
    if (window.innerWidth >= breakPointExtraLarge) {
        collapseIcon(btn).classList.replace("fa-plus", "fa-minus")
    }
})

export function filterCollapse(button) {
    collapseIcon(button).classList.toggle("fa-minus")
    collapseIcon(button).classList.toggle("fa-plus")
}