const User = require('../models/user.js')
exports.postUser = (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(result => {
            console.log("This works");
            res.send(result);
        })
        .catch(err => {
            const status = err.statusCode || 500;
            res.status(status).json({message: err})
})
}