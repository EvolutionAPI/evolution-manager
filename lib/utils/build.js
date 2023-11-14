const { exec } = require('child_process')
const fs = require('fs')

module.exports = () => {
  return new Promise((resolve, reject) => {
    console.log('📦  Build start')
    console.time('📦  Build complete')
    const distFolder = process.cwd() + '/dist'
    if (fs.existsSync(distFolder)) {
      console.time('📦  Remove dist folder')
      fs.rmSync(distFolder, { recursive: true, force: true })
      console.timeEnd('📦  Remove dist folder')
    }
    exec('npm run build', (err, stdout) => {
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
