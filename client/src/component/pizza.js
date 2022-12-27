import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { addToCart } from "../actions/cartActions";
import aos from 'aos'
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Pizza({ pizza }) {

    Aos.init()

    const [quantity, setquantity] = useState(1)
    const [varient, setvarient] = useState('small')
    //these 3 statement is for modal function
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const dispatch = useDispatch()
    function addtocart() {
        dispatch(addToCart(pizza, quantity, varient)) //to add item to the cart using dispatch method
    }

    return (
        <div className="shadow-lg p-3 mb-5 bg-white rounded" data-aos='zoom-in'>
             <div onClick={handleShow}> {/*here we used handleShow function to disply the modal after clicking on image or name */}
                <h1>{pizza.name}</h1>
                <img className="img-fluid" src={pizza.image} style={{ height: '200px', width: '200px' }} />
            </div>
            <div className="flex-container">
                <div className="w-100 m-1">
                    <p>Varients</p>
                    <select className="form-control" value={varient} onChange={(e) => { setvarient(e.target.value) }}>
                        {pizza.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select className="form-control" value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => { //here we used two parameter one is for object and other is for index
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-container">
                <div className="w-100 m-1">
                    <h5>Prices: &#x20B9; {pizza.prices[0][varient] * quantity} /-</h5>
                </div>
                <div className="w-100 m-1">
                    <button style={{ backgroundColor: 'red', color: 'white' }} className="btn" onClick={addtocart}>ADD TO CART</button>
                </div>
            </div>

                        {/*to show the details of each item after clicking on name and image of item */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{pizza.category}</p>
                    <img src={pizza.image} style={{ height: '200px', width: '200px' }} />
                    <p>{pizza.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose} className="btn">CLOSE</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}