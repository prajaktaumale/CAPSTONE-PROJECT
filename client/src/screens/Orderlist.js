import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { deliverOrder, getAllOrders } from "../actions/orderActions";
import { getAllOrdersReducer } from '../reducers/orderReducer'

export default function Orderlist() {
    const getordersstate = useSelector(state => state.getAllOrdersReducer)
    const { orders } = getordersstate
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllOrders())
    }, [])
    return (
        <div>
            <h2>Orders List</h2>
            <table className="table table-striped table-dark table-bordered">
                <thead className="thead">
                    <tr>
                        <th>Order Id</th>
                        <th>Email</th>
                        <th>User Id</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.map(order => {
                        return <tr>
                            <td>{order._id}</td>
                            <td>{order.email}</td>
                            <td>{order.userid}</td>
                            <td>{order.orderAmount}</td>
                            <td>{order.createdAt.substring(0, 10)}</td>
                            <td>
                                {/* below logic is that..when the delivery status is flase then show the button itherwise show delivered */}
                                {order.isDelivered ? 
                                (<h1>Delivered</h1>) : 
                                (<button style={{ backgroundColor: 'red' }} onClick={()=>{dispatch(deliverOrder(order._id))}}>Deliver </button>)}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}