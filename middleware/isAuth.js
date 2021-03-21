const jwt = require("jsonwebtoken");
const auth = require("../auth");
const User = require('../models/User')

module.exports = async (req, res, next) => {
    let token;
    let refreshToken;
    token = req.cookies.token;
    refreshToken = req.cookies['refresh-token'];

    if (!token) {
        return res.status(401).json({ message: 'TOKEN_MISSING' })
    }

    try {
        const { user: { id } } = jwt.verify(token, process.env.SECRET);
        res.locals.user = await User.findById(id);
    } catch (err) {
        const newTokens = await auth.refreshTokens(token, refreshToken, process.env.SECRET, process.env.SECRET_2);
        if (newTokens.token && newTokens.refreshToken) {
            res.cookie('token', newTokens.token, { maxAge: 60 * 60 * 1000 , httpOnly: true});
            res.cookie('refresh-token', newTokens.refreshToken, { maxAge: 60 * 60 * 24 * 7 * 1000 , httpOnly: true});
        } else {
            return res.status(401).json({ message: 'REFRESH_TOKEN_EXPIRED' });
        }
        res.locals.user = newTokens.user;
    }
    next();
}

// For routes that can also be accessed by unauthorised users
module.exports.allowTokenMissing = async (req, res, next) => {
    let token;
    let refreshToken;
    token = req.cookies.token;
    refreshToken = req.cookies['refresh-token'];

    if (!token) {
        res.locals.user = null;
        return next();
    }

    try {
        const { user: { id } } = jwt.verify(token, process.env.SECRET);
        res.locals.user = await User.findById(id);
    } catch (err) {
        const newTokens = await auth.refreshTokens(token, refreshToken, process.env.SECRET, process.env.SECRET_2);
        if (newTokens.token && newTokens.refreshToken) {
            res.cookie('token', newTokens.token, { maxAge: 60 * 60 * 1000 , httpOnly: true});
            res.cookie('refresh-token', newTokens.refreshToken, { maxAge: 60 * 60 * 24 * 7 * 1000 , httpOnly: true});
        } else {
            return res.status(401).json({ message: 'REFRESH_TOKEN_EXPIRED' });
        }
        res.locals.user = newTokens.user;
    }
    next();
}