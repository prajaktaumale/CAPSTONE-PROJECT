import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllRestuarant } from "../actions/restaurantAction";
import { deleteRestaurant } from "../actions/restaurantAction";
import { Link } from "react-router-dom";

export default function Restaurantlist(){
    const dispatch = useDispatch()
    const restaurantsstate = useSelector(state => state.getAllRestaurantReducer)
    const { restaurants, error, loading } = restaurantsstate
    useEffect(() => {
        dispatch(getAllRestuarant())
    }, [])
    return(
        <div>
            <h2>Restaurant List</h2>
            <table className="table table-striped table-dark table-bordered">
                <thead className="thead">
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Opening Time</th>
                        <th>Closing Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants && restaurants.map(restaurant => {
                        return <tr>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.address}</td>
                            <td>{restaurant.openingtime}</td>
                            <td>{restaurant.closingtime}</td>
                            <td>
                                <i class="fa-solid fa-trash" style={{ color: 'red' }} onClick={()=>{dispatch(deleteRestaurant(restaurant._id))}} ></i>  <br />
                            </td>
                        </tr>
                    })}
                </tbody>

                </table>
        </div>
    )
}