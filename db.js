const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://prajaktaumale:umale123@cluster0.kclg3kv.mongodb.net/food-order-data'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log('MongoDb Connection Successfull ')
})

db.on('error', ()=>{
    console.log('connection failed')
})

module.exports = mongoose