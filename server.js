// Required Dependencies 
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const playersRouter = require('./routes/players')

// Express App 
const PORT = 3000
const app = express()
app.use(express.json())

// Middleware Pipeline
app.use(cors())
app.use(logger('dev'))

//Routes
app.use('/players', playersRouter)


// Listening POrt
app.listen(PORT, function() {
    console.log(`Server is listneing on ${PORT}`)
})