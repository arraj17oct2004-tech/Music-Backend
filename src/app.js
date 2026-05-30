// Node-Modules
const express = require('express')
const cookieParser = require('cookie-parser')


// Local-Modules
const authRoute = require('./routes/auth.routes')
const musicRoute = require('./routes/music.routes')

const app = express()


// middlewares 
app.use(express.json())
app.use(cookieParser())



// APIs...

app.use('/api/auth',authRoute)

app.use('/api/music',musicRoute)



module.exports = app
