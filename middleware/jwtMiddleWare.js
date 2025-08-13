const jwt = require('jsonwebtoken')

const jwtMiddleWare = async (req, res, next) => {
    console.log('inside jwtmiddleware');
    const token = req.headers['authorization'].split(' ')[1]
    console.log(token);

    try {
        const jwtVerify = jwt.verify(token, 'secretKey')
        console.log(jwtVerify);
        req.payload = jwtVerify.userMail
        next()
    } catch (error) {
        res.status(500).json(`Invalid token ${error}`)
    }
}

module.exports = jwtMiddleWare