require('dotenv').config()
const express = require('express')
const cors = require('cors')
const route  = require('./routes')
require('./dbConnection')

const bookBuzzServer = express()

bookBuzzServer.use(express.json())
bookBuzzServer.use(cors())
bookBuzzServer.use(route)

const PORT = 4000 || process.env.PORT

bookBuzzServer.listen(PORT, () => {
    console.log(`server running successfully at ${PORT}`);
})