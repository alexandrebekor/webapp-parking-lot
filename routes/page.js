const express = require('express')
const router = express.Router()
const PageController = require('../controllers/page')

router.get('/', PageController.home)
router.get('/sortear', PageController.prize)

module.exports = router