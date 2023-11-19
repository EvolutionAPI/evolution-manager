const functions = {
  setup: require('./setup.js'),
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
