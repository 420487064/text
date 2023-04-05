const path = require('path')
const fs = require('fs')
const ls = require('log-symbols')
const chalk = require('chalk')
const ejs = require('ejs')

const write = (filePath, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, "utf8", err => {
            if(err){
                return reject(false)
            }
            resolve(true)
        })
    })
}

const rewriteJson = (answers, name) => {
    console.log(ls.info,chalk.hex('#FFA500')("Configuring the package.json for you!"))
    return new Promise(async (resolve, reject) => {
        const { plugins = [] } = answers;
        answers.plugins = plugins.map(item => item.split(" [")[0])
        const renderString = await new Promise((resolve, reject) => {
            const absolutePath = path.resolve(__dirname,`../template/${answers.template}-package.ejs`)            
            ejs.renderFile(absolutePath,
            { name, answers},{},
            (err, str) => {
                if (err) {
                    console.log(err);
                    reject(err)
                    return
                }
                resolve(str)
            }
            )
        })
        const filePath = path.resolve(process.cwd(),name, 'package.json')
        const ifWrite = await write(filePath,renderString)
        if (ifWrite) {
            console.log(ls.success, chalk.green(`package.json file content updated ${chalk.bold('successfully')}!`));
            return resolve(true);
          }
          else {
            console.log(ls.error, chalk.red(`package.json file content updated ${chalk.bold('failed')}!`));
            return reject(false);
          }
    })
}

module.exports = rewriteJson