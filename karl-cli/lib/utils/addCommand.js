const program = require('commander');

const addProgram = (settings, callback) => {
  program
    .command(settings.command)
    .description(settings.description)
    .action(callback);
}

module.exports = addProgram;