const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    writing(){
        // 1
        // this.fs.write(
        //     this.destinationPath('demo.txt'),
        //     "生成的内容"
        // )
        // 2
        // 模板文件路径
        const tmpPath = this.templatePath('foo.txt')
        // 输出目标路径
        const output = this.destinationPath('foo.txt')
        // 模板数据
        const context = {
            title: 'hello, generator',
            success: true
        }
        this.fs.copyTpl(tmpPath, output, context)
    }
}