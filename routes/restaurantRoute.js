const express = require("express")
const router = express.Router();
const Restaurant = require('../models/restaurnatModel')


router.get("/getallrestaurants", async(req,res)=>{

    try {
        const restaurants = await Restaurant.find({})
        res.send(restaurants)
    } catch (error) {
        return res.status(400).json({message:error});
    }
});

router.post("/addRestaurant", async(req,res)=>{
    const restaurant = req.body.restaurant
    try {
        const newrestaurant = new Restaurant({
            name: restaurant.name,
            address : restaurant.address,
            openingtime: restaurant.openingtime,
            closingtime: restaurant.closingtime
        })
        await newrestaurant.save()
        res.send('new restaurant added successfully')
    } catch (error) {
        return res.status(400).json({message:error})
        
    }
})

router.post("/deleterestaurant", async(req,res)=>{
    const restaurantid = req.body.restaurantid
    try {
        await Restaurant.findOneAndDelete({_id:restaurantid})
        res.send('restaurant deleted successfully')
    } catch (error) {
        return res.status(400).json({message:error})
    }
})

router.post("/getrestaurantbyid", async(req,res)=>{
    const restaurantid = req.body.restaurantid
    try {
        const restaurant = await Restaurant.findOne({_id: restaurantid})
        res.send(restaurant)
    } catch (error) {
        return res.status(400).json({message:'something went wrong'+error})
    }
})

router.post("/editrestaurant", async (req,res)=>{
    const editedrestaurant = req.body.editedrestaurant
    try {
        const restaurant =await Restaurant.findOne({_id : editedrestaurant._id})
        restaurant.name = editedrestaurant.name,
        restaurant.address = editedrestaurant.address,
        restaurant.openingtime = editedrestaurant.openingtime,
        restaurant.closingtime = editedrestaurant.closingtime
        await restaurant.save()
        res.send('restaurant edited successfully')
    } catch (error) {
        return res.status(400).json({message:'something went wrong'+error})
    }
})




module.exports = router;