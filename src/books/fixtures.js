const {
  company: { catchPhrase, catchPhraseDescriptor },
  random: { word }
} = require('faker')

module.exports = () => ({
  title: catchPhrase(),
  description: catchPhraseDescriptor(),
  extract: word()
})
