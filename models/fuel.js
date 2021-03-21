const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Float = require('mongoose-float').loadType(mongoose);

const FuelSchema = new Schema({
    liter: {
        type: Float,
        required: [true, 'Amount of fuel in liters is required']
    },
    price: {
        type: Float,
        required: [true, 'Price is required']
    },
    location: {
        type: String,
        maxLength: [25, "Location can't be longer then 25 characters"],
        trim: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('Fuel', FuelSchema);