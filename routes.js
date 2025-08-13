const express = require('express')
const userController = require('./controllers/usersController')
const bookController = require('./controllers/bookController')
const jwtMiddleWare = require('./middleware/jwtMiddleWare')

const route = express.Router()

route.post('/register', userController.registerController)

route.post('/login', userController.loginController)

route.post('/addbook', jwtMiddleWare, bookController.addBookController)

route.get('/allbooks', bookController.getAllBookController)

route.get('/abook/:id',bookController.getABookController)

module.exports = route