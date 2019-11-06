import API from "./data.js"
import renderDom from "./entriesDOM.js"
import journalFunction from "./factoryJournal.js"
import events from "./events.js"

API.getJournalEntries()
.then(response => renderDom.renderJournalEntries(response))

const recordJournalButton = document.querySelector("#recordJournalEntry")
// Create an eventlistener to recognize a CLICK on the recordJournalButton
recordJournalButton.addEventListener("click", () =>{
    // Use document.querySelector to select your input fields.
    // Use the .value property on the input field elements 
    // to get the text that you typed/chose.
    let dateValue = document.querySelector("#dateValue").value
    let conceptValue = document.querySelector("#conceptValue").value
    let textValue = document.querySelector("#textValue").value
    let moodValue = document.querySelector("#moodValue").value
    // I am calling the function with holds the variables I created to 
    const newJournalEntry = journalFunction.journalEntry(
        dateValue,
        conceptValue,
        textValue,
        moodValue
    )
    // console.log("test", objectMaker)

    API.postJournalEntries(newJournalEntry)
    .then (API.getJournalEntries)
    .then(response => renderDom.renderJournalEntries(response))
    })

const buttonSelect1 = document.getElementById("mood--1")
// console.log("mood 1", buttonSelect1)
buttonSelect1.addEventListener("click", event => {
    const mood = event.target.value;
        // mood.filter(mood => mood.value)
        API.getJournalEntries().then((entries)=>{
            // console.log(entries)
            let filteredEntries = entries.filter(entry => entry.mood === mood)
            //  console.log("filtered test!", filteredEntries)            
            renderDom.renderJournalEntries(filteredEntries)
            // console.log("testing", mood)
        })
    })

const buttonSelect2 = document.getElementById("mood--2")
// console.log("mood 2", buttonSelect2)
buttonSelect2.addEventListener("click", event1 => {
    const mood = event.target.value;
        // mood.filter(mood => mood.value)
        API.getJournalEntries().then((entries)=>{
            // console.log(entries)
            let filteredEntries = entries.filter(entry => entry.mood === mood)
            //  console.log("filtered test!", filteredEntries)            
            renderDom.renderJournalEntries(filteredEntries)
            // console.log("testing", mood)
        })
    })

const buttonSelect3 = document.getElementById("mood--3")
// console.log("mood 3", buttonSelect3)
buttonSelect3.addEventListener("click", event => {
    const mood = event.target.value;
        // mood.filter(mood => mood.value)
        API.getJournalEntries().then((entries)=>{
            // console.log(entries)
            let filteredEntries = entries.filter(entry => entry.mood === mood)
            //  console.log("filtered test!", filteredEntries)            
            renderDom.renderJournalEntries(filteredEntries)
            // console.log("testing", mood)
        })
    })

events.registerDeleteListener()

events.registerEditListener()
