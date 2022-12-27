import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { useState, useEffect } from 'react'
import {registerAdmin} from '../actions/adminAction'

export default function Adminregisterscreen(){
    const [rname, setrname] = useState('');
    const [address, setaddress] = useState('');
    const [openingtime , setopeningtime] = useState('');
    const [closingtime, setclosingtime] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');

    const dispatch = useDispatch()

    function register(){
        if(password!=cpassword)
        {
            alert('Passwords are not matched')
        }
        else{
            const admin={
                rname,
                address,
                openingtime,
                closingtime,
                password
            }
            console.log(admin)
            dispatch(registerAdmin(admin))
        }
    }
    return(
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <h2 style={{fontSize:'30px'}}>ADMIN REGISTER</h2>
                    <div>
                        <input type='text' placeholder='Restaurant Name' className="form-control" value={rname} onChange={(e)=>{setrname(e.target.value)}} />
                        <input type='text' placeholder='Restaurant Address' className="form-control" value={address} onChange={(e)=>{setaddress(e.target.value)}}/>
                        <input type='text' placeholder='Opening Time' className="form-control" value={openingtime} onChange={(e)=>{setopeningtime(e.target.value)}}/>
                        <input type='text' placeholder='Closing Time' className="form-control" value={closingtime} onChange={(e)=>{setclosingtime(e.target.value)}}/>
                        <input type='text' placeholder='Password' className="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                        <input type='text' placeholder='Confirm Password' className="form-control" value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}} />
                        <button onClick={register} className='btn mt-4 mb-3' style={{backgroundColor:'red', color:'white'}}>Register</button>
                        <br />
                        <a style={{color:'black'}} href='/adminlogin'>Click Here To Login</a>
                    </div>

                </div>
            </div>
        </div>
    )
}