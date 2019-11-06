import API from "./data.js"
import renderDom from "./entriesDOM.js"

const entryList = document.querySelector("#entryList") 

export default {

    registerDeleteListener() {
        entryList.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteJournal--")) {
                // Extract recipe id from the button's id attribute
                const entryToDelete = event.target.id.split("--")[1]

                // Invoke the delete method, then get all recipes and render them
                API.deleteEntry(entryToDelete)
                    .then(API.getJournalEntries)
                    .then((results) => {
                        renderDom.renderJournalEntries(results)
                    })
            }
        })
    },

    registerEditListener () {
        entryList.addEventListener("click", event => {
            if (event.target.id.startsWith("editJournal--")) {
                const entryToEdit = event.target.id.split("--")[1]
                updateJournalEntry(entryToEdit)
            }
        })
    }
}
