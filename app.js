'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// routes
const user_routes = require('./routes/user')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// base route
app.use('/api', user_routes)

module.exports = app
