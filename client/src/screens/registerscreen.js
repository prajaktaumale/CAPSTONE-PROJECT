import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useState, useEffect } from 'react'
import { registerUser } from '../actions/userActions';
import Loading from '../component/Loading';
import Error from '../component/Error';
import Success from '../component/Success';

export default function Registerscreen(){
    const [name, setname] = useState('');
    const [email,setemail] = useState('');
    const [mnumber, setmnumber] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');
    const registerstate = useSelector(state=>state.registerReducer)
    const {error, loading, success} = registerstate
    const dispatch = useDispatch()


    function register(){
        if(password!=cpassword)
        {
            alert('Passwords are not matched')
        }
        else{
            const user={
                name,
                email,
                mnumber,
                password
            }
            console.log(user)
            dispatch(registerUser(user))
        }
    }
    
    return(
        <div>
            
            <div className='row justify-content-center mt-5 '>
                <div className='col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded'>

                    {loading && (<Loading />)}
                    {success && (<Success success='User Registered Successfully' />)}
                    {error && (<Error error='Email Already Exists' />)}

                <h2 style={{fontSize:'30px'}}>REGISTER</h2>
                    <div>
                        <input required type="text" placeholder='Name' className='form-control' value={name} onChange={(e)=>{setname(e.target.value)}} />
                        <input required type="text" placeholder='Email' className='form-control' value={email} onChange={(e)=>{setemail(e.target.value)}} />
                        <input required type="text" placeholder='Mobile Number' className='form-control' value={mnumber} onChange={(e)=>{setmnumber(e.target.value)}} />
                        <input required type="text" placeholder='Password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                        <input required type="text" placeholder='Confirm Password' className='form-control' value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}} />
                        <button onClick={register} className='btn mt-4 mb-3' style={{backgroundColor:'red', color:'white'}}>REGISTER</button>
                        <br />
                        <a style={{color:'black'}} href='/login'>Click Here To Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}