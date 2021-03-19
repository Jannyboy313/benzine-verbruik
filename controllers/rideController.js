const Ride = require('../models/ride.js')

exports.postRide = (req, res) => {
    const ride = new Ride(req.body);
    ride.save()
        .then(result => {
            res.status(201).send(result);
        })
        .catch(err => {
            const status = err.statusCode || 500;
            res.status(status).json({message: err})
        });
}