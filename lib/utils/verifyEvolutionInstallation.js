const fs = require('fs');
const path = require('path');

module.exports = (version = "1.5.0") => {
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
  console.log(`👍 Evolution-Api ${packageJson.version} installation found`);

  return {
    ...packageJson,
  }
}
