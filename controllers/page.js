const RoomModel = require('../models/room')
const ParkingModel = require('../models/parking')

const home = async (req, res) => {
    res.render('index')
}

const prize = async (req, res) => {
    const parking = await ParkingModel.find({ fixed: false })
    const parkingTotal = parking.reduce(acc => acc + 1, 0)

    const parkingExclusive = parking.filter(parking => parking.type === "1")
    const parkingExclusiveTotal = parkingExclusive.reduce(acc => acc + 1, 0)

    const parkingShare = parking.filter(parking => parking.type === "2")
    const parkingShareTotal = parkingShare.reduce(acc => acc + 1, 0)

    const rooms = await RoomModel.find({ fixed: false })
    const roomsTotal = rooms.reduce(acc => acc + 1, 0)

    // Vagas Insuficientes
    const parkingInsuficient = roomsTotal > parkingTotal

    if (!parkingInsuficient) {
        const roomsPerPeriod = Math.trunc(roomsTotal / 3)
        const roomsFlagtotal = roomsTotal - (roomsPerPeriod * 3)

        const roomsFlag = rooms.filter(room => room.period == "0" && room.flag == false)
        parkingShare

        const parkingRandom = Math.floor(Math.random() * parkingShareTotal)



        res.send(`Serão ${roomsPerPeriod} apartamentos por ciclo com ${roomsFlagtotal} fixos`)
    } else {
        res.send(`Vagas insuficientes. Temos ${roomsTotal} apartamentos para ${parkingTotal} vagas cadastradas.`)
    }
}

module.exports = {
    home,
    prize
}