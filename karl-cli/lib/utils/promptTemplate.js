const inquirer = require('inquirer')

const promptTemplate = question => {
  return new Promise((resolve, reject) => {
      inquirer
          .prompt(question)
          .then(answers => resolve(answers))
          .catch(error => reject(error));
  })
}

module.exports = promptTemplate;