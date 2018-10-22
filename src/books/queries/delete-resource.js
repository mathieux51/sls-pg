const SQL = require('sql-template-strings')

module.exports = id => SQL`delete from books where id=${id}`
