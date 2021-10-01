const RoomModel = require('../models/room')

const create = async(req, res) => {
    res.render('room/create')
}

const store = async (req, res) => {
    const room = await new RoomModel(req.body)
    const entryNew = {
        parking: '6156dc7dbced920c5cbfe6a7'
    }
    room.entry = entryNew
    try {
        await room.save()
        res.send(room)
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    create,
    store
}