const express = require('express')
const router = express.Router()
const RoomController = require('../controllers/room')

router.get('/add', RoomController.create)
router.post('/add', RoomController.store)

module.exports = router