const mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);
const Schema = mongoose.Schema;

const RideSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        lowercase: true
    },
    description: {
        type: String,
        trim: true
    },
    distance: {
        type: Float,
        required: [true, 'Distance in kilometers is required']
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

module.exports = mongoose.model('Ride', RideSchema);