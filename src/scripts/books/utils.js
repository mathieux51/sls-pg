module.exports.json2deleteInsert = json =>
  Object.keys(json)
    .map(collection => {
      const instances = json[collection]
      let fields = instances.length > 0 && Object.keys(instances[0])
      // TRUNCATE scenario CASCADE
      const sql = `
      DELETE FROM "${collection}";
      INSERT INTO "${collection}"
        (${fields.join(', ')})
      VALUES
        ${instances
    .map(
      i =>
        `(${fields.map(f => `'${i[f].replace(/'/g, '\'\'')}'`).join(', ')})`
    )
    .join(',\n')}
    `
      return sql
    })
    .join(';\n')

module.exports.createCollection = (factory, count = 100) => {
  const collection = []
  for (let i = 0; i < count; i++) {
    collection.push(factory())
  }
  return collection
}
