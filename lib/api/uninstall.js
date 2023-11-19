const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

const verifyEvolutionInstallation = require('../utils/verifyEvolutionInstallation.js');
const revertToVersion = require('../utils/revertToVersion.js');

module.exports = async () => {
  const isEvolutionInstalled = verifyEvolutionInstallation();
  if (!isEvolutionInstalled) return;

  // Verify manager instalation
  const extrasFolder = path.join(process.cwd(), 'Extras');
  const evolutionManagerIndex = path.join(extrasFolder, 'evolution-manager/index.html');
  if (!fs.existsSync(evolutionManagerIndex)) throw new Error('❌ Evolution Manager installation not found. Please install it first');


  const apiVersion = isEvolutionInstalled.version;

  // git pull force tag version
  console.log(`🔃 Reverting to Evolution-Api v${apiVersion}...`);
  await discardChanges();
  await revertToVersion(apiVersion);
  console.log(`🔃 Reverted to Evolution-Api v${apiVersion} successfully`);

  console.log('\n🔁 Please restart the process to use the reverted version\n')
};

function discardChanges() {
  return new Promise((resolve) => {
    exec(`git clean -f -d -q && git checkout .`, (err) => {
      if (err) {
        console.error(err)
        return resolve(false)
      }

      resolve(true)
    })
  })
}

