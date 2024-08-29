import { getElement, getElements } from "../variables.js"

const productPriceTotal = (field) => getElement(".j_product_total", (field.parentNode).parentNode)
const productPixPriceTotal = (field) => getElement(".j_pix_total", (field.parentNode).parentNode)
const productPrice = (field) => getElement(".j_product_price", (field.parentNode).parentNode)
const productPixPrice = (field) => getElement(".j_pix_price", (field.parentNode).parentNode)
const allPrices = () => getElements(".j_product_total").map(element => parseFloat(element.innerText))
const allPixPrices = () => getElements(".j_pix_total").map(element => parseFloat(element.innerText))
const cartSubtotal = getElement(".j_cart_subtotal")
const cartPix = getElement(".j_cart_pix")
const cartTotal = getElement(".j_cart_total")

export function UpdatePrice(quantityField) {
    let quantity = parseInt(quantityField.innerText)
    let price = parseInt(productPrice(quantityField).innerText)
    let pixPrice = parseInt(productPixPrice(quantityField).innerText)
    let subtotal = quantity * price
    let pixSubtotal = quantity * pixPrice

    console.log(pixSubtotal);    

    productPriceTotal(quantityField).innerText = subtotal.toFixed(2).replace(".", ",")
    productPixPriceTotal(quantityField).innerText = pixSubtotal.toFixed(2).replace(".", ",")

    let pixTotal = allPixPrices().reduce((acc, value) => acc + value, 0)
    let total = allPrices().reduce((acc, value) => acc + value, 0)

    cartSubtotal.innerText = total.toFixed(2).replace(".", ",")
    cartPix.innerText = pixTotal.toFixed(2).replace(".", ",")
    cartTotal.innerText = total.toFixed(2).replace(".", ",")
}