const { init, rename } = require('../settings.js');
const promptTemplate = require('../utils/promptTemplate');

const myPrompt = () => {
    return promptTemplate(init);
}

const renameFile = () => {
    return promptTemplate(rename);
}

module.exports = {
    myPrompt,
    renameFile
};