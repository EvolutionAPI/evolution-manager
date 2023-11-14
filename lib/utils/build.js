const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

module.exports = () => {
  return new Promise((resolve, reject) => {
    console.log('📦  Build start')
    console.time('📦  Build complete')
    const distFolder = path.join(__dirname, '..', '..', 'dist')
    if (fs.existsSync(distFolder)) {
      console.time('📦  Remove dist folder')
      fs.rmSync(distFolder, { recursive: true, force: true })
      console.timeEnd('📦  Remove dist folder')
    }

    exec('npm run build', { cwd: path.join(__dirname, '..', '..') }, (err, stdout) => {
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
}
