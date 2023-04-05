const { createProject, addVueComponent } = require('./myCommandActions');
const addProgram = require('../utils/addCommand');

const createCommand = () => {
    //创建项目指令
    addProgram({
        command:"create <project>",
        description:"Create your own project. For example: kidy create demo"
    },createProject);


    // 创建组件的.vue文件
    addProgram({
        command:"addcpn <component>",
        description:"Create Vue components in the specified folder. For example: kidy addcpn Hello -p(--path) src/components"
    },addVueComponent)
}

module.exports = createCommand