import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Restaurant from "../component/restaurant";
import { getAllRestuarant } from '../actions/restaurantAction'
import { getAllRestaurantReducer } from "../reducers/restaurantReducer";
import Loading from "../component/Loading";
import Error from "../component/Error";
import aos from 'aos'
import Aos from "aos";
import 'aos/dist/aos.css';


export default function Restaurantscrren() {

    Aos.init()

    const dispatch = useDispatch()
    const restaurantsstate = useSelector(state => state.getAllRestaurantReducer)
    const { restaurants, error, loading } = restaurantsstate
    useEffect(() => {
        dispatch(getAllRestuarant())
    }, [])

    return (
        <div>
            <h2>Restaurant List</h2>
            <div className="row justify-content-center" data-aos='fade-up'>

                {loading ? 
                <Loading /> : 
                error ? (
                    <Error error='something went wrong'/>
                ) : (
                    restaurants.map(restaurant => {
                        return <div className="col-md-3 m-3">
                            <div>
                                <Restaurant restaurant={restaurant} />
                            </div>
                        </div>
                    })
                )}



            </div>
        </div>
    )
}