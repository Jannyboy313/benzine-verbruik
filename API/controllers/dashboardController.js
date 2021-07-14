const Ride = require('../models/ride.js');
const Fuel = require('../models/fuel.js');
const User = require('../models/user.js');
const mongoose = require('mongoose');
const Types = mongoose.Types;

exports.getDashboardData = async (req, res) => {
	const fuelCosts = await getFuelCosts(res.locals.user._id);
	console.log(fuelCosts);
    const distance = await getDistance(res.locals.user._id);
    console.log(distance[0].Distance);
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
                Prices : {
                    $sum: '$price'
                }
			}
		}
	]);
};

getDistance = (id) => {
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
}
