const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
const ls = require('log-symbols')
const chalk = require('chalk')

const { gitHub: { baseURL } } = require('../settings')
const defineBranch = require('../utils/branch')

const downloadTemplate = async (template, project, spinner) => {
    // 获取仓库分支的名字
    const branch = defineBranch(template)
    // 克隆GitHub仓库模板
    const res = await download(`direct:${baseURL}#${branch}`, project);
    return new Promise((resolve, reject) => {
        spinner.stop()
        if (res) {
            console.log("\n",ls.error,chalk.red("Failed to get resources from the remote end!"));
            reject({ status: 'fail', data: res})
        }
        else {
            console.log(ls.success,chalk.green("The project template has been successfully pulled from the GitHub!"));
            resolve({ status: 'success', data: project})            
        }
    })
}

module.exports = downloadTemplate