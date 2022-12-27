

export const getAllPizzasReducer=(state={pizzas : []}, action)=>{

    switch(action.type)
    {
        case 'GET_PIZZAS_REQUEST': return{
            loading :true,
            ...state
        }
        case 'GET_PIZZAS_SUCCESS': return{
            loading : false,
            pizzas : action.payload
        }
        case 'GET_PIZZAS_FAILED': return{
            loading : false, 
            error : action.payload
        }
        default : return state
    }
}



export const addPizzaReducer=(state={}, action)=>{

    switch(action.type)
    {
        case 'ADD_PIZZAS_REQUEST': return{
            loading :true,
            ...state
        }
        case 'ADD_PIZZAS_SUCCESS': return{
            loading : false,
            success : true
        }
        case 'ADD_PIZZAS_FAILED': return{
            loading : false, 
            error : action.payload
        }
        default : return state
    }
}

export const getPizzaByIdReducer=(state={}, action)=>{

    switch(action.type)
    {
        case 'GET_PIZZABYID_REQUEST': return{
            loading :true,
            ...state
        }
        case 'GET_PIZZABYID_SUCCESS': return{
            loading : false,
            pizza : action.payload
        }
        case 'GET_PIZZABYID_FAILED': return{
            loading : false, 
            error : action.payload
        }
        default : return state
    }
}


export const editPizzaReducer=(state={}, action)=>{

    switch(action.type)
    {
        case 'EDIT_PIZZAS_REQUEST': return{
            editloading :true,
            ...state
        }
        case 'EDIT_PIZZAS_SUCCESS': return{
            editloading : false,
            editsuccess : true
        }
        case 'EDIT_PIZZAS_FAILED': return{
            editloading : false, 
            editerror : action.payload
        }
        default : return state
    }
}