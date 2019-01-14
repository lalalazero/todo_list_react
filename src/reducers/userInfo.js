import { 
    TOKEN_VALID_SUCCESS, 
    CHECK_USER_TOKEN,
    TOKEN_VALID_ERROR,
    USER_LOGGIN_REQUEST,
    USER_LOGGIN_SUCESS,
    USER_LOGGIN_FAIL
 } from './../constants'

const userInfo = (state={
    isAuthed: false,
    name: 'testUser',
    isLogging: false,
    isLogged: false,
    currentUser: {}
},action)=>{
    console.log('receive action = ',action.type)
    switch(action.type){
        case TOKEN_VALID_SUCCESS:{
            return{
                ...state,
                isAuthed: true,
                isLogging: false,
                isLogged: true
            }
        }
        case CHECK_USER_TOKEN:{
            return{
                ...state,
                isLogging: true,
                isAuthed: false
            }
        }
        case TOKEN_VALID_ERROR:{
            return{
                ...state,
                isLogging: false,
                isAuthed: false
            }
        }
        case USER_LOGGIN_REQUEST:{
            return{
                ...state,
                isLogging: true
            }
        }
        case USER_LOGGIN_FAIL:{
            return{
                ...state,
                isLogging: false,
                isLogged: false
            }
        }
        case USER_LOGGIN_SUCESS:{
            return {
                ...state,
                isLogging: false,
                isAuthed: true,
                isLogged: true,
                currentUser: action.user
            }
        }
        default: return state
    }
}


export default userInfo;