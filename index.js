// Server
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Routes
const PageRoutes = require('./routes/page')
app.get('/', PageRoutes)

app.listen(port, () => { console.log('Running server ' + port) })