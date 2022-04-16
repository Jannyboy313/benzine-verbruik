/* global createRide */
const Ride = require('../models/ride.js');
const filterHelper = require('../util/filterHelper.js');
const pageHelper = require('../util/pageHelper.js');

exports.postRide = (req, res) => {
	const ride = createRide(req.body);
	ride.save()
		.then(result => {
			res.status(201).send(result);
		})
		.catch(err => {
			const status = err.statusCode || 500;
			res.status(status).json({ message: err });
		});
};

exports.getRides = (req, res) => {
	let filter = {};
	try {
		filter = filterHelper.getFilterOptions(req.query);
	} catch (error) {
		res.status(400).json({ message: error });
		return;
	}

	const { skip, limit } = pageHelper.getPageInformation(req.query);
	Ride.find({ user: res.locals.user._id })
		.sort(filter)
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

exports.getRide = (req, res) => {
	const id = req.params.id;
	Ride.findById(id)
		.then(result => {
			res.status(200).send(result);
		})
		.catch(err => {
			const status = err.statusCode || 500;
			res.status(status).json({ message: err });
		});
};

exports.putRide = (req, res) => {
	const id = req.params.id;
	const ride = createRide(req.body);
	Ride.findOneAndUpdate(
		{ _id: id },
		{
			title: ride.title,
			description: ride.description,
			distance: ride.distance
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

exports.deleteRide = (req, res) => {
	const id = req.params.id;
	Ride.deleteOne({ _id: id })
		.then(result => {
			res.status(200).send(result);
		})
		.catch(err => {
			const status = err.statusCode || 500;
			res.status(status).json({ message: err });
		});
};

createRide = body => {
	body.title = body.title.trim();
	body.description = body.description.trim();

	body.title = body.title.charAt(0).toUpperCase() + body.title.slice(1);
	body.description =
		body.description.charAt(0).toUpperCase() + body.description.slice(1);
	return new Ride(body);
};
