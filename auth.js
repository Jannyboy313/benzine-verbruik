const jwt = require('jsonwebtoken');
const User = require('./models/user.js');
require('dotenv').config()

module.exports.createTokens = (user) => {
    const createAccessToken = jwt.sign({ user: user }, process.env.ACCESS_TOKEN, { expiresIn: "15m" });
    const createRefreshToken = jwt.sign({ user: user }, process.env.REFRESH_TOKEN, { expiresIn: "14d" });

    return Promise.all([createAccessToken, createRefreshToken]);
}

module.exports.refreshTokens = async (refreshToken) => {
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

    const [newAccessToken, newRefreshToken] = await this.createTokens(updatedUser);
    return { token: newAccessToken, refreshToken: newRefreshToken, user: user };
}