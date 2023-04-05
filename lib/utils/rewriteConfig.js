const path = require('path');
const fs = require('fs');
const ls = require('log-symbols');
const chalk = require('chalk');
const ejs = require('ejs');


const write = (filePath, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, 'utf8',err => {
            if (err) {
                reject(false)
            } else {
                resolve(true)
            }
        })
    })
}

// const rewriteConfig = (answers, name) => {
//     console.log(ls.info, chalk.hex('#FFA500')("Configuring the config.json in vuepress for you!"));
//     return new Promise(async (resolve, reject) => {
//         const { plugins = [] } = answers
//         answers.plugins = plugins.map(item => item.split("[")[0])
//         const renderString = await new Promise((resolve, reject) => {
//             const absolutePath = path.resolve(__dirname,`../template/${answers.template}-config.ejs`)
//             ejs.renderFile(absolutePath,
//                 { name, answers },{},
//                 (err, str) => {
//                     if (err) {
//                         console.log(err)
//                         reject(err)
//                         return
//                     }
//                     resolve(str)
//                 }
//             )
//         }) 
//         const filePath = path.resolve(process.cwd(), name,'docs/.vuepress/config.js')
//         const ifWrite = await write(filePath, renderString)
//         if(ifWrite){
//             console.log("\n",ls.success,chalk.green(`config.js file content updated ${chalk.bold('successfully')}!`));
//             return resolve(true)
//         }else {
//             console.log("\n\n",ls.error,chalk.red(`config.js file content updated ${chalk.bold('failed')}!`));
//             return reject(false)
//         }

//     })
// }


const rewriteConfig = (answers, name) => {
   console.log(ls.info, chalk.hex('#FFA500')("Configuring the config.json in vuepress for you!"));
   return new Promise(async(resolve, reject) => {
        const { plugins = [] } = answers
        answers.plugins = plugins.map(item => item.splice('[')[0])
        const renderString = await new Promise((resolve, reject) => {
            const absolutePath = path.resolve(__dirname,`../template/${answers.template}-config.ejs`)
            console.log(`aboslutePath:`,absolutePath);
            ejs.renderFile(absolutePath,{ name, answers},{},
                (err, str) => {
                    if(err){
                        console.log(err);
                        reject(err)
                        return;
                    }
                    resolve(str)
                })
        })
        const filePath = path.resolve(process.cwd(),name,'docs/.vuepress/config.js')
        console.log('filepath:',filePath);
        console.log(process.cwd());
        const ifWrite = await write(filePath,renderString)
        if (ifWrite) {
            console.log("\n",ls.success,chalk.green(`config.js file content updated ${chalk.bold('successfully')}!`));
            return resolve(true)
        } else {
            console.log("\n\n",ls.error, chalk.red(`config.js file content updated ${chalk.bold('failed')}!`));
            return reject(false)
        }    
    })
}

module.exports = rewriteConfig