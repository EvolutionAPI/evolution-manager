const { exec } = require('child_process')

module.exports = (version) => {
  return new Promise((resolve) => {
    exec(`git fetch --all && git reset --hard ${version}`, (err, stdout) => {
      if (err) {
        console.error(err)
        return resolve(false)
      }
      console.log(stdout)
      resolve(true)
    })
  })
}