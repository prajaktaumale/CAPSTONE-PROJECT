import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { addRestaurant } from "../actions/restaurantAction";


export default function Addrestaurant(){
    const [name, setname] = useState('')
    const [address, setaddress] = useState('')
    const [openingtime, setopeningtime] = useState('')   
    const [closingtime, setclosingtime] = useState('')
    const dispatch = useDispatch()

    function formHandler(e){
        e.preventDefault();
        const restaurant = {
            name,
            address,
            openingtime,
            closingtime
        }
        console.log(restaurant)
        dispatch(addRestaurant(restaurant))
    }
    return(
        <div>
            <h2>Add Restaurant</h2>
            <div>
                <form onSubmit={formHandler} className='shadow-lg p-3 mb-5 bg-white rounded'>
                    <input required type="text" placeholder='Name Of The Restaurant' className='form-control' value={name} onChange={(e)=>{setname(e.target.value)}} />
                    <input required type="text" placeholder='Address Of The Restaurant' className='form-control'value={address} onChange={(e)=>{setaddress(e.target.value)}} />
                    <input required type="text" placeholder='Opening Time' className='form-control' value={openingtime} onChange={(e)=>{setopeningtime(e.target.value)}} />
                    <input required type="text" placeholder='Closing Time' className='form-control' value={closingtime} onChange={(e)=>{setclosingtime(e.target.value)}} />
                    <button style={{ backgroundColor: 'red', color: 'white' }} className="btn mt-3" type="submit">Add Restaurant</button>
                </form>
            </div>
        </div>
    )
}