const fs = require('fs')
const glob = require("glob")

glob("src/example/*.html",function (err, files) {
    if (err) {
        throw err
    }

    const entryTemplate = fs.readFileSync('src/tpl/entry.html.tpl', 'utf-8')
    
    const list = [
        '<ul>\n',
        ...files.map(file => {
            return `<li><a href="${file.replace('src', '')}">${file.replace('src/example/', '')}</a></li>\n`
        }),
        '</ul>\n'
    ]

    const content = entryTemplate.replace('{{content}}', list.join(''))
    fs.writeFileSync('src/index.html', content);
})
