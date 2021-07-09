import { getAllLetters } from "./dataAcess.js"
import { penPalLetters } from "./PenPalLetters.js"



const mainContainer = document.querySelector("#container")

const render = () => {
    getAllLetters().then(
        () => {
            mainContainer.innerHTML = penPalLetters()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    CustomEvent => {
        render()
    }
)