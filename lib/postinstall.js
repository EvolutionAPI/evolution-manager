const build = require('./utils/build');

async function main() {
  await build({ VITE_BASE_URL: '/manager/' });
}

main();