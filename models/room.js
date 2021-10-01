const mongoose = require('mongoose')

const EntrySchema = mongoose.Schema({
    parking: mongoose.ObjectId,
    record: Date
})

const RoomSchema = mongoose.Schema({
    name: String,
    tower: String,
    period: String,
    flag: {
        type: Boolean,
        default: false
    },
    entry: [EntrySchema]
})

const Room = mongoose.model('Room', RoomSchema)

module.exports = Room