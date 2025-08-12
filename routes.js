const express = require('express')
const userController = require('./controllers/usersController')

const route = express.Router()

route.post('/register',userController.registerController)

route.post('/login',userController.loginController)

module.exports = route