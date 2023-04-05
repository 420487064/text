# karl-cli

## 功能
**karl-cli**: 一个帮助你快速搭建和开发前端项目的CLI

> 想不起来其他名字，以这个命名吧😣~


## 如何安装与更新
**Win安装：**
```shell
npm install karl-cli -g
```
**Mac安装：**
```shell
# sudo可省略，如果安装失败就加上吧🥲
(sudo) npm install karl-cli -g 
```
**更新版本：**
```shell
# version里填写版本号
(sudo)npm install karl-cli@<version>
```
**查看npm包的信息：**
```shell
npm view karl-cli
```
**查看npm包所有的版本：**
```
npm view karl-cli versions
```
**卸载：**
```shell
npm uninstall karl-cli -g
```

## 创建项目
目前支持两个模板项目：
- **vue3-template**: vue3的项目模板
- **vuepress-template**: vuepress项目的模板

### vue项目模块
> 目前已经安装了**Ant-Design**组件库、**Axios**的安装和二次封装、常用的目录结构(可以在此基础上修改)、vue-router、vuex

### 如何创建项目

在终端输入命令：
```shell
karl create [your_project_name]
```

终端会显示如下询问内容：
```
karl create Karl-first

      ____               .__                   .__  .__
      |  | _______ _______|  |             ____ |  | |__|
      |  |/ /\__  \\_  __ \  |    ______ _/ ___\|  | |  |
      |    <  / __ \|  | \/  |__ /_____/ \  \___|  |_|  |
      |__|__\(______/__|  |____/          \_____>____/__|


? Please input the version of the project:  (你的版本号)
? Please input the description of the project:  (该项目的描述)
? Please input the author of the project:  (你的名字)
? Please select the template you want to use:  (选择一个喜欢的版本吧😊)
❯ vue3-template
  vuepress-template
```

回车后会自动拉取项目模板、安装项目依赖以及根据提供的信息更改**package.json**的对应内容

安装成功后会在终端显示如下内容：
```
✔ The node_modules has been installed successfully!

 ✔ package.json file content updated successfully!

 ✔ 📦 Successfully created project [ Karl-first ]!
 ℹ 🎉 Get started with the following commands:

 $ cd Karl-first
 $ npm run serve
```

然后只要运行命令`cd Karl-first`和`npm run serve`就能运行啦！

<Picture src="/images/common/img9.png" title="karl-cli首页" :scale="0.9" />


### vuepress项目模块
选择vuepress-template选项外，还提供了一些插件，可以让你的文档网站的使用体验变得更好，具体的选项如下：
```shell
Select the plugins you want to install in your project: (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
❯◯ backToTop [scroll to top quickly]
 ◯ codeCopy [help you copy code conveniently]
 ◯ readingProgress [Show your current reading progress at the top of the browser]
 ◯ cutePet [A cute pet is in the bottom right corner of your screen]
```

解释一下各个组件的用法：
- backToTop：当前页面到滚动条滚动到一定高度后，会在右下角显示一键回退到顶部的
- codeCopy：在代码块的右下角会出现一个复制的图标，点击一下可以快速复制全部代码
- readingProgress：随着滚动条的滚动，会在页面顶部显示出阅读的进度
- cutePet：俗称看板娘，右下角会出现一只小猫陪你一起阅读

以上插件的具体功能以及配置详情可以参见下方文档：
- [backToTop](https://v1.vuepress.vuejs.org/plugin/official/plugin-back-to-top.html)
- [codeCopy](https://github.com/znicholasbrown/vuepress-plugin-code-copy/)
- [readingProgress](https://github.com/jbts6/vuepress-plugin-reading-progress)
- [cutePet](https://vuepress-theme-reco.recoluan.com/views/plugins/kanbanniang.html)

vuepress项目模板也提供了一些Vue组件：
- **Banner**: 轮播图
- **Device**: 判断用户使用的设备是手机还是电脑
- **Example**: 视频展示
- **Icon**: 图标展示
- **Picture**: 图片展示
- **BackTop**: 一键回到顶部

## 创建Vue组件

```shell
karl addcpn [YourComponentName] # 例如：karl add NavBar
```
> 默认会存放到src/components文件夹中




```shell
karl addcpn [Your Component Name] --path src/pages/home 
karl addcpn [Your Component Name] -P src/pages/home 
```

> 也可以指定存放的具体文件夹，但是需要注意的是`--path`或者`-P`后的路径是相对路径，也就是不能以`/`开头



## 查看版本号

输入命令：
```
karl --version
karl -V
```
结果如下：
```
1.0.0
```

## 查看帮助信息
输入命令：
```
karl --help
karl -h
```
结果如下：
```shell
Usage: karl [options] [command]

Options:
  -V, --version       output the version number
  -P --path <path>    The path of new file that you need to add! For example: karl /src/components/Hello
  -h, --help          display help for command

Commands:
  create <project>    Create your own project. For example: karl create demo
  addcpn <component>  Create Vue components in the specified folder. For example: karl addcpn Hello -P(--path)
                      src/components
  help [command]      display help for command
```

## 其他功能
还提供了额外的功能：
- **加载动画**
- **终端彩色字体**
- **可爱的图标**

## 可能遇到的问题

### npm安装失败
可能主要是Mac电脑上，如果出现如下错误：
```shell
npm install karl-cli -g
npm ERR! code EACCES
npm ERR! syscall mkdir
npm ERR! path /usr/local/lib/node_modules/karl-cli
npm ERR! errno -13
npm ERR! Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/karl-cli'
npm ERR!  [Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/karl-cli'] {
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'mkdir',
npm ERR!   path: '/usr/local/lib/node_modules/karl-cli'
npm ERR! }
npm ERR!
npm ERR! The operation was rejected by your operating system.
npm ERR! It is likely you do not have the permissions to access this file as the current user
npm ERR!
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/karl/.npm/_logs/2022-07-18T11_59_14_271Z-debug.log
```
那就是权限不够，需要使用管理员权限才行，那么运行如下命令即可：
```shell
sudo npm install -g karl-cli
```

### git clone failed
如果在安装过程中出现如下报错信息：
```shell
Error: 'git clone' failed with status 128
    at ChildProcess.<anonymous> (/Users/karl/Documents/我的脚手架/Karl-cli/node_modules/git-clone/index.js:33:22)
    at ChildProcess.emit (node:events:390:28)
    at maybeClose (node:internal/child_process:1064:16)
    at Socket.<anonymous> (node:internal/child_process:450:11)
    at Socket.emit (node:events:390:28)
    at Pipe.<anonymous> (node:net:672:12)
```
其实这是因为网络问题，可能网络波动导致没有安装失败，其实再重新尝试下载即可

### command not found

[ **Mac** ] 如果出现了以下报错信息：
```shell
zsh: command not found: karl
```
应该是没用全局安装npm包，一定要加上`-g`才行，如果还不行自行百度吧🤪

[ **Win** ] 如果出现了以下报错信息：
```shell
'karl' 不是内部或外部命令，也不是可运行的程序或批处理文件
```

需要打开**系统设置**，然后在**环境变量**里添加**karl-cli**的路径即可，那么如何获取路径呢？
在终端输入命令：

```shell
npm root -g
```
应该会有如下输出：
```shell
C:\Users\xxx\...\npm\node_modules
```

最后只要把`C:\Users\xxx\...\npm\node_modules\karl-cli`t添加进`path`变量里即可，操作完成后，在终端输入`karl`，应该就会有显示😁



### spawn git ENOENT

如果出现如下报错信息：

```
events.js:292
      throw er; // Unhandled 'error' event
      ^

Error: spawn git ENOENT
    at Process.ChildProcess._handle.onexit (internal/child_process.js:267:19)
    at onErrorNT (internal/child_process.js:469:16)
    at processTicksAndRejections (internal/process/task_queues.js:84:21)
Emitted 'error' event on ChildProcess instance at:
    at Process.ChildProcess._handle.onexit (internal/child_process.js:273:12)
    at onErrorNT (internal/child_process.js:469:16)
    at processTicksAndRejections (internal/process/task_queues.js:84:21) {
  errno: 'ENOENT',
  code: 'ENOENT',
  syscall: 'spawn git',
  path: 'git',
  spawnargs: [
    'clone',
    '--',
    'https://github.com/ox4f5da2/karl-cli-template.git',
    'happy_pig'
  ]
}
```

这是由于没有安装**git**导致的，只要去官网下载安装git即可，那么[安装的教程](https://blog.csdn.net/mukes/article/details/115693833)已经给出，可以自行查看。

### git命令找不到
如果安装完后在终端输入`git`报错，那么应该是环境变量没有配置，那么打开**系统设置**，找到**环境变量**，在`path`中添加如下路径：
```
[D:\Git]
[D:\Git]\mingw64\bin
[D:\Git]\mingw64\libexec\git-core
```

> 其中[D:\Git]是在安装时自行选择要安装到的文件夹路径，比如这里选择安装在**D盘的Git**文件夹中

### vuepress找不到
在终端运行如下命令：
```shell
npm install vuepress -g
```

安装完成后，运行如下命令：
```shell
vuepress -v
```
如果可以得到以下结果就表明安装成功了：
```
vuepress/1.9.7 darwin-arm64 node-v16.11.1
```