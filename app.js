const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'example')));

app.listen(3000, () => {
    console.log('server is run at http://localhost:3000')
})