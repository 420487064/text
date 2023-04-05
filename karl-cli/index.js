#! /usr/bin/env node
// 系统库

// 第三方库
const program = require('commander');

// 自己的库
const addOptions = require('./lib/core/options');
const createCommand = require('./lib/core/create');

// 用到的变量
const { version } = require('./package.json'); // 导入json文件自动获取版本号
const options = program.opts();

// 主程序 
program.version(version);   // 显示版本号
addOptions(); // 添加自定义选项处理集合
createCommand(); // 创建其他指令

program.parse(process.argv); // 解析指令