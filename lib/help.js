module.exports = () => {
  // Welcome message
  console.log(`👋 Welcome to evolution-manager CLI!`);

  // Help message
  console.log(`📋 Available commands:`);

  // Server commands
  console.log(`\nServer:`);
  console.log(`   help`);
  console.log(`   server`);
  console.log(`    - start [--port=9615]`);
  console.log(`    - build`);

  // PM2 commands
  console.log(`\nPM2:`);
  console.log(`   pm2`);
  console.log(`    - setup`);
  console.log(`    - start`);
  console.log(`    - stop`);
  console.log(`    - restart`);
  console.log(`    - delete`);

  // API commands
  console.log(`\nAPI:`);
  console.log(`   api`);
  console.log(`    - setup (Install the manager inside the Evolution Manager in path /manager)`);

  // Spacing
  console.log(`\n`);
};
