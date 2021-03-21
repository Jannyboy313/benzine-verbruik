const jwt = require("jsonwebtoken");
const auth = require("../auth.js");
const User = require('../models/user.js')

module.exports = async (req, res, next) => {
    let refreshToken = req.cookies['refresh-token'];

    if (!accesstoken) {
        return res.status(401).json({ message: 'Access token is missing' })
    }

    jwt.verify(req.cookies['access-token'], process.env.ACCESS_TOKEN_SECRET, (err, authorizedData) => {
        if(err) {
            res.status(403).json({ message: 'Token is invalid'});
        } else {
            res.locals.user = authorizedData.user
            next();
        }
    })
}