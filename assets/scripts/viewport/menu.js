import { fadeIn, fadeOut, slideDown, slideUp } from "../effects.js";
import { closeMenuIcon, dropdownBtns, elementContainsClass, isActive, isVisible, menuIcon, mobileMenu, mobileMenuLightbox, removeClass, setStyle, submenu, submenus, toggleClass } from "../variables.js";

function openMenu() {
    fadeIn(mobileMenuLightbox, () => {
        setStyle(mobileMenu, "transform", "translatex(0)")
    })
}

function closeMenu() {
    setStyle(mobileMenu, "transform", "")
    fadeOut(mobileMenuLightbox)
}

function toggleSubmenu(event) {
    event.preventDefault()
    const btn = event.target

    submenus.forEach((sub) => isVisible(sub) && submenu(btn) !== sub && slideUp(sub))
    dropdownBtns.forEach((b) => isActive(b.parentNode) && btn !== b && removeClass(b.parentNode, "active"))

    toggleClass(btn.parentNode, "active")
    
    if (isActive(btn.parentNode)) {
        slideDown(submenu(btn))
    } else {
        slideUp(submenu(btn))
    }
}

function MobileMenu() {
    menuIcon.addEventListener("click", openMenu)
    closeMenuIcon.addEventListener("click", closeMenu)    
    mobileMenuLightbox.addEventListener("click", (event) => elementContainsClass(event.target, "j_close") && closeMenu())
}

function DropdownMenu() {
    dropdownBtns.forEach((btn) => btn.addEventListener("click", toggleSubmenu))
}

export { MobileMenu, DropdownMenu }