const jwt = require('jsonwebtoken');
const User = require('./models/user.js');
require('dotenv').config()

module.exports.createTokens = (user) => {
    const createdAccessToken = jwt.sign({ user: user }, process.env.ACCESS_TOKEN, { expiresIn: "15m" });
    const createdRefreshToken = jwt.sign({ user: user }, process.env.REFRESH_TOKEN, { expiresIn: "14d" });

    return Promise.all([createdAccessToken, createdRefreshToken]);
}

module.exports.refreshAccessToken = async (refreshToken) => {
    let user;
    try {
        user = jwt.decode(refreshToken);
    } catch (err) {
        return err;
    }

    const updatedUser = await User.findById(user.id);

    try {
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
    } catch (err) {
        return err;
    }

    const createdAccessToken = jwt.sign({ user: updatedUser }, process.env.ACCESS_TOKEN, { expiresIn: "15m" });
    return createdAccessToken;
}