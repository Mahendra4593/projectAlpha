const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const path = require('path')
const fileUpload = require("express-fileupload");

// Configure
/*if (process.env.NODE_ENV !== "PRODUCTION"){
    require('dotenv').config({path: 'backend/config/config.env'})
}*/

const errorMiddleware = require('./middleware/error')

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(fileUpload());

// Route imports
const destination = require('./routes/productRoute')
const user = require('./routes/userRoute')

app.use('/api/v1', destination)
app.use('/api/v1', user)

app.use(express.static(path.join(__dirname, '../frontend/build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
})

// Middleware for errors
app.use(errorMiddleware)

module.exports = app;

/*app.get('/', (req, res) => {
    res.status(200).send("Home Page")
})

app.get('/api/destinations', async(req, res) => {
    const destinations = await Destination.find();
    res.status(200).json({
        success:true,
        destinations
    })
})

app.get('/api/destinations/:destinationId', async(req, res) => {
    const destination = await Destination.findById(req.params.destinationId)
    res.status(200).json(destination)
})

app.all('*', (req, res) => {
    res.status(404).send("Destination not found!")
})*/