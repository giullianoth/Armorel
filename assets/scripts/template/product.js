import CalculateDiscount from "../../../app/discount.js";
import { priceBRL, round, url } from "../variables.js"

export const ProductTemplate = (data) => {

    let hasVariations = data.variations ? true : false
    let featuredVariation = hasVariations
        ? data.variations.find((item, i, arr) => item.price === Math.min(...(arr.map(i => i.price))))
        : null

    let price = featuredVariation?.price ?? data.general.price

    let hasDiscount = hasVariations
        ? featuredVariation.promotional_price ? true : false
        : data.general.promotional_price ? true : false

    let promotionalPrice = hasDiscount
        ? hasVariations ? featuredVariation.promotional_price : data.general.promotional_price
        : 0

    let discount = hasDiscount ? CalculateDiscount(price, promotionalPrice) : 0

    let discountLabel = hasDiscount ? `<span class="arm_product_image_discount">-${round(discount)}%</span>` : ""
    let actualPriceLabel = hasDiscount ? `<p class="arm_product_info_price_actualprice">${priceBRL(price)}</p>` : ""

    let product = document.createElement("article")
    product.className = "arm_product"

    product.innerHTML = `
        <div class="arm_product_image">
            <a href="${url()}/${data.url}">
                <img src="storaged/uploads/2023/06/${data.images.featured_image}" alt="${data.name}">
            </a>

            ${discountLabel}
        </div>

        <div class="arm_product_info">
            <div class="arm_product_info_actions">
                <a href="#"><i class="fa-regular fa-heart"></i></a>
                <a href="#"><i class="fa-regular fa-eye"></i></a>
                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
            </div>

            <header class="arm_product_info_title">
                <h2>
                    <a href="${url()}/${data.url}">${data.name}</a>
                </h2>
            </header>

            <div class="arm_product_info_rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span class="rating_count">(2)</span>
            </div>

            <div class="arm_product_info_price">
                <p class="arm_product_info_price_currentprice">${hasDiscount ? priceBRL(promotionalPrice) : priceBRL(price)}</p>
                ${actualPriceLabel}
            </div>
        </div>
    `

    return product
}