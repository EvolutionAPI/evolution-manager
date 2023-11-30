const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')
const { verbose } = require('./verbose.js')

module.exports = (envs = {}) => {
  return new Promise((resolve, reject) => {
    verifyViteInstallation().then(() => {
      console.log('📦  Build start')
      console.time('📦  Build complete')
      const distFolder = path.join(__dirname, '..', '..', 'dist')
      if (fs.existsSync(distFolder)) {
        console.time('📦  Remove dist folder')
        fs.rmSync(distFolder, { recursive: true, force: true })
        console.timeEnd('📦  Remove dist folder')
      }

      // pass envs to build
      verbose('🗣️  Build Env: ', envs)

      exec(`npm run build`, { env: envs, cwd: path.join(__dirname, '..', '..') }, (err, stdout) => {
        if (err) {
          console.error(err)
          reject(err)
          return
        }
        console.log(stdout)
        console.timeEnd('📦  Build complete')
        resolve()
      })
    })
  }).catch(() => {
    return
  })
}


const verifyViteInstallation = () => {
  return new Promise((resolve, reject) => {
    verbose('🗣️  Verifying Vite installation')
    exec(`vite --v`, (err) => {
      if (!err) return resolve()

      console.log('🚨 Vite not installed, trying to install it')
      exec(`npm install -g vite@^4.2.0`, (err) => {
        if (err) {
          console.log('🚨 Vite installation failed')
          reject(err)
          return
        }

        console.log('🚨 Vite installed')
        console.log('🔁 Run the command again')
        reject()
      })
    })
  })
}