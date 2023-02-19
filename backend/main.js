const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes/routes')
// const cors = require('cors')
// const cookieParser = require('cookie-parser')


// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
//     res.setHeader('Access-Control-Allow-Headers', 'Content-type','Application/JSON')
//     res.setHeader('Access-Control-Allow-Credentials', true)
//     next()
// })

mongoose.connect('mongodb://127.0.0.1:27017/foodSubscription')
// app.use(cors())
// app.use(cookieParser())
app.use(express.json())

app.use(routes)
app.listen(3000)