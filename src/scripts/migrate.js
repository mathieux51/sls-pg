const path = require('path')
const Postgrator = require('postgrator')
const config = require('../config')

const migrate = async (version = 'max') => {
  try {
    const postgrator = new Postgrator(config.postgrator)
    console.log(`Migrating to ${version}`)

    const migrations = await postgrator.migrate(version)

    if (migrations.length > 0) {
      console.log(migrations.map(m => m.filename).join('\n'))
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports = migrate

if (module === require.main) {
  (async () => {
    try {
      // Broken code: error: database ... does not exist
      const { version } = process.argv.slice(2).reduce((acc, cur) => {
        const [key, value] = cur.replace('--', '').split('=')
        acc[key] = value
        return acc
      }, {})
      await migrate(version)
    } catch (err) {
      console.error(err)
    }
  })()
}
