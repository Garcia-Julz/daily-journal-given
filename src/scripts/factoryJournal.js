
export default {

    journalEntry: (dateValue, conceptValue, textValue, moodValue) => {
    return {
      "date": dateValue,
      "concept": conceptValue,
      "entry": textValue,
      "mood": moodValue,
    }
  }
}
  