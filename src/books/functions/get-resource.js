'use strict'

const db = require('../../db')
const queries = require('../queries')

module.exports.handler = async (event, context) => {
  try {
    const { id } = event.pathParameters
    if (id) {
      const client = await db.connect()
      const { rows } = await client.query(queries.getResource(id))
      const [inquiry] = rows
      await client.end()
      return {
        statusCode: 200,
        body: JSON.stringify(inquiry)
      }
    }
  } catch (err) {
    return err
  }
}
