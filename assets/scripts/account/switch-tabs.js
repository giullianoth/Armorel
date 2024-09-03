import { getElements } from "../variables.js"
import { fadeIn } from "../effects.js"

const tabs = ["painel", "pedidos", "detalhes-da-conta", "lista-de-desejos"]
const tabLinks = getElements("a")

const tabPath = (window.location.href.split("/")).filter(target => target)
const tabTarget = tabPath[tabPath.length - 1] === "minha-conta" ? "painel" : tabPath[tabPath.length - 1].substring(1, tabPath[tabPath.length - 1].length)

const tabToOpen = getElements(".j_account_tab").find(tab => tab.dataset.target === tabTarget)

fadeIn(tabToOpen)

tabLinks.forEach(link => {
    link.addEventListener("click", () => {
        let linkHref = link.getAttribute("href").substring(1, tabLinks.length - 1)

        if (tabs.includes(linkHref)) {
            window.location.href = `#${linkHref}`
            window.location.reload()
        }
    })
})