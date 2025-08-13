const express = require('express')
const userController = require('./controllers/usersController')
const bookController = require('./controllers/bookController')
const jwtMiddleWare = require('./middleware/jwtMiddleWare')
const reviewController = require('./controllers/reviewController')

const route = express.Router()

route.post('/register', userController.registerController)

route.post('/login', userController.loginController)

route.post('/addbook', jwtMiddleWare, bookController.addBookController)

route.get('/allbooks', bookController.getAllBookController)

route.get('/abook/:id', bookController.getABookController)

route.post('/addreview/:id', jwtMiddleWare, reviewController.addReviewController)

route.get('/allreviews/:id', reviewController.getAllReviewController)

module.exports = route