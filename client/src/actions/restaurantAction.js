import axios from 'axios'
export const getAllRestuarant = () => async dispatch => {

    dispatch({ type: 'GET_RESTAURANTS_REQUEST' })

    try {
        const response = await axios.get('/api/restaurants/getallrestaurants')
        console.log(response)
        dispatch({ type: 'GET_RESTAURANTS_SUCCESS', payload: response.data})
    } catch (error) {
    dispatch({type:'GET_RESTAURANTS_FAILED', payload: error})

    }

}

export const addRestaurant=(restaurant)=>async dispatch=>{

    dispatch({type:'GET_RESTAURANTS_REQUEST'})
    try {
        const response = await axios.post('/api/restaurants/addRestaurant',{restaurant})
        console.log(response) 
        alert('New Restaurant Added Successfully')
        dispatch({type:'GET_RESTAURANTS_SUCCESS'})
        window.location.href='/admin/restaurantlist'
    } catch (error) {
        dispatch({type:'GET_RESTAURANTS_FAILED', payload: error})
    }

}

export const deleteRestaurant=(restaurantid)=>async dispatch=>{
    try {
        const response = await axios.post('/api/restaurants/deleterestaurant', {restaurantid})
        alert('Restaurant Deleted Successfully') 
        console.log(response)
        window.location.reload()
    } catch (error) {
        alert('something went wrong')
        console.log(error)
    }
}

