const ora = require('ora')

const genFrames = require('./genFrames')

const progressAimation = (fix, normal, active, len) => {
    return new Promise(resolve => {
        const spinner = ora({
            text: 'Pull resources, please wait patiently... \n',
            spinner: {
                interval: 200,
                frames: genFrames(fix, normal, active, len)
            }
        }).start();
        resolve(spinner)
    })
}

module.exports = progressAimation