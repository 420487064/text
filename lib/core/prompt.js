const { init, rename } = require('../settings')
const promptTemplate = require('../utils/prompTemplate')

const myPrompt = () => {
    return promptTemplate(init)
}

const renameFile = () => {
    return promptTemplate(rename)
}

module.exports = {
    myPrompt,
    renameFile
}