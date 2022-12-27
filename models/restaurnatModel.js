const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({

    name : {type:String, require},
    address : {type:String, require},
    openingtime : {type: String, require},
    closingtime: {type: String, require},

},
{
    timestamps:true,
})


const restaurantModel = mongoose.model('restaurants', restaurantSchema)
module.exports = restaurantModel