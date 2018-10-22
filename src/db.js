const { Client } = require('pg')
const config = require('./config')
const migrate = require('./scripts/migrate')

const connect = async () => {
  try {
    const client = new Client(config.pg)
    console.log(`Connecting to database: ${config.pg.database}`)
    await client.connect()
    console.log(`Connected to database: ${config.pg.database}`)
    await migrate()
    return client
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  connect
}
