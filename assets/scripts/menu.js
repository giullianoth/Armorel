import { fadeIn, fadeOut} from "./effects.js"
import { breakPointLarge, getElement, isVisible, transitionGap } from "./variables.js"

const menuIcon = getElement(".j_menu_icon")
const menuCloseIcon = getElement(".j_menu_close")
const menuOverlay = getElement(".j_menu_overlay")
const menuContainer = getElement(".j_menu_container")

function closeMenu() {
    if (isVisible(menuOverlay)) {
        menuContainer.classList.remove("active")
        fadeOut(menuOverlay)
    }
}


export function menuDropdown(button) {
    button.classList.toggle("open")
}

export default function Menu() {
    window.addEventListener("resize", ({ target }) => {
        if (target.innerWidth >= breakPointLarge) {
            menuOverlay.style.display = ""
        }
    })

    menuIcon.addEventListener("click", () => {
        if (!isVisible(menuOverlay)) {
            fadeIn(menuOverlay)

            setTimeout(() => {
                menuContainer.classList.add("active")
            }, transitionGap)
        }
    })

    menuCloseIcon.addEventListener("click", closeMenu)

    menuOverlay.addEventListener("click", ({ target }) => {
        if (target.classList.contains("j_menu_overlay")) {
            closeMenu()
        }
    })
}