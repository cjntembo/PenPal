import { sendNewLetter } from "./dataAcess.js";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        //need to grab the values of our form
        // author
        const theSelectedAuthor = document.getElementById("authorSelection").options.selectedIndex
        const SelectedAuthor = document.getElementById("authorSelection").options[theSelectedAuthor].text
        
        // letter
        const typedLetter = document.querySelector("input[name='letter']").value
// fix line 12 and 10 and date.now()
        

        // recipient
        const theSelectedRecipient = document.getElementById("recipientSelection").options.selectedIndex
        const SelectedRecipient = document.getElementById("recipientSelection").options[theSelectedRecipient].text

        // date/time
        
        const date = Date(Date.now)

        // topics
        
        const allSelectedTopics = Array.from(document.querySelectorAll("input[type=checkbox][name=topics]:checked")).map(topic => {return topic.value}).join()

           


        //make an object to post to the databade
        const dataToSend = {
            author: SelectedAuthor,
            letter: typedLetter,
            topic: allSelectedTopics,
            recipient: SelectedRecipient,
            date: date
        }

        //invoke a function that posts the data
        sendNewLetter(dataToSend)
    }
})

export const letterForm = () => {
    const html = `
        <div class="field">
        <label class="label" for="Author">Author</label>
        <select id="authorSelection" class="select">
            <option value="cheri_cola">Cheri Cola(Cheri.Cola@email.com)</option>
            <option value="megan_hart">Megan Hart(Megan.Hart@email.com)</option>
            <option value="nicky_canine">Nicky Canine(Nicky.Canine@email.com)</option>
            <option value="sammy_davis">Sammy Davis(Sammy.Davis@email.com)</option>
            <option value="michael_dugot">Michael Dugot(Michael.Dugot@email.com)</option>
            <option value="john_fuller">John Fuller(John.Fuller@email.com)</option>
        </select>
        </div>

        <div class="field">
        <label class="label" for="letter">Letter</label>
        <input type="text" id="letter" class="input" name="letter" size="500" maxLength="500" placeholder="Enter Letter Here"/>
        </div>

        <div class="field">
        <label class="labels" for="topics">Topics</label>
            <input type="checkbox" class="topics" id="topic1" name="topics" value="business"/>
            <label for="topic1">Business</label>
            <input type="checkbox" class="topics" id="topic2" name="topics" value="friendly" ckecked/>
            <label for="topic2">Friendly</label>
            <input type="checkbox" class="topics" id="topic3" name="topics" value="family"/>
            <label for="topic3">Family</label>
            <input type="checkbox" class="topics" id="topic4" name="topics" value="congratulations"/>
            <label for="topic4">Congratulations</label>
            <input type="checkbox" class="topics" id="topic5" name="topics" value="condolences"/>
            <label for="topic5">Condolences</label>
        </div>

        <div class="field">
        <label class="label" for="recipient">Recipient</label>
        <select id="recipientSelection" class="select">
            <option value="sara_whine">Sara Whine(Sara.Whine@email.com)</option>
            <option value="brittany_lake">Brittany Lake(Brittany.Lake@email.com)</option>
            <option value="sean_lancaster">Sean Lancaster(Sean.Lancaster@email.com)</option>
            <option value="edge_cattleman">Edge Cattleman(Edge.Cattleman@email.com)</option>
            <option value="tre_west">Tre West(Tre.West@email.com)</option>
            <option value="carrie_sang">Carrie Sang(Carrie.Sang@email.com)</option>
        </select>
        </div>

        <button id="sendLetter">Send Letter</button>
    `
    return html
}