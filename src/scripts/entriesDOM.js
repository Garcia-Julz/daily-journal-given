import entryComponent from "./entryComponent.js"

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
export default {
    renderJournalEntries: (entries) => {
    let HtmlForAllEntries = ""
    // console.log("entries test", entries)
    entries.forEach(entry => {
      // console.log("entry", entry)
      const entryHtml = entryComponent.makeJournalEntryComponent(entry)
      HtmlForAllEntries += entryHtml
    })
    const logArticle = document.querySelector(".entryLog")
    logArticle.innerHTML = HtmlForAllEntries
  }
}
