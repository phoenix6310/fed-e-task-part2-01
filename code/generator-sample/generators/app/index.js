const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'customTitle',
                message: 'custom title',
                default: 'hello'
            }
        ]).then(answers => {
            this.answers = answers
        })
    }
    writing() {
        // this.fs.write(
        //     this.destinationPath('demo.txt'),
        //     Math.random().toString()
        // )
        // // 模板路径
        // const tempPath = this.templatePath('temp1.html')
        // // 目标文件路径
        // const outPath = this.destinationPath('foo1.html')
        // // 数据
        // // const context = {
        // //     title: '标题',
        // //     text:'hello world'
        // // }
        // // 接受用户输入
        // const context = this.answers
        // this.fs.copyTpl(tempPath, outPath, context)

        // 这里应该包含项目中的所有文件
        const tempPaths = [
            './vue-temp/hello-world/public/index.html',
            './vue-temp/hello-world/package.json',
            './vue-temp/hello-world/README.md'
        ]
        tempPaths.forEach(tempPath=>{
            this.fs.copyTpl(this.templatePath(tempPath), this.destinationPath(tempPath), this.answers)
        })
    }
}