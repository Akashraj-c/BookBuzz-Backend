const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: true
    },
    bookId: {
        type: String,
        required: true
    },
    userMail: {
        type: String,
        required: true
    },
    rating:{
        type:String,
        default:"0"
    }
})

const reviewModal = new mongoose.model('review', reviewSchema)
module.exports = reviewModal