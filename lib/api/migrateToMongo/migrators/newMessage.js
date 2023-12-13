const FOLDER_PATH = [{
  path: "/store/messages",
  key: "messages"
}]

const fs = require("fs")
const path = require("path")


module.exports = async (instanceName, options, progressBars, conn) => {
  var files = []

  FOLDER_PATH.forEach(folder => {
    files = files.concat(getFiles(instanceName, folder))
  })
  const progress = progressBars.create(files.length, 0)
  progress.update({ process: 'Messages' })
  for (const file of files) {
    const collectionName = file.key
    const collection = conn.collection(collectionName)

    const data = JSON.parse(fs.readFileSync(file.path, 'utf8'))
    data._id = file.path.split('\\').pop().split('.')[0]
    await collection.findOneAndUpdate({ _id: data._id }, { $set: data }, { upsert: true })

    progress.increment()
  }
}

function getFiles(instanceName, opts) {
  var files = []
  const folder = opts.path || opts
  const folderPath = path.join(process.cwd(), folder)

  fs.readdirSync(folderPath).forEach(file => {
    const filePath = path.join(folderPath, file)
    if (fs.statSync(filePath).isDirectory()) {
      files = files.concat(getFiles(instanceName, { ...opts, path: `${folder}/${file}` }))
    } else if (file.includes(instanceName) || folder.includes(instanceName)) {
      files.push({ ...opts, path: filePath })
    }
  })
  return files
}