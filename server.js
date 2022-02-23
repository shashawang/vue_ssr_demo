const path = require('path')
const express = require('express')
const fs = require('fs')
const { renderToString } = require('@vue/server-renderer')
const manifest = require('./dist/server/ssr-manifest.json')
const appPath = path.join(__dirname, './dist', 'server', manifest['app.js'])
const createApp = require(appPath).default

const server = express()
server.get('*', async (req, res) => {
  const { app, router } = createApp()

  await router.push(req.url)
  console.log('req.url: ', req.url);
  await router.isReady()

  const appContent = await renderToString(app)
  console.log('app: ', app);
  console.log('appContent: ', appContent);

  fs.readFile(path.join(__dirname, '/dist/client/index.html'), (err, html) => {
    if (err) {
      throw err
    }

    html = html
      .toString()
      .replace('<div id="app">', `<div id="app">${appContent}`)
    res.setHeader('Content-Type', 'text/html')
    res.send(html)
  })
})
console.log('You can navigate to http://localhost:8080')

server.listen(8080)