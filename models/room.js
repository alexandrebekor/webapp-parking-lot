const mongoose = require('mongoose')

const RoomSchema = mongoose.Schema({
    name: String,
    tower: String,
    period: String,
    flag: Boolean,
    parking: [mongoose.ObjectId]
})

const Room = mongoose.model('Room', RoomSchema)

module.exports = Room