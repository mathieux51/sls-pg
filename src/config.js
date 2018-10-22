const { PG_HOST, PG_PORT, PG_USER, PG_DATABASE, PG_PASSWORD } = process.env

const pg = {
  user: PG_USER,
  host: PG_HOST,
  port: PG_PORT,
  database: PG_DATABASE,
  password: PG_PASSWORD
}

const postgrator = {
  ...pg,
  username: PG_USER,
  driver: 'pg',
  migrationDirectory: __dirname + '/migrations',
  schemaTable: 'schemaversion'
}

module.exports = {
  pg,
  postgrator
}
