import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from "../actions/pizzaActions";
import { deletePizza } from "../actions/pizzaActions";
import { Link } from "react-router-dom";

export default function Pizzalist() {

    const dispatch = useDispatch()
    const pizzasstate = useSelector(state => state.getAllPizzasReducer)
    const { pizzas, error, loading } = pizzasstate
    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])
    return (
        <div>
            <h2>Menu List</h2>
            <table className="table table-striped table-dark table-bordered">
                <thead className="thead">
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzas && pizzas.map(pizza => {
                        return <tr>
                            <td>{pizza.name}</td>
                            <td>
                                Small : {pizza.prices[0]['small']} <br />
                                Medium : {pizza.prices[0]['medium']}<br />
                                Large : {pizza.prices[0]['large']}<br />
                            </td>
                            <td>{pizza.category}</td>
                            <td>
                                <i class="fa-solid fa-trash" style={{ color: 'red' }} onClick={()=>{dispatch(deletePizza(pizza._id))}}></i>  <br />
                                {/* <a href="/admin/editpizza"><i class="fa-solid fa-pen-to-square" style={{ color: 'blue' }}></i></a> */}
                                <Link to={`/admin/editpizza/${pizza._id}`}><i class="fa-solid fa-pen-to-square" style={{ color: 'blue' }}></i></Link>
                    
                            </td>
                        </tr>
                    })}
                </tbody>

            </table>
        </div>
    )
}