const mongoose = require('mongoose')

const EntrySchema = mongoose.Schema(
    { parking: mongoose.ObjectId },
    { timestamps: true}
)

const RoomSchema = mongoose.Schema({
    name: String,
    tower: String,
    period: String,
    flag: {
        type: Boolean,
        default: false
    },
    fixed: {
        type: Boolean,
        default: false
    },
    entry: [EntrySchema]
})

const Room = mongoose.model('Room', RoomSchema)

module.exports = Room