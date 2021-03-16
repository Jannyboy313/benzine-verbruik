const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and model

const FuelSchema = new Schema({
    liters: {
        type: Number,

        required: true

    },
    price: {
        type: Number
    },
    location: {
        type: String
    },
    date: {
        type: Date
    }
})

module.exports = mongoose.model('Fuel', FuelSchema);