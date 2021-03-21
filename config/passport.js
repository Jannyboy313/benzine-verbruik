require('dotenv/config')
const JwtStrategy = require('passport-jwt/Strategy');
const ExtractJwt = require('passport-jwt/ExtractJwt');

const User = require('../models/user.js');

module.exports = function(passport) {
    passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: process.env.ACCESS_TOKEN
    }, function (jwt_payload, done) {
        User.findById(jwt_payload.data.user._id, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
}