const mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);
const Schema = mongoose.Schema;

const RideSchema = new Schema(
	{
		title: {
			type: String,
			required: [true, 'Title is required'],
			minLength: [3, 'Title has to be longer then 3 characters'],
			maxLength: [25, "Title can't be longer then 25 characters"],
			trim: true,
			lowercase: true
		},
		description: {
			type: String,
			minLength: [3, 'Description has to be longer then 3 characters'],
			maxLength: [250, "Description can't be longer then 250 characters"],
			trim: true
		},
		distance: {
			type: Float,
			min: [1, "Distance has to be more then 1"],
			required: [true, 'Distance in kilometers is required']
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Ride', RideSchema);
