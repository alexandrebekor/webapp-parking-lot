const express = require('express')
const router = express.Router()
const ParkingController = require('../controllers/parking')

router.get('/', ParkingController.home)
router.get('/add', ParkingController.create)
router.post('/add', ParkingController.store)

module.exports = router