import entryComponent from "./entryComponent.js"

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
// export default {
const renderDom = {
  renderJournalEntries(entries) {
    let HtmlForAllEntries = ""
    entries.forEach(entry => {
      const entryHtml = entryComponent.makeJournalEntryComponent(entry)
      HtmlForAllEntries += entryHtml
    })
    const logArticle = document.querySelector(".entryLog")
    logArticle.innerHTML = HtmlForAllEntries
  }
}
// }

export default renderDom
