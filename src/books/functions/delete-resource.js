'use strict'

const db = require('../../db')
const queries = require('../queries')

module.exports.handler = async (event, context) => {
  try {
    const { id } = event.pathParameters
    if (id) {
      const client = await db.connect()
      await client.query(queries.deleteResource(id))
      await client.end()
      return {
        statusCode: 204
      }
    }
  } catch (err) {
    return err
  }
}
