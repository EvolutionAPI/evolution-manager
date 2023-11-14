// const pm2 = require('pm2')
const mime = require('mime-types');
var http = require('http');
var fs = require('fs');
const url = require('url');
const build = require('./utils/build.js')

const functions = {
  start,
  build,
}

module.exports = async (argv) => {
  try{

    if (argv._.length === 1) throw new Error('No operation specified')
    
    const operation = argv._[1]
    if (!functions[operation]) throw new Error(`Unknown operation: ${operation}`)
    
    await functions[operation](argv)
  } catch (e) {
    console.error(e.message || e)
    process.exit(1)
  }
}



const path = require('path');

function startServer(argv) {
  const { port = 9615 } = argv || {}

  const index = fs.readFileSync(path.join(__dirname, '..', 'dist', 'index.html'));

  http.createServer(function (req, res) {
    try {
      const parsedUrl = url.parse(req.url, true);

      // verify if url is a file in dist folder
      if (parsedUrl.pathname === '/') throw {}
      let filePath = path.join(__dirname, '..', 'dist', parsedUrl.pathname);

      if (fs.existsSync(filePath)) {
        const contentType = mime.lookup(filePath) || 'text/plain';
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(fs.readFileSync(filePath));
        return
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(index);
    } catch {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(index);
    }
  }).listen(port);

  console.log('🚀  Server start')
  console.log('🚀  Server listening on port ' + port)
}

async function start(argv) {
  await build()
  startServer(argv)
}

