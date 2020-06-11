const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const ejs = require('ejs')

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'project name:'
    }
])
    .then(anwsers => {
        const tmplDir = path.join(__dirname, 'templates')

        const destDir = process.cwd()

        okok(tmplDir, destDir)

        function okok(tmplDir, destDir) {
            fs.readdir(tmplDir, (err, files) => {
                if (err) throw err
                files.forEach(file => {
                    if (fs.lstatSync(path.join(tmplDir, file)).isDirectory()) {
                        if (!fs.existsSync(path.join(destDir, file))) {
                            fs.mkdirSync(path.join(destDir, file));
                        }
                        okok(path.join(tmplDir, file), path.join(destDir, file))
                        return false
                    }
                    ejs.renderFile(path.join(tmplDir, file), anwsers, (err, result) => {
                        if (err) throw err
                        fs.writeFileSync(path.join(destDir, file), result)
                    })
                })
            })
        }
    })
