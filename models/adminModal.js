const mongoose = require("mongoose");


const adminSchema = mongoose.Schema({
    name: {type:String, require},
address: {type:String, require},
    openingtime: {type:String, require},
    closingtime: {type:String, require}, 
    password: {type:String, require},
    //cpassword: {type:String, require},
    isAdmin: {type:Boolean, require, default:true},
}, {
    timestamps: true
})

module.exports = mongoose.model('admins', adminSchema)