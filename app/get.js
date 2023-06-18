import { Data } from "./data/data.js"

const get = (type) => Data[type]

function getById(id, dataType) {
    let data = get(dataType)
    let product = data.find(item => item.id === id)
    return product
}

export { getById }