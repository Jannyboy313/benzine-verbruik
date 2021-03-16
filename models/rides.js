const mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);
const Schema = mongoose.Schema;

const RideSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        maxLength: [25, "Title can't be longer then 25 characters"],
        trim: true,
        lowercase: true
    },
    description: {
        type: String,
        maxLength: [250, "Description can't be longer then 250 characters"],
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