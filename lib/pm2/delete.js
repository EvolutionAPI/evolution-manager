const { exec } = require('child_process');
const detectPm2ProcessId = require('../utils/detectPm2ProcessId.js');

module.exports = async (argv, id) => {
  const pm2ProcessId = id || await detectPm2ProcessId();
  if(pm2ProcessId === false) {
    console.log('⚙️  Manager process not setup')
    return
  }

  console.log('⚙️  Deleting PM2 process')
  exec(`pm2 del ${pm2ProcessId}`, (err, stdout) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(stdout)
  })

  console.log('🗑️  PM2 process deleted')
}