const User = require('../models/user.js')

exports.postUser = (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(result => {
            console.log("This works");
            console.log(result);
        })
        .catch(err => {
            console.log("This doesn't work")
            console.log(err)
        })
    res.end();
}