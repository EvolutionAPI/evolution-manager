const build = require('../utils/build.js');
const fs = require('fs-extra');
const path = require('path');
const verifyEvolutionInstallation = require('../utils/verifyEvolutionInstallation.js');

module.exports = async () => {
  const isEvolutionInstalled = verifyEvolutionInstallation();
  if (!isEvolutionInstalled) return;

  await build({ VITE_BASE_URL: '/manager/' });

  console.time('📦  Copy dist folder to /Extras/evolution-manager');

  const distFolder = path.join(__dirname, '..', '..', 'dist');
  const extrasFolder = path.join(process.cwd(), 'Extras');
  const evolutionManagerFolder = path.join(extrasFolder, 'evolution-manager');

  if (!fs.existsSync(evolutionManagerFolder)) fs.mkdirSync(evolutionManagerFolder);
  fs.copySync(distFolder, evolutionManagerFolder);

  console.timeEnd('📦  Copy dist folder to /Extras/evolution-manager');


  // Apply diff git patch
  console.time('📥  Apply diff git patch');
  const patchPath = path.join(__dirname, './view.router.ts.patch');
  const apiFile = path.join(process.cwd(), 'src', 'whatsapp', 'routers', 'view.router.ts');
  // copy/replace file with patch
  fs.copySync(patchPath, apiFile);
  console.timeEnd('📥  Apply diff git patch');


  console.log('\n🎉 Evolution-Api Manager installed successfully! 🎉');
  console.log('🔁 Restart your Evolution-Api server to apply changes  🔁')
};