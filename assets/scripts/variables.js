// BREAKPOINTS
export const breakPointExtraSmall = 375
export const breakPointSmall = 576
export const breakPointMedium = 768
export const breakPointLarge = 992
export const breakPointExtraLarge = 1024
export const breakPointXXLarge = 1200

// DOM
export const getElement = (selector, parentElement = null) => (parentElement ?? document).querySelector(selector)
export const getElements = (selector, parentElement = null) => [...(parentElement ?? document).querySelectorAll(selector)]
export const isVisible = (element) => window.getComputedStyle(element).display !== "none"

// TRANSITIONS & ANIMATIONS
export const transitionDuration = 300
export const transitionGap = 10