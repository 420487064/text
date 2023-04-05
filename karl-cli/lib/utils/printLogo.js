const chalk = require('chalk');

const printLogo = () => {
  console.log(
    chalk.magenta(`
      ____               .__                   .__  .__ 
      |  | _______ _______|  |             ____ |  | |__|
      |  |/ /\\__  \\\\_  __ \\  |    ______ _/ ___\\|  | |  |
      |    <  / __ \\|  | \\/  |__ /_____/ \\  \\___|  |_|  |
      |__|__\\(______/__|  |____/          \\_____>____/__|
                                                 
    `)
  );
}

module.exports = printLogo;