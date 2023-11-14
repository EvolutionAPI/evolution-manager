const { exec } = require('child_process');

module.exports = async () => {
  return new Promise((resolve, reject) => {
    exec('pm2 jlist', async (err, stdout) => {
      if (err) {
        console.log('⚙️ PM2 is not installed');
        return reject(false);
      }

      const list = JSON.parse(stdout);

      const process = list.find((process) => process.name === 'evolution-manager');
      resolve(process ? process.pm_id : false);
    });
  });

}