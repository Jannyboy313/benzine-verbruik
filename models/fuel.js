const mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);
const Schema = mongoose.Schema;

// Create Schema and model

const FuelSchema = new Schema({
    liters: {
        type: Float,
        required: true
    },
    price: {
        type: Float,
        required: true
    },
    location: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Fuel', FuelSchema);