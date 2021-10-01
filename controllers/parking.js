const ParkingModel = require('../models/parking')

const home = async (req, res) => {
    res.render('parking/index')
}

const create = async (req, res) => {
    res.render('parking/create')
}

const store = async (req, res) => {
    const parking = await new ParkingModel(req.body)
    parking.fixed = !!req.body.fixed ?? true
    try {
        await parking.save()
        res.send(parking)
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    home,
    create,
    store
}