const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.getHash = async (password) => {
    bcrypt.hash(password, saltRounds)
    .then(result => { return result })
    .catch(err => { return err });
}

// Hash is from the database
exports.compareHash = async (password, hash) => {
    bcrypt.compare(password, hash)
    .then(result => { return result })
    .catch(err => { return err })
}