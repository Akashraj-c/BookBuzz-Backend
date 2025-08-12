const users = require('../model/userModal')
const jwt = require('jsonwebtoken')

exports.registerController = async (req, res) => {
    const { username, email, password } = req.body
    console.log(username, email, password);

    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(402).json('User already exist')
        }
        else {
            const newUser = new users({
                username, email, password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.loginController = async (req, res) => {
    const { email, password } = req.body
    console.log(email, password);

    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            if (existingUser.password == password) {
                const token = jwt.sign({ userMail: existingUser.email }, 'secretKey')
                res.status(200).json({ existingUser,token })
            }
            else {
                res.status(409).json('invalid username and password')
            }
        } else {
            res.status(403).json('Invalid username and password')
        }
    } catch (error) {
        res.status(500).json(error)
    }

}