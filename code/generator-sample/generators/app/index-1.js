const Generator = require('yeoman-generator')

module.exports = class extends Generator{
    prompting(){
        return this.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'html title',
                default: ['title1', 'title2', 'title3']
            },
            {
                type: 'input',
                name: 'text',
                message: '文本信息',
                default: 'hello world'
            }
        ]).then(answers=>{
            this.answers = answers
        })
    }
    writing(){
        // this.fs.write(
        //     this.destinationPath('demo.txt'),
        //     Math.random().toString()
        // )
        // 模板路径
        const tempPath = this.templatePath('temp1.html')
        // 目标文件路径
        const outPath = this.destinationPath('foo1.html')
        // 数据
        // const context = {
        //     title: '标题',
        //     text:'hello world'
        // }
        // 接受用户输入
        const context = this.answers
        this.fs.copyTpl(tempPath, outPath, context)
    }
}