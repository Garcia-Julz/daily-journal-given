
export default {
  
    makeJournalEntryComponent: (journalEntry) => {
      // console.log("journalEntry", journalEntry)
      // Create your own HTML structure for a journal entry
      return `
      <section id="${journalEntry.id}">
        <h3>${journalEntry.concept}</h3>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.mood}</p>
        <p>${journalEntry.date}</p>
      </section>

      <button id="editJournal--${journalEntry.id}">
      Edit
      </button>
      <button id="deleteJournal--${journalEntry.id}">
      Delete
      </button>
    `
    }
}
