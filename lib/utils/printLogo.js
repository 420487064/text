const chalk = require('chalk')

const printLogo = () => {
    console.log(
        chalk.magenta(`
         -----------
         |         |
         |         |
         |         |
         -----------
        `)
    );
}

module.exports = printLogo;