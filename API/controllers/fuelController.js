const Fuel = require('../models/fuel.js')

exports.postFuel = (req, res) => {
    const fuel = new Fuel(req.body);
    fuel.save()
    .then(result => {
        res.status(201).send(result);
    })
    .catch(err => {
        const status = err.statusCode || 500;
        res.status(status).json({message: err})
    });
}

exports.getFuels = (req, res) => {
    Fuel.find({ user: res.locals.user._id })
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        const status = err.statusCode || 500;
        res.status(status).json({message: err})
    });
}

exports.getFuel = (req, res) => {
    const id = req.params.id;
    Fuel.findById(id)
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        const status = err.statusCode || 500;
        res.status(status).json({message: err})
    });
}

exports.putFuel = (req, res) => {
    const id = req.params.id;
    const fuel = new Fuel(req.body);
    Fuel.updateOne({ _id: id }, {
        liter: fuel.liter,
        price: fuel.price,
        location: fuel.location,
     })
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        const status = err.statusCode || 500;
        res.status(status).json({message: err})
    });
}

exports.deleteFuel = (req, res) => {
    const id = req.params.id;
    Fuel.deleteOne({_id: id})
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        const status = err.statusCode || 500;
        res.status(status).json({message: err})
    });
}