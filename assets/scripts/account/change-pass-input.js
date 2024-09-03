import { getElement, getElements } from "../variables.js"

const inputsToChange = getElements(".j_password_label")
const input = (label) => getElement(".j_password_input", label)
const icon = (label) => getElement(".j_password_change", label)

inputsToChange.forEach(label => {
    let labelIcon = icon(label)
    let labelInput = input(label)

    labelIcon.addEventListener("click", () => {
        if (labelInput.getAttribute("type") === "password") {
            labelInput.setAttribute("type", "text")
            labelIcon.classList.replace("fa-eye-slash", "fa-eye")
        } else if (labelInput.getAttribute("type") === "text") {
            labelInput.setAttribute("type", "password")
            labelIcon.classList.replace("fa-eye", "fa-eye-slash")
        }
    })
})