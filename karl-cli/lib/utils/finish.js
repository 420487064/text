const ls = require('log-symbols');
const chalk = require('chalk');

const finish = (projectName, template) => {
  const str = template === 'vue3-template' ? 'serve' : 'dev';
  console.log("\n", ls.success, `${chalk.green('📦 Successfully created project')} ${chalk.bold(`[ ${projectName} ]`)}!\n`,
  ls.info, "🎉 Get started with the following commands:\n\n",
  `${chalk.yellow('$')} ${chalk.cyan(`cd ${projectName}`)}\n`,
  `${chalk.yellow('$')} ${chalk.cyan(`npm run ${str}`)}`);
}

module.exports = finish;