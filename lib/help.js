module.exports = () => {
  // Welcome message
  console.log(`👋 Welcome to the evolution-manager CLI! Explore the power of managing your server and API with ease.`);

  // Help message
  console.log(`📘 Here's what you can do with evolution-manager CLI:`);

  // Server commands
  console.log(`\n🚀 Server Commands:`);
  console.log(`   help - Get help and command summaries`);
  console.log(`   server - Manage your server`);
  console.log(`    - start [--port=9615] - Start the server on a specific port`);
  console.log(`    - build - Build the server environment`);

  // PM2 commands
  console.log(`\n🔄 PM2 Management:`);
  console.log(`   pm2 - Control your PM2 processes`);
  console.log(`    - setup - Set up a PM2 process`);
  console.log(`    - start - Start a PM2 process`);
  console.log(`    - stop - Stop a PM2 process`);
  console.log(`    - restart - Restart a PM2 process`);
  console.log(`    - delete - Delete a PM2 process`);

  // API commands
  console.log(`\n🔗 API Interaction (Run these inside the Evolution API folder):`);
  console.log(`   api - Manage your Evolution API`);
  console.log(`    - setup - Install the manager at /manager in the Evolution API`);
  console.log(`    - uninstall - Uninstall the manager from the Evolution API`);
  console.log(`    - changeVersion --v=1.5.0 - Change to a specific version of the Evolution API`);

  // Documentation link and disclaimer
  console.log(`\n📚 For complete documentation, visit: https://github.com/gabrielpastori1/evolution-manager`);
  console.log(`\nDisclaimer: This evolution-manager CLI project is independent and not affiliated with the evolution-api project.`);
};
