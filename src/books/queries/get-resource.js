const SQL = require('sql-template-strings')

module.exports = id => SQL`select * from books where id=${id}`
