const express = require('express')
var path = require('path')
require('dotenv').config({ path: './.env' })

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
require('./startup/config')()
require('./startup/extensions')(app)
app.use(express.static(path.join(__dirname, 'public')))
require('./startup/routes')(app)
require('./startup/database')()

module.exports = app
