import axios from 'axios'
export const registerAdmin=(admin)=> async dispatch=>{

    dispatch({type:'ADMIN_REGISTER_REQUEST'})
    try {
        const response = await axios.post('/api/admins/adminregister', admin)
        console.log(response)
        alert('Admin Register Succesfully')
        dispatch({type:'ADMIN_REGISTER_SUCCESS'})
    } catch (error) {
        dispatch({type:'ADMIN_REGISTER_FAILED', payload: error})
        
    }

}

export const loginAdmin=(admin)=> async dispatch=>{

    dispatch({type:'ADMIN_LOGIN_REQUEST'})
    try {
        const response = await axios.post('/api/admins/adminlogin', admin)
        console.log(response)
        alert('Admin Log In Successfully')
        dispatch({type:'ADMIN_LOGIN_SUCCESS', payload: response.data})
        localStorage.setItem('currentAdmin', JSON.stringify(response.data))
        window.location.href='/admin/pizzaslist'
    } catch (error) {
        dispatch({type:'ADMIN_LOGIN_FAILED', payload: error})
        
    }

}