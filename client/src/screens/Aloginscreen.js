import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useState, useEffect } from 'react'
import { loginAdmin } from '../actions/adminAction';

export default function Adminloginscreen(){
    const [rname,setrname] = useState('');
    const [password, setpassword] = useState('');

    const dispatch = useDispatch()
    useEffect(()=>{
        if(localStorage.getItem('currentAdmin'))
        {
            window.location.href = '/admin'
        }
    }, [])

    function Adminlogin(){
        const admin = {rname, password}
        dispatch(loginAdmin(admin))
    }

    return(
        <div>
            <div className='row justify-content-center mt-5 '>
                <div className='col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded'>
                <h2 style={{fontSize:'30px'}}>LOGIN</h2>
                    <div>
                        <input required type="text" placeholder='Name' className='form-control' value={rname} onChange={(e)=>{setrname(e.target.value)}} />
                        <input required type="text" placeholder='Password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                        <a onClick={Adminlogin} className='btn mt-4 mb-3' style={{backgroundColor:'red', color:'white'}} href='/admin'>LOGIN</a>
                        <br/>
                        <a style={{color:'black'}} href='/adminregister'>Click Here To Register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}