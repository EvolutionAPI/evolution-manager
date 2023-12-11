const verifyEvolutionInstallation = require('../utils/verifyEvolutionInstallation.js');
const revertToVersion = require('../utils/revertToVersion.js');

module.exports = async (argv) => {
  const { v } = argv || {}
  if (!v) throw new Error('❌ Please specify a version to revert to. Example: evolution-manager api revert --v=1.5.0')

  const isEvolutionInstalled = verifyEvolutionInstallation();
  if (!isEvolutionInstalled) return;

  console.log(`🔃 Reverting to Evolution-Api v${v}...`);
  await revertToVersion(v);
  console.log(`🔃 Reverted to Evolution-Api v${v} successfully`);

  console.log('\n🔁 Please restart the process to use the reverted version\n')
};