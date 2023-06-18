export default function CalculateDiscount(actualPrice, currentPrice) {
    let diff = (currentPrice * 100) / actualPrice
    let discount = 100 - diff
    return discount
}