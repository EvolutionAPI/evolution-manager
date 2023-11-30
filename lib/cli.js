var argv = require('optimist').argv

const { verbose, isVerbose } = require('./utils/verbose.js')

const operations = {
  // 'create': require('./create'),
  'help': require('./help'),
  'server': require('./server'),
  'pm2': require('./pm2'),
  'api': require('./api'),
}

const { version } = require('../package.json')

function main() {
  try {

    console.log('🖥️  evolution-manager CLI: ' + version)
    console.log('🖥️  Node: ' + process.version)

    verbose('🗣️  Verbose: ' + isVerbose)
    verbose('🖥️  Platform: ' + process.platform)
    verbose('🖥️  Architecture: ' + process.arch)
    verbose('🖥️  PID: ' + process.pid)
    verbose('🖥️  CWD: ' + process.cwd())
    verbose('🖥️  argv: ' + JSON.stringify(argv))


    var operation = argv._[0]

    if (!operation) operation = 'help'
    if (!operations[operation]) {

      console.error(' ⁉️ Unknown operation: ' + operation)
      operation = 'help'
    }
    verbose('🗣️  Running operation: ' + operation)
    operations[operation](argv)
  } catch (e) {
    console.error(e.message || e)
    process.exit(1)
  }
}

main()

