const { gitHub: { branch } } = require('../settings')

const defineBranch = templateName => {
    switch (templateName) {
        case 'vue3-template':
            return branch[0]
        case 'vuepress-template':
            return branch[1]
    }
}

module.exports = defineBranch