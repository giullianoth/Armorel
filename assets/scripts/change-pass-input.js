import { getElement, getElements } from "./variables.js"

const inputsToChange = getElements(".j_password_label")
const input = (label) => getElement(".j_password_input", label)
const icon = (label) => getElement(".j_password_change", label)

inputsToChange.forEach(label => {
    let labelIcon = icon(label)

    labelIcon.addEventListener("click", () => {
        let labelInput = input(label)
        let inputLength = labelInput.value.length

        if (labelInput.type === "password") {
            labelInput.type = "text"
            labelIcon.classList.replace("fa-eye-slash", "fa-eye")
        } else if (labelInput.type === "text") {
            labelInput.type = "password"
            labelIcon.classList.replace("fa-eye", "fa-eye-slash")
        }
        
        labelInput.focus()
        labelInput.setSelectionRange(inputLength, inputLength)
    })
})