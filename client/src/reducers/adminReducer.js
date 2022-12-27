export const adminRegisterReducer=(state={}, action)=>dispatch=>{

    switch(action.type)
    {
        case 'ADMIN_REGISTER_REQUEST': return{
            loading:true
        }
        case 'ADMIN_REGISTER_SUCCESS' : return{
            loading:false,
            success:true
        }
        case 'ADMIN_REGISTER_FAILED': return{
            loading:false,
            error:action.payload
        }
        default: return state
    }

}

export const adminloginReducer=(state={}, action)=>{

    switch(action.type)
    {
        case 'ADMIN_LOGIN_REQUEST': return{
            loading:true
        }
        case 'ADMIN_LOGIN_SUCCESS' : return{
            loading:false,
            success:true, 
            currentAdmin : action.payload
        }
        case 'ADMIN_LOGIN_FAILED': return{
            loading:false,
            error:action.payload
        }
        default: return state
    }

}
