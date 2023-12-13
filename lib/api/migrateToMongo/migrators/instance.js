const FOLDER_PATH = [
  {
    path: "/store/auth/apikey",
    key: "authentication"
  },
  {
    path: "/instances",
    secondaryConnection: true
  },
  { path: "/store/chamaai", key: "chamaai" },
  { path: "/store/chatwoot", key: "chatwoot" },
  { path: "/store/proxy", key: "proxy" },
  { path: "/store/rabbitmq", key: "rabbitmq" },
  { path: "/store/settings", key: "settings" },
  { path: "/store/typebot", key: "typebot" },
  { path: "/store/webhook", key: "webhook" },
  { path: "/store/websocket", key: "websocket" },
]

const fs = require("fs")
const path = require("path")


module.exports = async (instanceName, options, progressBars, conn, connInstance) => {
  var files = []

  FOLDER_PATH.forEach(folder => {
    files = files.concat(getFiles(instanceName, folder))
  })
  const progress = progressBars.create(files.length, 0)
  progress.update({ process: 'Instance' })
  for (const file of files) {
    const collectionName = file.key || instanceName
    const collection = (!file.secondaryConnection ? conn : connInstance).collection(collectionName)

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
    } else if (file.includes(instanceName) || opts.path.includes(instanceName)) {
      files.push({ ...opts, path: filePath })
    }
  })
  return files
}