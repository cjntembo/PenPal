const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

const applicationState = {
    letters: []
}

export const getAllLetters = () => {
    return fetch(`${API}/letters`)
    .then(response => response.json())
    .then( letterRequests => {
        applicationState.letters = letterRequests
    })
}


export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}

//Post a new Request
export const sendNewLetter = (newLetter) => {
    //to include method, headers, and the body

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newLetter)
    }

    return fetch(`${API}/letters`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

//