const User = require('../models/user.js')
exports.postUser = (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(result => {
            res.status(201).send(result);
        })
        .catch(err => {
            const status = err.statusCode || 500;
            res.status(status).json({message: err})
})
}