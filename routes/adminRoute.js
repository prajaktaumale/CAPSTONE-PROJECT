const express = require("express")
const router = express.Router();
const Admin = require('../models/adminModal')

router.post("/adminregister",async(req,res)=>{

    const {name, address, openingtime, closingtime, password} = req.body

    const newAdmin = new Admin({name,address,openingtime,closingtime, password})
    try {
        newAdmin.save()
        res.send('registered successfully')
    } catch (error) {
        return res.status(400).json({message:'something went wrong'+ error});
    }

});

router.post("/adminlogin",async(req,res)=>{

    const {rname, password} = req.body
    try {
       const admin = await Admin.find({rname, password}) //to find the user in mangodb 
        if(admin.length > 0) //if alrrady present condition
        {
           const currentAdmin = {
            rname : user[0].name,
            isAdmin: user[0].isAdmin,
            _id: user[0]._id
           }
           res.send(currentAdmin);
        }
        else{
            return res.status(400).json({message:'something went wrong'+ error});
        }
    } catch (error) {
        return res.status(400).json({message:'something went wrong'+ error});
    }

});

module.exports = router