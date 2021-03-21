const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports.createTokens = async (user) => {
    const createAccessToken = jwt.sign({ user: user }, process.env.ACCESS_TOKEN, { expiresIn: "15m" });
    const createRefreshToken = jwt.sign({ user: user }, process.env.REFRESH_TOKEN, { expiresIn: "14d" });

    return Promise.all([createAccessToken, createRefreshToken]);
}