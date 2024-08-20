import { fadeIn, fadeOut, slideDown, slideUp } from "./effects.js"
import { breakPointLarge, getElement, getElements, isVisible, transitionGap } from "./variables.js"

const menuIcon = getElement(".j_menu_icon")
const menuCloseIcon = getElement(".j_menu_close")
const menuOverlay = getElement(".j_menu_overlay")
const menuContainer = getElement(".j_menu_container")
const dropDown = getElements(".j_dropdown")
const menuItems = getElements("li a:not(.j_dropdown)", menuContainer)

function closeMenu() {
    if (isVisible(menuOverlay)) {
        menuContainer.classList.remove("active")
        fadeOut(menuOverlay)
    }
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

    dropDown.forEach(btn => {
        btn.addEventListener("click", (event) => {
            event.preventDefault()
            let submenuTarget = getElement(".j_submenu", btn.parentNode)

            if (!isVisible(submenuTarget)) {
                slideDown(submenuTarget)
                btn.classList.add("open")
            } else {
                slideUp(submenuTarget)
                btn.classList.remove("open")
            }
        })
    })

    menuItems.forEach(item => {
        item.addEventListener("click", closeMenu)
    })
}