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

exports.getRides = (req, res) => {
    Ride.find()
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        const status = err.statusCode || 500;
        res.status(status).json({message: err})
    });
}

exports.getRide = (req, res) => {
    const id = req.params.id;
    Ride.findById(id)
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        const status = err.statusCode || 500;
        res.status(status).json({message: err})
    });
}

exports.putRide = (req, res) => {
    const id = req.params.id;
    const ride = new Ride(req.body);
    Ride.updateOne({ _id: id }, {
        title: ride.title,
        description: ride.description,
        distance: ride.distance,
     })
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        const status = err.statusCode || 500;
        res.status(status).json({message: err})
    });
}

exports.deleteRide = (req, res) => {
    const id = req.params.id;
    Ride.deleteOne({_id: id})
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        const status = err.statusCode || 500;
        res.status(status).json({message: err})
    });
}