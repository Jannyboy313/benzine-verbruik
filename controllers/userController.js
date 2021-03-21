const User = require('../models/user.js');
const hasher = require('../helper/hasher.js');
const auth = require('../auth.js');

exports.login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.find({email: email})
    .then( user => {
        const isEqual = hasher.compareHash(password, user.password);

        if (isEqual) {
            const [accesstoken, refreshToken] = auth.createTokens(user);
            res.cookie('access-token', accesstoken, { maxAge: 60 * 60 * 24 * 7 * 1000 , httpOnly: true});
            res.cookie('refresh-token', refreshToken, { maxAge: 60 * 60 * 24 * 7 * 1000, httpOnly: true});
            res.status(200).json(user);
        } else {
            return res.status(401).json({ message: 'Password incorrect' })
        }
    })
    .catch(err => {
        return res.status(500).json({ message: err })
    })
}

// Creating a new user and giving tokens for authentication
exports.register = async (req, res) => {
    const user = new User(req.body);
    user.password = hasher.getHash(user.password);

    user.save()
    .then(result => {
        const [accesstoken, refreshToken] = auth.createTokens(user);
        res.cookie('access-token', accesstoken, { maxAge: 60 * 60 * 24 * 7 * 1000 , httpOnly: true});
        res.cookie('refresh-token', refreshToken, { maxAge: 60 * 60 * 24 * 7 * 1000, httpOnly: true});
        res.status(201).send(result);
    })
    .catch(err => {
        const status = err.statusCode || 500;
        res.status(status).json({message: err})
    })

}

