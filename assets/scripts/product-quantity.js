import { UpdatePrice } from "./cart/update-price.js"
import { getElement, getElements } from "./variables.js"

const quantityChanger = getElements(".j_quantity")
const quantityButtons = (change) => getElements(".btn", change)
const quantityDisplay = (change) => getElement(".qt", change)

quantityChanger.forEach(change => {
    quantityButtons(change).forEach(btn => {
        btn.addEventListener("click", () => {
            let quantity = parseInt(quantityDisplay(change).innerText)
            
            if (btn.classList.contains("remove")) {
                quantityDisplay(change).innerText = quantity > 1 ? quantity - 1 : quantity
            }

            if (btn.classList.contains("add")) {
                quantityDisplay(change).innerText = quantity + 1
            }

            if (btn.classList.contains("cart")) {
                UpdatePrice(quantityDisplay(change))
            }
        })
    })
})