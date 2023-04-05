const fs = require('fs');
const path = require('path');

const { renameFile } = require('../core/prompt');

// 写入文件
const writeFile = (path, data) => {
  return fs.promises.writeFile(path, data);
}

// 检查文件夹是否存在
const checkFile = name => {
  const filePath = path.resolve(process.cwd(), name);
  return new Promise(resolve => fs.exists(filePath, res => resolve(res)));
}

const fileExist = async project => {
  let ifExist = await checkFile(project), newName = project;
  while (ifExist) {
    const { fileName } = await renameFile();
    ifExist = await checkFile(fileName);
    !ifExist && (newName = fileName);
  }
  return newName;
}

module.exports = {
  writeFile,
  fileExist
};