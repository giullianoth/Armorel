import { fadeIn, fadeOut } from "./effects.js"
import { getElement, getElements, isVisible } from "./variables.js"

const photos = getElements(".j_product_photo")
const photosWrapper = getElement(".j_product_photo_wrapper")
const featuredWrapper = getElement(".j_product_featured_photo")
const wrapperDimension = featuredWrapper.offsetWidth
const imageZoom = () => getElement(".j_zoom")
const thumbs = getElements(".j_thumb")
const expandButton = getElement(".j_photo_expand")
const expandArea = getElement(".j_photo_expand_area")
const expandClose = getElement(".close", expandArea)
const expandNav = getElements(".j_nav", expandArea)
const expandedPhoto = () => getElement(".j_expanded_photo")
const expandActions = getElement(".actions", expandArea)
const currentExpandedPhoto = getElement(".current-photo", expandArea)
const photosToExpand = getElement(".photos-qt", expandArea)
const changeExpanded = getElement(".image", expandArea)
let featured = photos[0]

const installments = getElement(".j_installment_modal")
const installmentsButton = getElement(".j_installment_button")
const installmentClose = getElement(".j_installment_close")

const zoomElement = () => {
    let element = document.createElement("div")
    element.className = "image-zoom j_zoom"
    element.style.backgroundImage = `url(${featured.src})`
    return element
}

export default function ProductPhotos() {
    featuredWrapper.addEventListener("mouseenter", () => {
        if (!isVisible(expandArea)) {
            let wrapper = zoomElement()
            featuredWrapper.append(wrapper)
            fadeIn(wrapper)
        }
    })

    featuredWrapper.addEventListener("mousemove", (event) => {
        if (!isVisible(expandArea)) {
            if (!imageZoom()) {
                let wrapper = zoomElement()
                featuredWrapper.append(wrapper)
                fadeIn(wrapper)
            }

            imageZoom().style.backgroundPositionX = `${-event.offsetX / 2}px`
            imageZoom().style.backgroundPositionY = `${-event.offsetY / 2}px`
        }
    })

    featuredWrapper.addEventListener("mouseleave", () => {
        if (imageZoom()) {
            fadeOut(imageZoom(), true)
        }
    })

    thumbs.forEach((thumb, index, arr) => {
        thumb.addEventListener("click", () => {
            arr.forEach(item => item.classList.remove("active"))
            thumb.classList.add("active")

            photosWrapper.style.transform = `translateX(${-wrapperDimension * index}px)`
            featured = photos[index]
        })
    })

    expandButton.addEventListener("click", () => {
        if (!isVisible(expandArea)) {
            fadeIn(expandArea, "flex")

            let expanded = featured.cloneNode(true)
            expanded.classList.add("j_expanded_photo")
            changeExpanded.append(expanded)
            photosToExpand.innerText = photos.length
            currentExpandedPhoto.innerText = photos.indexOf(featured) + 1


            if (!expandActions.classList.contains("visible")) {
                window.clearTimeout()
                expandActions.classList.add("visible")
                setTimeout(() => expandActions.classList.remove("visible"), 3000)
            }

            if (imageZoom()) {
                fadeOut(imageZoom(), true)
            }
        }
    })

    expandNav.forEach(nav => {
        nav.addEventListener("click", () => {
            if (!expandActions.classList.contains("visible")) {
                window.clearTimeout()
                expandActions.classList.add("visible")
                setTimeout(() => expandActions.classList.remove("visible"), 3000)
            }
            
            let index = 0
            let photosToCompare = photos.map(photo => photo.outerHTML)
            let from = expandedPhoto().cloneNode(true)
            let to = null

            from.classList.remove("j_expanded_photo")

            if (nav.classList.contains("prev")) {
                index = photosToCompare.indexOf(from.outerHTML) - 1 < 0 ? photosToCompare.length - 1 : photosToCompare.indexOf(from.outerHTML) - 1
            }

            if (nav.classList.contains("next")) {
                index = photosToCompare.indexOf(from.outerHTML) + 1 >= photosToCompare.length ? 0 : photosToCompare.indexOf(from.outerHTML) + 1
            }

            to = photos[index].cloneNode(true)
            to.classList.add("j_expanded_photo")

            changeExpanded.append(to)
            expandedPhoto().remove()

            currentExpandedPhoto.innerText = index + 1
        })
    })

    expandClose.addEventListener("click", () => {
        if (isVisible(expandArea)) {
            fadeOut(expandArea)
            fadeOut(expandedPhoto(), true)
        }
    })

    expandArea.addEventListener("click", ({ target }) => {
        if (isVisible(expandArea) && (target.classList.contains("j_photo_expand_area") || target.classList.contains("actions"))) {
            fadeOut(expandArea)
            fadeOut(expandedPhoto(), true)
        }
    })

    expandArea.addEventListener("mousemove", () => {
        if (!expandActions.classList.contains("visible")) {
            window.clearTimeout()
            expandActions.classList.add("visible")
            setTimeout(() => expandActions.classList.remove("visible"), 3000)
        }
    })

    installmentsButton.addEventListener("click", () => {
        if (!isVisible(installments)) {
            fadeIn(installments)
        }
    })

    installmentClose.addEventListener("click", () => {
        if (isVisible(installments)) {
            fadeOut(installments)
        }
    })

    installments.addEventListener("click", ({ target }) => {
        if (isVisible(installments) && target.classList.contains("j_installment_modal")) {
            fadeOut(installments)
        }
    })
}