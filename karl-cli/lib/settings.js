const settings = {
  "init": [
    {
      "type": "input",
      "name": "version",
      "message": "Please input the version of the project: ",
      "default": "1.0.0"
    },
    {
      "type": "input",
      "name": "description",
      "message": "Please input the description of the project: ",
      "default": ""
    },
    {
      "type": "input",
      "name": "author",
      "message": "Please input the author of the project: ",
      "default": ""
    },
    {
      "type": "list",
      "name": "template",
      "message": "Please select the template you want to use: ",
      "suffix": "",
      "default": "vue3-template",
      "choices": [
        { "value": "vue3-template", "name": "vue3-template" },
        { "value": "vuepress-template", "name": "vuepress-template" }
      ]
    },
    {
      "type": "checkbox",
      "name": "plugins",
      "when": function (answer) {
        return answer.template === 'vuepress-template';
      },
      "message": "Select the plugins you want to install in your project:",
      "choices": [
        { "name": "backToTop [scroll to top quickly]" },
        { "name": "codeCopy [help you copy code conveniently]" },
        { "name": "readingProgress [Show your current reading progress at the top of the browser]" },
        { "name": "cutePet [A cute pet is in the bottom right corner of your screen]" }
      ]
    }
  ],
  "rename": [
    {
      "type": "input",
      "name": "fileName",
      "message": "❗Project name already exists! Please re-input the name of your project: ",
      "default": "Demo"
    }
  ],
  "gitHub": {
    "baseURL": "https://github.com/ox4f5da2/karl-cli-template.git",
    "branch": ["vue", "vuepress"]
  }
}

module.exports = settings;