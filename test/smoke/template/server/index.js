if (typeof window === 'undefined') {
    global.window = {}
}
const fs = require('fs')
const path = require('path')
const express = require('express')
const { renderToString } = require('react-dom/server')
const SSR = require('../dist/server-server')
const template = fs.readFileSync(path.join(__dirname, '../dist/search.html', 'utf-8'))

const server = (port) => {
    const app = express()
    app.use(express.static('dist'))
    app.get('/search', (req, res) => {
        res.status(200).send(renderMarkup(renderToString(SSR)))
    })

    app.listen(port, () => {
        console.log('server is running')
    })
};
server(process.env.PORT || 3000)
const renderMarkup = (str) => {
    return template.replace('', str)
}