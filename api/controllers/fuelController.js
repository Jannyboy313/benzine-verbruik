const Fuel = require('../models/fuel.js');

exports.postFuel = (req, res) => {
	const fuel = createFuel(req.body);
	fuel.save()
		.then(result => {
			res.status(201).send(result);
		})
		.catch(err => {
			const status = err.statusCode || 500;
			res.status(status).json({ message: err });
		});
};

exports.getFuels = (req, res) => {
	let { page } = req.query;

	if (!page) page = 0;

	const limit = 5;
	const skip = page * limit;

	Fuel.find({ user: res.locals.user._id })
		.sort({ updatedAt: -1 })
		.limit(limit)
		.skip(skip)
		.then(result => {
			res.status(200).send(result);
		})
		.catch(err => {
			const status = err.statusCode || 500;
			res.status(status).json({ message: err });
		});
};

exports.getFuel = (req, res) => {
	const id = req.params.id;
	Fuel.findById(id)
		.then(result => {
			res.status(200).send(result);
		})
		.catch(err => {
			const status = err.statusCode || 500;
			res.status(status).json({ message: err });
		});
};

exports.putFuel = (req, res) => {
	const id = req.params.id;
	const fuel = createFuel(req.body);
	Fuel.findOneAndUpdate(
		{ _id: id },
		{
			litre: fuel.litre,
			price: fuel.price,
			gas_station: fuel.price,
			location: fuel.location
		},
		{ new: true }
	)
		.then(result => {
			res.status(200).send(result);
		})
		.catch(err => {
			const status = err.statusCode || 500;
			res.status(status).json({ message: err });
		});
};

exports.deleteFuel = (req, res) => {
	const id = req.params.id;
	Fuel.deleteOne({ _id: id })
		.then(result => {
			res.status(200).send(result);
		})
		.catch(err => {
			const status = err.statusCode || 500;
			res.status(status).json({ message: err });
		});
};

createFuel = body => {
	body.gas_station = body.gas_station.trim();
	body.location = body.location.trim();
	body.gas_station =
		body.gas_station.charAt(0).toUpperCase() + body.gas_station.slice(1);
	body.location =
		body.location.charAt(0).toUpperCase() + body.location.slice(1);
	return new Fuel(body);
};
