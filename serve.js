const express = require('express')
const routesProductos = require('../routes/productos.routes')

const app = express()
const port = 3000
app.use(express.json())
//app.use(routesProductos)
app.use(require('../routes/productos.routes'))

app.set('port', process.env.PORT || port)

module.exports = app;