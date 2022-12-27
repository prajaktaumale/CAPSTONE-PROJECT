import axios from 'axios'
export const getAllPizzas = ()=>async dispatch=>{

    dispatch({type:'GET_PIZZAS_REQUEST'})

    try {
        const response = await axios.get('/api/pizzas/getallpizzas')
        console.log(response)
        dispatch({type:'GET_PIZZAS_SUCCESS', payload :response.data})
    } catch (error) {
        dispatch({type:'GET_PIZZAS_FAILED', payload:error})
    }
}

export const addPizza=(pizza)=>async dispatch=>{

    dispatch({type:'ADD_PIZZA_REQUEST'})
    try {
        const response = await axios.post('/api/pizzas/addpizza',{pizza})
        console.log(response) 
        alert('New Item Added Successfully')
        dispatch({type:'ADD_PIZZA_SUCCESS'})
        window.location.href='/admin/pizzalist'
    } catch (error) {
        dispatch({type:'ADD_PIZZA_FAILED', payload: error})
    }

}


export const deletePizza=(pizzaid)=>async dispatch=>{

    try {
       const response= await axios.post('/api/pizzas/deletepizza', {pizzaid})
       alert('Item Deleted Successfully')
       console.log(response)
       window.location.reload() //te reload the homescreen if we don't write this statment then we need to fetch the data one more time
    } catch (error) {
        alert('something went wrong')
        console.log(error)
    }
}

export const getPizzaById = (pizzaid)=>async dispatch=>{

    dispatch({type:'GET_PIZZABYID_REQUEST'})

    try {
        const response = await axios.post('/api/pizzas/getpizzabyid',{pizzaid})
        console.log(response)
        dispatch({type:'GET_PIZZABYID_SUCCESS', payload :response.data})
    } catch (error) {
        dispatch({type:'GET_PIZZABYID_FAILED', payload:error})
    }
}

export const editPizza=(editedpizza)=>async dispatch=>{

    dispatch({type:'EDIT_PIZZA_REQUEST'})
    try {
        const response = await axios.post('/api/pizzas/editpizza',{editedpizza})
        console.log(response) 
        alert('Item Edited Successfully')
        dispatch({type:'EDIT_PIZZA_SUCCESS'})
        window.location.href='/admin/pizzalist'
    } catch (error) {
        dispatch({type:'EDIT_PIZZA_FAILED', payload: error})
    }

}

