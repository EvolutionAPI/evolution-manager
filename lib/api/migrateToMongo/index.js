const verifyEvolutionInstallation = require('../../utils/verifyEvolutionInstallation.js');
const cliProgress = require('cli-progress');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const colors = require('ansi-colors');
const mongoose = require('mongoose');


const migratorsFunctions = {
  INSTANCE: require('./migrators/instance.js'),
  CONTACTS: require('./migrators/contacts.js'),
  NEW_MESSAGE: require('./migrators/newMessage.js'),
  MESSAGE_UPDATE: require('./migrators/messageUpdate.js'),
  CHATS: require('./migrators/chats.js'),
};


module.exports = async () => {
  const isEvolutionInstalled = verifyEvolutionInstallation();
  if (!isEvolutionInstalled) return;

  const instancesNames = fs.readdirSync(path.join(process.cwd(), 'instances')).filter((file) => {
    return fs.statSync(path.join(process.cwd(), 'instances', file)).isDirectory();
  });

  const questions = [
    {
      type: 'input',
      name: 'mongodbUrl',
      message: 'MongoDB url:',
      default: 'mongodb://admin:password@localhost:27017',
    },
    {
      type: 'input',
      name: 'prefix',
      message: 'MongoDB prefix:',
      default: 'evolution',
    },
    {
      type: 'checkbox',
      name: 'saveData',
      message: 'What data do you want to migrate?',
      choices: [
        {
          name: 'Instance',
          value: 'INSTANCE',
          checked: true,
        },
        {
          name: 'New Message',
          value: 'NEW_MESSAGE',
          checked: true,
        },
        {
          name: 'Message Update',
          value: 'MESSAGE_UPDATE',
          checked: true,
        },
        {
          name: 'Contacts',
          value: 'CONTACTS',
          checked: true,
        },
        {
          name: 'Chats',
          value: 'CHATS',
          checked: true,
        },
      ],
    },
    {
      type: 'checkbox',
      name: 'selectedInstances',
      message: 'Select instances to migrate:',
      choices: instancesNames.map((instanceName) => {
        return {
          name: instanceName,
          value: instanceName,
          checked: true,
        }
      }),
    }
  ];

  // get folders from /instances
  const answers = await inquirer.prompt(questions);


  // connect to mongodb
  console.log('\n\n🌱 Connecting to MongoDB...');
  const conn = await mongoose.createConnection(answers.mongodbUrl, {
    dbName: answers.prefix + '-whatsapp-api',
  }).asPromise();
  const connInstance = answers.saveData.includes('INSTANCE') ? await mongoose.createConnection(answers.mongodbUrl, {
    dbName: answers.prefix + '-instances',
  }).asPromise() : null;
  console.log('🌱 Connected to MongoDB!\n\n');

  const instancesBar = new cliProgress.SingleBar({
    format: 'Instance: ' + colors.blue('{instanceName}') + ' |' + colors.cyan('{bar}') + '| {percentage}% || {value}/{total} Instances',
  }, cliProgress.Presets.shades_classic);

  instancesBar.start(answers.selectedInstances.length, 0);
  for (const instanceName of answers.selectedInstances) {
    instancesBar.update({ instanceName });

    const instanceBars = new cliProgress.MultiBar({
      format: '|' + colors.cyan('{bar}') + '| ' + colors.blue('{process}') + ' | {percentage}% || {value}/{total} Files',
      clearOnComplete: true,
    }, cliProgress.Presets.shades_classic);

    for (const migration of answers.saveData) {
      await migratorsFunctions[migration](instanceName, answers, instanceBars, conn, connInstance);
    }
    
    instanceBars.stop();
    instancesBar.increment();
  }
  instancesBar.stop();


  // disconnect from mongodb
  console.log('\n\n🌱 Disconnecting from MongoDB...');
  await conn.close();
  console.log('🌱 Disconnected from MongoDB!\n\n');

  console.log('🌱 Migration completed!\n\n');
  process.exit(0);
};