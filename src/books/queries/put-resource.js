const SQL = require('sql-template-strings')

module.exports = (id, [key, value]) => {
  switch (key) {
  case 'title':
    return SQL`update books set title=${value} where id=${id}`
  case 'description':
    return SQL`update books set description=${value} where id=${id}`
  case 'paragraph':
    return SQL`update books set urgent=${value} where id=${id}`
  default:
    return
  }
}
