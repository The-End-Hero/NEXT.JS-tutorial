const express = require('express')
const compression = require('compression')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev:dev})
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
    server.use(compression())

  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })
    server.get('/T/:id', (req, res) => {
        const actualPage = '/h5article'
        const queryParams = { id: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})