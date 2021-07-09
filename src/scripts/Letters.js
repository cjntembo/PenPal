import { getLetters } from "./dataAcess.js";

export const Letters = () => {
    //make our lists with our requests

    const letters = getLetters()

    let html = '<ul>'

    html += letters.map(letter => {
        
        return `<li class=letters>Dear ${letter.author},
                        ${letter.letter}
                        Sincerely, ${letter.recipient}
                        Sent on ${Date(Date.now)}
                        ${letter.topic} </li>`
    }).join('')

    html += '<ul>'

    return html
}