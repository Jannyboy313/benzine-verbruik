const jwt = require("jsonwebtoken");
const auth = require("../auth.js");

module.exports = async (req, res, next) => {
    if (!accesstoken) {
        return res.status(401).json({ message: 'Access token is missing' })
    }

    jwt.verify(req.cookies['access-token'], process.env.ACCESS_TOKEN_SECRET, (err, authorizedData) => {
        if(err) {
            const newTokens = await auth.refreshTokens(req.cookies['refresh-token']);
            res.cookie('token', newTokens.accesstoken, { maxAge: 60 * 60 * 1000 , httpOnly: true});
        } else {
            res.locals.user = authorizedData.user
            next();
        }
    })
}