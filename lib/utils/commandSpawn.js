const { spawn } = require('child_process')
const ls = require('log-symbols')
const chalk = require('chalk')

const commandSpawn = (...args) => {
    console.log(ls.info,chalk.hex('#FFA500')('Start installing the node modules folder for you, please wait a moment patiently!\n'));
    return new Promise ((resolve,reject) => {
        const child_process = spawn(...args)
        child_process.stdout.pipe(process.stdout)
        child_process.stderr.pipe(process.stderr)
        child_process.on('close',() => {
            console.log("\n\n",ls.success,chalk.green(`The node_modules has been installed ${chalk.bold('successfully')}`))
            resolve()
        })
    })
}

module.exports = commandSpawn