import { breakPointExtraLarge, getElement, getElements, isVisible } from "../variables.js"
import { slideDown, slideUp } from "../effects.js"

const filterCollapseBtn = getElements(".j_filter_collapse")
const collapseIcon = (collapseBtn) => getElement("i", collapseBtn)
const collapseContent = (collapseBtn) => getElement(".j_filter_content", collapseBtn.parentNode)

window.addEventListener("resize", () => {
    filterCollapseBtn.forEach(btn => {
        if (window.innerWidth >= breakPointExtraLarge) {
            collapseIcon(btn).classList.replace("fa-plus", "fa-minus")
        } else {
            collapseIcon(btn).classList.replace("fa-minus", "fa-plus")
        }
    })
})

filterCollapseBtn.forEach(btn => {
    if (window.innerWidth >= breakPointExtraLarge) {
        collapseIcon(btn).classList.replace("fa-plus", "fa-minus")
    }

    btn.addEventListener("click", () => {
        if (!isVisible(collapseContent(btn))) {
            slideDown(collapseContent(btn))
            collapseIcon(btn).classList.replace("fa-plus", "fa-minus")
        } else {
            slideUp(collapseContent(btn))
            collapseIcon(btn).classList.replace("fa-minus", "fa-plus")
        }
    })
})