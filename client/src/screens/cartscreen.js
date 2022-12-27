import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { deleteFromCart } from '../actions/cartActions'
import Checkout from '../component/Checkout'
import aos from 'aos'
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Cartscreen(){

    Aos.init()

    const cartstate = useSelector(state=>state.cartReducer)
    const cartItems = cartstate.cartItems
    var subtotal = cartItems.reduce((x, item)=> x+item.price, 0)
    const dispatch = useDispatch()

    return(
        <div>
            <div className='row justify-content-center' data-aos='fade-right'>
                <div className='col-md-6'>
                    <h2 style={{fontSize:'40px'}}>My Cart</h2>
                    {cartItems.map(item=>{
                        return <div className='flex-container shadow-lg p-3 mb-5 bg-white rounded'>
                        <div className='w-100' style={{textAlign:'left'}}>
                            <h1>{item.name} [{item.varient}]</h1>
                            <h1>Price: {item.quantity}* {item.prices[0][item.varient]} = {item.price}</h1>
                            <h1 style={{display:'inline-block'}}>Quantity: </h1>
                            <i style={{color:'green'}} className="fa-solid fa-plus m-1" onClick={()=>{dispatch(addToCart(item, item.quantity+1, item.varient))}}></i>
                            <b>{item.quantity}</b>
                            <i style={{color:'red'}} className="fa-solid fa-minus m-1" onClick={()=>{dispatch(addToCart(item, item.quantity-1, item.varient))}}></i>
                            <hr/>
                        </div>
                        <div>
                            <img style={{height:'100px', width:'100px'}} src={item.image} />
                        </div>
                        <div className='mt-4'>
                        <i style={{color:'red'}} className="fa-solid fa-trash m-3" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                        </div>
                    </div>
                    })}
                </div>
                <div className='col-md-4'>
                    <h2 style={{fontSize:'40px'}}>Subtotal: &#x20B9;{subtotal} /-</h2>
                    <Checkout subtotal={subtotal} />
                </div>
            </div>
        </div>
    )
}
