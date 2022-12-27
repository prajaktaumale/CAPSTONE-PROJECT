import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useState, useEffect } from 'react'
import { loginUser } from '../actions/userActions';


export default function Loginscreen(){
    const [email,setemail] = useState('');
    const [password, setpassword] = useState('');

    const dispatch = useDispatch()
    useEffect(()=>{
        if(localStorage.getItem('currentUser'))
        {
            window.location.href = '/'
        }
    }, [])

    function login(){
        const user = {email, password}
        dispatch(loginUser(user))
    }

    return(
        <div>
            <div className='row justify-content-center mt-5 '>
                <div className='col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded'>
                <h2 style={{fontSize:'30px'}}>LOGIN</h2>
                    <div>
                        <input required type="text" placeholder='Email' className='form-control' value={email} onChange={(e)=>{setemail(e.target.value)}} />
                        <input required type="text" placeholder='Password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                        <a onClick={login} className='btn mt-4 mb-3' style={{backgroundColor:'red', color:'white'}} href='/restaurant'>LOGIN</a>
                        <br/>
                        <a style={{color:'black'}} href='/register'>Click Here To Register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}