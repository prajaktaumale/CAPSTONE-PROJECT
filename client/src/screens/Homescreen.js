import React from "react";
import Pizza from "../component/pizza";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../component/Loading";
import Error from "../component/Error";

export default function Homescreen() {
    const dispatch = useDispatch()
    const pizzasstate = useSelector(state => state.getAllPizzasReducer)
    const { pizzas,loading, error} = pizzasstate
    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])
    return (
        <div>
            <h2>Menu</h2>
            <div className="row justify-content-center">

                {loading ? (
                    <Loading />
                ) : error ? (
                    <Error error='something went wrong'/>
                ) : (
                    pizzas.map(pizza => {
                        return <div className="col-md-3 m-3" key = {pizza._id}>
                            <div>
                                <Pizza pizza={pizza} />
                            </div>
                        </div>
                    })
                )}
            </div>
        </div>
    )
}