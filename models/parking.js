const mongoose = require('mongoose')

const ParkingSchema = mongoose.Schema({
    name: String,
    type: String,
    fixed: {
        type: Boolean,
        default: false
    }
})

const Parking = mongoose.model('Parking', ParkingSchema)

module.exports = Parking