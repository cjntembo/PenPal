import { Letters } from "./Letters.js";
import { letterForm } from "./LetterForm.js"


export const penPalLetters = () => {
    return `
    <h1>Letters to Your Pen Pal</h1>
    <section class="letterForm">
        ${letterForm()}
    </section>

    <section class="letters">
        <h2>Letters</h2>
            ${Letters()}
    </section>
    `
}