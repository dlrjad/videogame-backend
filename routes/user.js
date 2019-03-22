'use strict'

const express = require('express')
const UserController = require('../controllers/user')
const md_auth = require('../middlewares/authenticated')

const api = express.Router()

api.get('/test-controller', md_auth.ensureAuth, UserController.tests)
api.get('/users', md_auth.ensureAuth, UserController.getUsers)
api.get('/user/:id', md_auth.ensureAuth, UserController.getUserById)
api.post('/register', UserController.saveUser)
api.post('/login', UserController.loginUser)
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser)

module.exports = api
