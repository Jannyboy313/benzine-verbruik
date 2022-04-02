const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Float = require('mongoose-float').loadType(mongoose);

const FuelSchema = new Schema(
	{
		litre: {
			type: Float,
			required: [true, 'Amount of fuel in litres is required'],
			min: [1, "Litre can't be lower then 1"],
			max: [80, "Litre can't be higher then 80"]
		},
		price: {
			type: Float,
			required: [true, 'Price is required'],
			min: [1, "Price can't be lower then 1"],
			max: [200, "Price can't be higher then 200"]
		},
		gas_station: {
			type: String,
			minLength: [2, 'Gas station name has to be more then 2 characters'],
			maxLength: [15, "Gas station can't be longer then 15 characters"],
			trim: true
		},
		location: {
			type: String,
			minLength: [2, 'Location has to be more then 2 characters'],
			maxLength: [20, "Location can't be longer then 20 characters"],
			trim: true
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		}
	},
	{ timestamps: true }
);

FuelSchema.index({ updatedAt: 1 });

module.exports = mongoose.model('Fuel', FuelSchema);
