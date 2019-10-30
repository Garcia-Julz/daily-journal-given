export default {
    getJournalEntries() {
      return fetch("http://localhost:3000/entries")
        .then(response => response.json())
    }
  }