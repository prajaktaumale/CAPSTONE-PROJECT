import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { addPizza } from "../actions/pizzaActions";

export default function Addpizza() {
    const [name, setname] = useState('')
    const [smallprice, setsmallprice] = useState('')
    const [mediumprice, setmediumprice] = useState('')
    const [largeprice, setlargeprice] = useState('')
    const [image, setimage] = useState('')
    const [category, setcategory] = useState('')
    const [description, setdescription] = useState('')
    const dispatch = useDispatch()


    function formHandler(e) {
        e.preventDefault();
        const pizza = {
            name,
            image,
            description,
            category,
            prices:{
                small:smallprice,
                medium : mediumprice,
                large : largeprice
            }
        }
        console.log(pizza)
        dispatch(addPizza(pizza))

    }

    return (
        <div>
            <h2>Add Item</h2>
            <div>
                <form onSubmit={formHandler} className='shadow-lg p-3 mb-5 bg-white rounded'>
                    <input required type="text" placeholder='Name Of The Item' className='form-control' value={name} onChange={(e) => { setname(e.target.value) }} />
                    <input required type="text" placeholder='Small Varient Price' className='form-control' value={smallprice} onChange={(e) => { setsmallprice(e.target.value) }} />
                    <input required type="text" placeholder='Medium Varient Price' className='form-control' value={mediumprice} onChange={(e) => { setmediumprice(e.target.value) }} />
                    <input required type="text" placeholder='Large Varient Price' className='form-control' value={largeprice} onChange={(e) => { setlargeprice(e.target.value) }} />
                    <input required type="text" placeholder='Image URL' className='form-control' value={image} onChange={(e) => { setimage(e.target.value) }} />
                    <input required type="text" placeholder='Category' className='form-control' value={category} onChange={(e) => { setcategory(e.target.value) }} />
                    <input required type="text" placeholder='Description' className='form-control' value={description} onChange={(e) => { setdescription(e.target.value) }} />
                    <button style={{ backgroundColor: 'red', color: 'white' }} className="btn mt-3" type="submit">Add Item</button>
                </form>
            </div>
        </div>
    )
}