const mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);
const Schema = mongoose.Schema;

const RidesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    distance: {
        type: Float,
        required: true
    }
}, { timestamps: {currentTime: () => {
            let d = new Date();
            return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
}}}
)

module.exports = mongoose.model('Rides', RidesSchema);