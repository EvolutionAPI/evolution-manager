const { exec } = require('child_process');
const { verbose } = require('./verbose.js')

module.exports = async (install = false) => {
  verbose('🗣️  Verifying PM2 installation')
  return new Promise((resolve, reject) => {
    exec('pm2 -v', async (err) => {
      if (err) {
        console.log('⚙️  PM2 is not installed')
        if (!install) return reject(false)
        const installSuccess = await installPM2()
        if (!installSuccess) return reject(false)
        resolve(true)
      }
      console.log('⚙️  PM2 is installed')
      resolve(true)
    }
    )
  })

}

function installPM2() {
  return new Promise((resolve) => {
    console.log('⚙️  Installing PM2...')
    console.time('⚙️  PM2 installed successfully')
    exec('npm install -g pm2', (err, stdout) => {
      console.timeEnd('⚙️  PM2 installed successfully')
      if (err) {
        console.error(err)
        return resolve(false)
      }
      console.log(stdout)

      console.log('\n\n🔁  Please restart the process to use PM2')

      resolve(false)
    })
  })
}