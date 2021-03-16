const mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);
const Schema = mongoose.Schema;

const FuelSchema = new Schema({
    liters: {
        type: Float,
        required: [true, 'Amount of fuel in liters is required']
    },
    price: {
        type: Float,
        required: [true, 'Price is required']
    },
    location: {
        type: String,
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: {currentTime: () => {
            let d = new Date();
            return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
}}}
)

module.exports = mongoose.model('Fuel', FuelSchema);