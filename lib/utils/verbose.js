var argv = require('optimist').argv

const isVerbose = argv.verbose || false
const verbose = isVerbose ? verboseConsole : () => { };

module.exports = {
  verbose,
  isVerbose
}

function verboseConsole() {
  if (isVerbose) {
    console.log.apply(console, arguments)
  }
}