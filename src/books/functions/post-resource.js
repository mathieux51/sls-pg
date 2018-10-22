'use strict'
const db = require('../../db')
const queries = require('../queries')

module.exports.handler = async (event, context) => {
  try {
    if (event.headers['Content-Type'] === 'application/json') {
      const client = await db.connect()
      const { title, description, paragraph } = JSON.parse(event.body)
      const { rows } = await client.query(
        queries.postResource({ title, description, paragraph })
      )
      const [id] = rows
      await client.end()
      return {
        statusCode: 201,
        body: JSON.stringify(id)
      }
    }
  } catch (err) {
    return err
  }
}
