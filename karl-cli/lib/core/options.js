const program = require('commander');

const addOptions = () => {
  // 增加自己的选项处理
  program.option("-P --path <path>", "The path of new file that you need to add!");
}

module.exports = addOptions