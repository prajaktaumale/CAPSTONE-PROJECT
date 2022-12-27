export const getAllRestaurantReducer=(state={restaurants : []}, action)=>{

    switch(action.type)
    {
        case 'GET_RESTAURANTS_REQUEST': return{
            loading :true,
            ...state
        }
        case 'GET_RESTAURANTS_SUCCESS': return{
            loading : false,
            restaurants : action.payload
        }
        case 'GET_RESTAURANTS_FAILED': return{
            loading : false, 
            error : action.payload
        }
        default : return state
    }
}

export const addRestaurantReducer=(state={}, action)=>{

    switch(action.type)
    {
        case 'GET_RESTAURANTS_REQUEST': return{
            loading :true,
            ...state
        }
        case 'GET_RESTAURANTS_SUCCESS': return{
            loading : false,
            success : true
        }
        case 'GET_RESTAURANTS_FAILED': return{
            loading : false, 
            error : action.payload
        }
        default : return state
    }
}

