const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    // 3
    prompting(){
        // 钩子函数，调用此模块时，自动调用
        // prompt 为 父类 Generator 的方法
        return this.prompt([
            {
                type: 'input',
                name: 'projectName',
                message: 'Your project name',
                default: this.appname
            },
            {
                type: 'input',
                name: 'email',
                message: 'Your email',
                default: ''
            }
        ]).then(res=>{
            // { 'projectName': 'ss', email: '32@qq.com' }
            this.promptRes = res
        })
    }
    writing(){
        // // 1
        // this.fs.write(
        //     this.destinationPath('demo.txt'),
        //     "生成的内容"
        // )
        // 2
        // // 模板文件路径
        // const tmpPath = this.templatePath('foo.txt')
        // // 输出目标路径
        // const output = this.destinationPath('foo.txt')
        // // 模板数据
        // const context = {
        //     title: 'hello, generator',
        //     success: true
        // }
        // this.fs.copyTpl(tmpPath, output, context)
        // 3
        // 模板文件路径
        const tmpPath = this.templatePath('index.html')
        // 输出目标路径
        const output = this.destinationPath('index.html')
        // 模板数据
        const context = this.promptRes
        this.fs.copyTpl(tmpPath, output, context)
    }
}