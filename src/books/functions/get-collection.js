'use strict'

const db = require('../../db')
const queries = require('../queries')

module.exports.handler = async (event, context) => {
  const client = await db.connect()
  const { rows } = await client.query(queries.getCollection())
  await client.end()
  return {
    statusCode: 200,
    body: JSON.stringify(rows)
  }
}
