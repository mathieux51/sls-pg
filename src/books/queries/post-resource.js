const SQL = require('sql-template-strings')

module.exports = ({ title, description, paragraph }) =>
  SQL`insert into books (title, description, paragraph) 
        VALUES (${title}, ${description}, ${paragraph}) 
        RETURNING id;`
