const Ride = require('../models/ride.js');
const Fuel = require('../models/fuel.js');
const User = require('../models/user.js');
const mongoose = require('mongoose');
const Types = mongoose.Types;

exports.getDashboardData = async (req, res) => {
	const fuelCosts = await getFuelCosts(res.locals.user._id);
	const distance = await getDistance(res.locals.user._id);
	const balance = getBalance(fuelCosts[0].Prices, distance[0].Distance);
    res.status(200).json({ litres: fuelCosts[0].Litres, prices: fuelCosts[0].Prices, distance: distance[0].Distance, balance: balance });
};

getBalance = (price, distance) => {
	let distanceMoney = distance * 0.1;
	distanceMoney = Math.round(distanceMoney * 100) / 100;
	return price - distanceMoney;
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
