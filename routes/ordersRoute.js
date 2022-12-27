const express = require("express")
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')("sk_test_51MGzYMSGepRmvvayv2QMp42wH3iZX0fTXIlQuNe47BHM6fH5SUXekdNJxZn22JLz9yHjv8B625yK9y7YU92q8rar00LDtoAbPl")
const Order  = require('../models/orderModal')
router.post("/placeorder", async (req, res) => {

    const { token, subtotal, currentUser, cartItems } = req.body //the token nd subtotal is important here from this we can get details of payment and price

    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        const paymentIntent = await stripe.paymentIntents.create({
            amount: subtotal * 100,
            currency: 'INR',
            customer: customer.id,
            payment_method_types: ['card'],
            receipt_email: token.email
        }, {
            idempotencyKey: uuidv4() //to get unique for all payment
        })

        if (paymentIntent) {
            //to get the require data in order screen
            const neworder = new Order({
                name : currentUser.name,
                email: currentUser.email,
                userid: currentUser._id,
                orderItems : cartItems,
                orderAmount : subtotal,
                shippingAddress: {
                    Street : token.card.address_line1,
                    City : token.card.address_city,
                    Country : token.card.address_country,
                    Pincode : token.card.address_zip
                },
                transactionId : token.card.id
            })
            neworder.save()

            res.send('order placed successfully')
        }
        else {
            res.send('payment failed')
        }
    } catch (error) {
        return res.status(400).json({ message: 'something went wrong' + error })
    }
});

router.post("/getuserorders",async(req,res)=>{
    const {userid}=req.body
    try {
        const orders = await Order.find({userid : userid})
        res.send(orders)
    } catch (error) {
        return res.status(400).json({message:'something went wrong' + error})
    }
})

router.get("/getallorders", async(req,res)=>{
    try {
        const orders = await Order.find({})
        res.send(orders)
    } catch ({error}) {
        return res.status(400).json({message:error})
    }
})


router.post("/deliverorder", async(req,res)=>{
    const orderid = req.body.orderid
    try {
        const order = await Order.findOne({_id:orderid})
        order.isDelivered = true
        await order.save()
        res.send('order delivered successfully')
    } catch (error) {
        return res.status(400).json({message:error})
    }
})

module.exports = router