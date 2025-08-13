const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imageurl:{
        type:String,
        required:true
    }
})

const bookModal = new mongoose.model('books',bookSchema)
module.exports = bookModal