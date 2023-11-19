var argv = require('optimist').argv


const operations = {
  // 'create': require('./create'),
  'help': require('./help'),
  'server': require('./server'),
  'pm2': require('./pm2'),
  'api': require('./api'),
}


function main() {
  try{

    var operation = argv._[0]
    if (!operation) operation = 'help'
    if (!operations[operation]) {
      console.error('Unknown operation: ' + operation)
      operation = 'help'
    }
    operations[operation](argv)
  } catch (e) {
    console.error(e.message || e)
    process.exit(1)
  }
}
  
main()

