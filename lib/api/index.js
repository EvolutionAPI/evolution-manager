const functions = {
  i: require('./setup.js'),
  install: require('./setup.js'),
  setup: require('./setup.js'),
  uninstall: require('./uninstall.js'),
  cv: require('./changeVersion.js'),
  changeVersion: require('./changeVersion.js'),
  'migrate-to-mongo': require('./migrateToMongo/index.js'),
}

module.exports = async (argv) => {
  try {
    if (argv._.length === 1) throw new Error('No operation specified')
    const operation = argv._[1]
    if (!functions[operation]) throw new Error(`Unknown operation: ${operation}`)

    await functions[operation](argv)
  } catch (e) {
    console.error(e.message || e)
    process.exit(1)
  }
}
