const books = require('../model/bookModel');

// Adding Books
exports.addBookController = async (req, res) => {
    const { title, author, description, imageurl } = req.body
    console.log(title, author, description, imageurl);

    const email = req.payload
    console.log(email);

    try {
        const existingBook = await books.findOne({ title, email })

        if (existingBook) {
            res.status(403).json('Book already added')
        }
        else {
            const newBook = new books({
                title, author, description, imageurl, userid: email
            })
            await newBook.save()
            res.status(200).json(newBook)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get All Books
exports.getAllBookController = async (req, res) => {
    const searchKey = req.query.search
    console.log(searchKey);

    try {
        const allBooks = await books.find({title:{$regex:searchKey, $options:"i"} }).sort({ _id: -1 })
        res.status(200).json(allBooks)
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get A Book Details
exports.getABookController = async (req, res) => {
    const { id } = req.params
    console.log(id);

    try {
        const bookdetails = await books.findOne({ _id: id })
        res.status(200).json(bookdetails)
    } catch (error) {
        res.status(500).json(error)
    }
}