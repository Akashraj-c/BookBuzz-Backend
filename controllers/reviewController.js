const reviews = require('../model/reviewModel')

// Add Reviews
exports.addReviewController = async (req, res) => {
    const { review, rating } = req.body
    console.log(review, rating);

    const { id } = req.params
    console.log(id);

    const email = req.payload
    console.log(email);

    try {
        const existingReview = await reviews.findOne({ bookId: id, userMail: email })
        if (existingReview) {
            res.status(403).json('Review already added')
        }
        else {
            const newReview = new reviews({
                review,
                bookId: id,
                userMail: email,
                rating
            })
            await newReview.save()
            res.status(200).json(newReview)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get All Reviews
exports.getAllReviewController = async (req, res) => {
    const { id } = req.params
    console.log(id);

    try {
        const allReview = await reviews.find({ bookId: id })
        res.status(200).json(allReview)
    } catch (error) {
        res.status(500).json(error)
    }
}