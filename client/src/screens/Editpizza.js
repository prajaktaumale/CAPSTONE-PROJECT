import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { getPizzaById } from "../actions/pizzaActions";
import {getPizzaByIdReducer} from '../reducers/pizzaReducers'
import { editPizza } from "../actions/pizzaActions";
import { editPizzaReducer } from "../actions/pizzaActions";


export default function Editpizza({ match }) {
    const params = useParams();
    const dispatch = useDispatch()
    const [name, setname] = useState('')
    const [smallprice, setsmallprice] = useState('')
    const [mediumprice, setmediumprice] = useState('')
    const [largeprice, setlargeprice] = useState('')
    const [image, setimage] = useState('')
    const [category, setcategory] = useState('')
    const [description, setdescription] = useState('')


    const getpizzabyidstate = useSelector(state => state.getPizzaByIdReducer)
    const { pizza, error, loading } = getpizzabyidstate
    const editpizzastate = useSelector(state => state.editPizzaReducer)
    const {editloading, editerror, editsuccess} = editpizzastate

    useEffect(() => {

        if(pizza){
                setname(pizza.name)
                setdescription(pizza.description)
                setcategory(pizza.category)
                setimage(pizza.image)
                setsmallprice(pizza.prices[0]['small'])
                setmediumprice(pizza.prices[0]['medium'])
                setlargeprice(pizza.prices[0]['large'])

        }
        else{
            dispatch(getPizzaById(params.pizzaid))
        }

        
    }, [pizza, dispatch])

    function formHandler(e) {
        e.preventDefault();
        const editedpizza = {
            _id : params.pizzaid,
            name,
            image,
            description,
            category,
            prices: {
                small: smallprice,
                medium: mediumprice,
                large: largeprice
            }
        }
        console.log(editedpizza)
        dispatch(editPizza(editedpizza))
    }

    return (
        <div>
            <h2>Edit Item</h2>
            <h1>Pizza Id: {params.pizzaid}</h1>
            <div>
                <form onSubmit={formHandler} className='shadow-lg p-3 mb-5 bg-white rounded'>
                    <input required type="text" placeholder='Name Of The Pizza' className='form-control' value={name} onChange={(e) => { setname(e.target.value) }} />
                    <input required type="text" placeholder='Small Varient Price' className='form-control' value={smallprice} onChange={(e) => { setsmallprice(e.target.value) }} />
                    <input required type="text" placeholder='Medium Varient Price' className='form-control' value={mediumprice} onChange={(e) => { setmediumprice(e.target.value) }} />
                    <input required type="text" placeholder='Large Varient Price' className='form-control' value={largeprice} onChange={(e) => { setlargeprice(e.target.value) }} />
                    <input required type="text" placeholder='Image URL' className='form-control' value={image} onChange={(e) => { setimage(e.target.value) }} />
                    <input required type="text" placeholder='Category' className='form-control' value={category} onChange={(e) => { setcategory(e.target.value) }} />
                    <input required type="text" placeholder='Description' className='form-control' value={description} onChange={(e) => { setdescription(e.target.value) }} />
                    <button style={{ backgroundColor: 'red', color: 'white' }} className="btn mt-3" type="submit">Edit Item</button>
                </form>
            </div>
        </div>
    )
}