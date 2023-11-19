const build = require('../utils/build.js');
const fs = require('fs-extra');
const path = require('path');

module.exports = async () => {
  const isEvolutionInstalled = verifyEvolutionInstallation();
  if (!isEvolutionInstalled) return;
  console.log('👍 Evolution-Api installation found');

  await build({ VITE_BASE_URL: '/manager/' });

  // copy dist folder to evolution-api/Extras/evolution-manager
  console.time('📦  Copy dist folder to evolution-api/Extras/evolution-manager');

  const distFolder = path.join(__dirname, '..', '..', 'dist');
  const extrasFolder = path.join(process.cwd(), 'Extras');
  const evolutionManagerFolder = path.join(extrasFolder, 'evolution-manager');

  if (!fs.existsSync(evolutionManagerFolder)) fs.mkdirSync(evolutionManagerFolder);
  fs.copySync(distFolder, evolutionManagerFolder);

  console.timeEnd('📦  Copy dist folder to evolution-api/Extras/evolution-manager');


  // Apply diff git patch
  console.time('↘️  Apply diff git patch');
  const patchPath = path.join(__dirname, './view.router.ts.patch');
  const apiFile = path.join(process.cwd(), 'src', 'whatsapp', 'routers', 'view.router.ts');
  // copy/replace file with patch
  fs.copySync(patchPath, apiFile);
  console.timeEnd('↘️  Apply diff git patch');


  console.log('\n 🎉 Evolution-Api Manager installed successfully! 🎉');
  console.log('👉 Restart your Evolution-Api server to apply changes  👈')
};

function verifyEvolutionInstallation(version = "1.5.0") {
  // load package.json current context
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    console.error("🚨 package.json not found. Certify you are in the root of the Evolution-Api installation")
    return false
  }
  var packageJson = fs.readFileSync(packageJsonPath, 'utf8');
  packageJson = JSON.parse(packageJson);


  // check if evolution is installed
  if (packageJson.name !== "evolution-api") {
    console.error("🚨 This is not a Evolution-API installation. Certify you are in the root of the Evolution-Api installation")
    return false
  }

  // verify if version is same or higher
  if (version) {
    const semver = require('semver');
    if (!semver.gte(packageJson.version, version)) {
      console.error(`🚨 Evolution-Api version ${version} or higher is required. Please update your Evolution-Api installation`)
      return false
    }
  }

  return true
}