const express = require('express') // package to manage and do the api magic
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan') // middleware to see requests
const dotenv = require('dotenv') // package for using environment variables
dotenv.config()

//Database Setup
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB Connected!'))

mongoose.connection.on('error', err => {
    console.log(`DB Connection Error: ${err.message}`)
})
//route appending
const postRoutes = require('./routes/post')

//middleware
app.use(morgan("dev")) //Morgan is to see what requests are made to the server, very cool Middleware.

app.use("/", postRoutes)

const port = process.env.PORT || 8080;
app.listen(8080 , () => { console.log(`Api Running on Port ${port}` )})