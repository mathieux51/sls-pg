'use strict'

const db = require('../../db')
const queries = require('../queries')

module.exports.handler = async (event, context) => {
  try {
    const { id } = event.pathParameters

    if (id && event.headers['Content-Type'] === 'application/json') {
      const client = await db.connect()

      const { rows } = await client.query(queries.getResource(id))

      const [inquiry] = rows
      if (inquiry) {
        const body = JSON.parse(event.body)
        delete body['id']

        for (const entry of Object.entries(body)) {
          await client.query(queries.putResource(id, entry))
        }
        const res = await client.query(queries.getResource(id))

        await client.end()
        return {
          statusCode: 200,
          body: JSON.stringify(res.rows[0])
        }
      }
    }
  } catch (err) {
    return err
  }
}
