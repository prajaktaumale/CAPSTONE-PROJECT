import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/userActions'


export default function Navbar() {

  const cartstate = useSelector(state => state.cartReducer)
  const userstate = useSelector(state => state.loginReducer)
  const { currentUser } = userstate
  const dispatch = useDispatch()

  
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">PU FOOD</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* below condition is for if the user is logged in then show the name of user instead showing login */}
            {currentUser ? (
            <div className="dropdown m-1">
            <span style={{fontSize:'25px',fontWeight: '400', cursor:'pointer', textDecoration:'underline'}}>{currentUser.name}</span>
            <div className="dropdown-content">
              <a style={{color:'black', fontWeight:'400', fontSize:'18px',cursor:'pointer'}} href="/order">Orders</a><br/>
              <a style={{color:'black', fontWeight:'400', fontSize:'18px',cursor:'pointer'}}href="/homescreen">Menu</a><br/>
              <a style={{color:'black', fontWeight:'400', fontSize:'18px',cursor:'pointer'}}href="/restaurant">Restaurant</a>
              <li style={{color:'black', fontWeight:'400',fontSize:'18px',cursor:'pointer'}} onClick={()=>{dispatch(logoutUser())}} >LogOut</li>
            </div>
          </div>
              ) : (
              <li className="nav-item">
                <a style={{ fontWeight: '600', color: 'black', fontSize: '20px' }} className="nav-link" href="/login">Login</a>
              </li>
            )}
                <li className="nav-item">
                <a style={{ fontWeight: '600', color: 'black', fontSize: '20px' }} className="nav-link" href="/adminregister">Admin</a>
              </li>
               
           
            <li className="nav-item">
              <a style={{ fontWeight: '600', color: 'black', fontSize: '20px' }} className="nav-link" href="/cart">Cart {cartstate.cartItems.length}</a>
            </li>
          </ul>
        </div>
      </nav >
    </div >
  )
}