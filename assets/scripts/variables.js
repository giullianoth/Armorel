// DOM
const getElement = (selector, parentElement = null) => (parentElement ?? document).querySelector(selector)
const getElements = (selector, parentElement = null) => (parentElement ?? document).querySelectorAll(selector)

const setStyle = (element, attr, value) => element.style[attr] = value

const addClass = (element, className) => element.classList.add(className)
const removeClass = (element, className) => element.classList.remove(className)
const toggleClass = (element, className) => element.classList.toggle(className)
const replaceClass = (element, oldClass, newClass) => element.classList.replace(oldClass, newClass)
const elementContainsClass = (element, className) => element.classList.contains(className)

const computedStyle = (element, attr) => window.getComputedStyle(element)[attr]

const isVisible = (element) => computedStyle(element, "display") !== "none"
const isActive = (element) => elementContainsClass(element, "active")

const normalArray = (arr) => {
    let list = []
    arr.forEach((item) => list.push(item))
    return list
}

// TRANSITIONS AND ANIMATIONS
const transitionDuration = 300;
const transitionGap = 10;
const transitionProps = (property = "all", duration = `${transitionDuration / 1000}s`, timingFunction = "ease", delay = "0s") => `${property} ${duration} ${timingFunction} ${delay}`;

// MOBILE MENU
const menuIcon = getElement(".j_menu_icon")
const closeMenuIcon = getElement(".j_close_menu")
const mobileMenuLightbox = getElement(".j_mobile_menu_lightbox")
const mobileMenu = getElement(".j_mobile_menu")

// DROPDOWN MENU
const dropdownBtns = getElements(".j_dropdown")
const submenus = getElements(".j_submenu")
const submenu = (btn) => getElement(".j_submenu", btn.parentElement)

export {
    getElement, getElements,
    setStyle, addClass, removeClass, toggleClass, replaceClass, elementContainsClass, computedStyle, isVisible, isActive,
    normalArray,

    transitionDuration, transitionGap, transitionProps,

    menuIcon, closeMenuIcon, mobileMenuLightbox, mobileMenu,
    dropdownBtns, submenus, submenu,
}