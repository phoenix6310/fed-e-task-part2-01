#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const ejs = require('ejs')

inquirer.prompt([{
    type: 'input',
    name: 'title',
    message: 'html title?',
    default: '标题'
}]).then(answers => {
    console.log(answers)
    // 模板目录
    const tmpDir = path.join(__dirname, 'templates')
    // 目标目录
    const destDir = process.cwd()
    // console.log(tmpDir, destDir)
    fs.readdir(tmpDir, (err, files)=>{
        if(err) throw err
        files.forEach(file => {
            ejs.renderFile(path.join(tmpDir, file), answers, (err, result)=>{
                if(err) throw err
                // console.log(result)
                fs.writeFileSync(path.join(destDir, 'new-' +  file), result)
            })
        })
    })
})