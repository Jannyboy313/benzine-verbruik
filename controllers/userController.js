const User = require('../models/user.js')

exports.postUser = (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })
    user.save()
        .then(result => {
            console.log("This works");
            console.log(result);
        });
    res.end();
}