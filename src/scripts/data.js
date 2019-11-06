export default {
    deleteEntry (entryId) {
    return fetch(`http://localhost:3000/entries/${entryId}`, {
        method: "DELETE"
    })
        .then(response => response.json())
    },

    updateJournalEntry () {
        fetch(`http://localhost:8088/recipes/${entryId}`)
            .then(response => response.json()) 
    },

    getJournalEntries() {
      return fetch("http://localhost:3000/entries")
        .then(response => response.json())
    },

    postJournalEntries (newJournalEntry) {
    return fetch("http://localhost:3000/entries", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(newJournalEntry)
    })
    }
}
