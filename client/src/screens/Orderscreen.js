import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import {getUserOrders} from '../actions/orderActions'
import Loading from '../component/Loading';
import Error from '../component/Error';
import Success from '../component/Success';
import aos from 'aos'
import Aos from "aos";
import 'aos/dist/aos.css';


export default function Orderscreen(){
    Aos.init()

    const dispatch = useDispatch()
    const orderstate = useSelector(state=>state.getUserOrdersReducer)
    const {orders , error, loading} = orderstate

    useEffect(()=>{
        dispatch(getUserOrders())
    }, [])
    return(
        <div>
        <h2 style={{fontSize:'35px'}}>My Orders</h2>
        <hr/>
        <div className='row justify-content-center' data-aos='fade-up'>
            {loading && (<Loading />)}
            {error && (<Error error='something went wrong'/>)}
            {orders && orders.map(order=>{
                return <div className='col-md-8 m-3' style={{backgroundColor:'wheat'}}>
                    <div className='flex-container'>
                        <div className='text-left w-100 m-1'>
                            <h2 style={{fontSize:'25px'}}>Items</h2>
                            <hr/>
                            {order.orderItems.map(item=>{
                                return <div>
                                    <h1>{item.name} [{item.varient}] * {item.quantity} = {item.price}</h1>
                                </div>
                            })}
                        </div>
                        <div className='text-left w-100 m-1'>
                        <h2 style={{fontSize:'25px'}}>Address</h2>
                        <hr/>
                        <h1>Street: {order.shippingAddress.Street}</h1>
                        <h1>City: {order.shippingAddress.City}</h1>
                        <h1>Country: {order.shippingAddress.Country}</h1>
                        <h1>Pincode: {order.shippingAddress.Pincode}</h1>
                        </div>
                        <div className='text-left w-100 m-1'>
                        <h2 style={{fontSize:'25px'}}>Order Info</h2>
                        <hr/>
                        <h1>Order Amount : {order.orderAmount}</h1>
                        <h1>Date: {order.createdAt.substring(0,10)}</h1>
                        <h1>Transaction Id: {order.transactionId}</h1>
                        <h1>Order Id: {order._id}</h1>
                        </div>
                    </div>
                </div>
            })}
        </div>
        </div>
    )
}