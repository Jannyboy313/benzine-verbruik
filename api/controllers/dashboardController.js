const Ride = require('../models/ride.js');
const Fuel = require('../models/fuel.js');
const User = require('../models/user.js');
const mongoose = require('mongoose');
const Types = mongoose.Types;

exports.getDashboardData = async (req, res) => {
	try {
		let balance = null;
		const fuelCosts = await getFuelCosts(res.locals.user._id);
		const distance = await getDistance(res.locals.user._id);

		if (fuelCosts.length > 0 && distance.length > 0)
			balance = getBalance(fuelCosts[0].Prices, distance[0].Distance);

		return res.status(200).json(getCombined(fuelCosts, distance, balance));
	} catch (err) {
		res.status(500).json({ message: 'Something went wrong' });
	}
};

getBalance = (price, distance) => {
	let distanceMoney = distance * 0.1;
	let balance = price - distanceMoney;
	return Math.round(balance * 100) / 100;
};

getFuelCosts = id => {
	return Fuel.aggregate([
		{
			$lookup: {
				from: User.collection.name,
				localField: 'user',
				foreignField: '_id',
				as: 'user'
			}
		},
		{ $unwind: '$user' },
		{ $match: { 'user._id': Types.ObjectId(id) } },
		{
			$group: {
				_id: null,
				Litres: {
					$sum: '$litre'
				},
				Prices: {
					$sum: '$price'
				}
			}
		}
	]);
};

getDistance = id => {
	return Ride.aggregate([
		{
			$lookup: {
				from: User.collection.name,
				localField: 'user',
				foreignField: '_id',
				as: 'user'
			}
		},
		{ $unwind: '$user' },
		{ $match: { 'user._id': Types.ObjectId(id) } },
		{
			$group: {
				_id: null,
				Distance: {
					$sum: '$distance'
				}
			}
		}
	]);
};

getCombined = (fuelCosts, distance, balance) => {
	let litres = null;
	let prices = null;
	let distances = null;
	if (fuelCosts.length > 0) {
		(litres = fuelCosts[0].Litres), (prices = fuelCosts[0].Prices);
	}
	if (distance.length > 0) {
		distances = distance[0].Distance;
	}
	return {
		litres: litres,
		prices: prices,
		distance: distances,
		balance: balance
	};
};
