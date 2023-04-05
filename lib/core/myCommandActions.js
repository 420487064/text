const path = require('path')

const program = require('commander')
const ejs = require('ejs')

const printLogo = require('../utils/printLogo')
const { writeFile, fileExist } = require('../utils/fileProcess')
const { myPrompt } = require('./prompt')
const progressAimation = require('../utils/progress')
const rewriteJson = require('../utils/rewriteJson')
const rewriteConfig = require('../utils/rewriteConfig')
const commandSpawn = require('../utils/commandSpawn')
const finish = require('../../karl-cli/lib/utils/finish')
// const downloadTemplate = require('../../karl-cli/lib/core/download')
const downloadTemplate = require('./download')

const createProject = async project => {
    printLogo()
    const answer = await myPrompt()
    // 判断要创建的文件是否存在，并返回最终的项目名字
    const newName = await fileExist(project)
    // 展示加载动画
    const spinner = await progressAimation(undefined,"░","█",16)
    // 拉取模板
    const { data:projectName } = await downloadTemplate(answer.template,newName,spinner)
    // 重写package.json 文件
    console.log(22);
    await rewriteJson(answer, newName)
    // congif.js文件,只在vuepress模板里
    console.log(33);
    answer.template === 'vuepress-template' && await rewriteConfig(answer,newName)
    // 自动安装node_modules文件夹
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    await commandSpawn(command,['install'],{cwd: `./${project}`})
    // 打印最终的指导文字
    finish(projectName,answer.template) 
}

const addVueComponent = async component => {
    const [ name, filePath ] = [ component, program.opts().path || 'src/components'];
    const absolutPath = path.resolve(__dirname,`../template/vue-component.ejs`);
    const renderString = await new Promise((resolve, reject) => {
        ejs.renderFile(absolutPath,
            { name,lowerName: name.at(0).toLowerCase() +  name.slice(1) },{},(err, str) => {
                if(err){
                    console.log(err);
                    reject(err);
                    return;
                }
                resolve(str)
            })
    });
    writeFile(path.resolve(filePath,`${name}.vue`),renderString);
}

module.exports = {
    createProject,
    addVueComponent
}