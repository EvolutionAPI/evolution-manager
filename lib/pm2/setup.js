const build = require('../utils/build.js');
const verifyPm2Installation = require('../utils/verifyPm2Installation.js');
const detectPm2ProcessId = require('../utils/detectPm2ProcessId.js');
const { verbose } = require('../utils/verbose')
const { exec } = require('child_process')
const path = require('path')

module.exports = async (argv) => {
  const port = argv.port || 9615;


  await verifyPm2Installation(true);
  await build();

  const pm2ProcessId = await detectPm2ProcessId();

  if (pm2ProcessId !== false) {
    console.log('📦  Manager process already setup')
    await require('./reset.js')(argv, pm2ProcessId);
    return
  }

  console.log('⚙️  Starting PM2 process')
  console.time('⚙️  Starting PM2 process')
  verbose('🗣️  Port: ', port)
  exec(`pm2 serve dist/ ${port} --name evolution-manager --spa`, { cwd: path.join(__dirname, '..', '..') }, (err, stdout) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(stdout)
    console.timeEnd('⚙️  Starting PM2 process')

    console.log('🚀  PM2 process started')
    console.log('🚀  Manager ready in port :' + port)
  })
}

