const { json2deleteInsert, createCollection } = require('./utils')
const books = require('../../books/fixtures')

const fixture = async client => {
  const ops = []
  ops.push(
    json2deleteInsert({
      books: createCollection(books, 1000)
    })
  )
  try {
    for (const query of ops) {
      await client.query(query)
    }
    console.log('Fixtures created using faker')
    await client.end()
  } catch (error) {
    console.log(error)
  }
}

module.exports = fixture

if (module === require.main) {
  (async () => {
    try {
      const db = require('../../db')
      const client = await db.connect()
      await fixture(client)
    } catch (err) {
      console.error(err)
    }
  })()
}
