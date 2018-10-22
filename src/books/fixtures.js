const {
  company: { catchPhrase, catchPhraseDescriptor },
  random: { paragraph }
} = require('faker')

module.exports = () => ({
  title: catchPhrase(),
  description: catchPhraseDescriptor(),
  extract: paragraph()
})
