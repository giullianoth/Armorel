import { setStyle, transitionDuration, transitionGap, transitionProps } from "./variables.js"

function fadeIn(element, callback = null, displayElement = "block") {
    setStyle(element, "transition", transitionProps())
    setStyle(element, "opacity", 0)
    setStyle(element, "display", displayElement)

    setTimeout(() => {
        setStyle(element, "opacity", "")

        setTimeout(() => {
            setStyle(element, "transition", "")
            callback && callback()
        }, transitionDuration)
    }, transitionGap)
}

function fadeOut(element, callback = null, removeElement = false) {
    setStyle(element, "transition", transitionProps())
    setStyle(element, "opacity", 0)

    setTimeout(() => {
        setStyle(element, "display", "none")
        setStyle(element, "opacity", "")
        setStyle(element, "transition", "")
        removeElement && element.remove()
        callback && callback()
    }, transitionDuration)
}

function slideDown(element, callback = null, displayElement = "block") {
    setStyle(element, "transition", "")
    setStyle(element, "display", displayElement)

    let maxHeight = element.offsetHeight

    setStyle(element, "overflow", "hidden")
    setStyle(element, "maxHeight", 0)
    setStyle(element, "paddingTop", 0)
    setStyle(element, "paddingBottom", 0)
    setStyle(element, "borderTopWidth", 0)
    setStyle(element, "borderBottomWidth", 0)

    setTimeout(() => {
        setStyle(element, "transition", transitionProps())
        setStyle(element, "maxHeight", `${maxHeight}px`)
        setStyle(element, "paddingTop", "")
        setStyle(element, "paddingBottom", "")
        setStyle(element, "borderTopWidth", "")
        setStyle(element, "borderBottomWidth", "")

        setTimeout(() => {
            setStyle(element, "overflow", "")
            setStyle(element, "transition", "")
            callback && callback()
        }, transitionDuration)
    }, transitionGap)
}

function slideUp(element, callback = null, removeElement = false) {
    setStyle(element, "transition", transitionProps())
    setStyle(element, "overflow", "hidden")
    setStyle(element, "maxHeight", 0)
    setStyle(element, "paddingTop", 0)
    setStyle(element, "paddingBottom", 0)
    setStyle(element, "borderTopWidth", 0)
    setStyle(element, "borderBottomWidth", 0)

    setTimeout(() => {
        setStyle(element, "display", "none")
        setStyle(element, "maxHeight", "")
        setStyle(element, "paddingTop", "")
        setStyle(element, "paddingBottom", "")
        setStyle(element, "borderTopWidth", "")
        setStyle(element, "borderBottomWidth", "")
        setStyle(element, "overflow", "")
        setStyle(element, "transition", "")
        removeElement && element.remove()
        callback && callback()
    }, transitionDuration)
}

export { fadeIn, fadeOut, slideDown, slideUp }