// Server
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Database
const mongoose = require('mongoose')
const database = "mongodb://localhost/webapp-parkinglot"
mongoose.Promise = global.Promise

// Template
const path = require('path')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Routing
const PageRoutes = require('./routes/page')
app.use('/', PageRoutes)

const RoomRoutes = require('./routes/room')
app.use('/apartamentos', RoomRoutes)

const ParkingRoutes = require('./routes/parking')
app.use('/garagem', ParkingRoutes)

mongoose
    .connect(database)
    .then(() => {
        app.listen(port, () => { console.log('Running server ' + port) })
    })
    .catch(e => console.log(e))